import React, { useEffect, useState } from "react";
import { Panel } from "../base/panel";

import { RoadMapItem, RootRoadMap } from "../../model/roadmapitem";
import { SVGRandStroke } from "../base/svgrandstroke";
import { SVGRoadmapItem } from "../../prefabs/roadmapitem/svgroadmapitem";
import { SVGRoadmapRing } from "../../prefabs/roadmapitem/svgroadmapring";
import { GridBackground } from "./RoadMap/GridBackgorund";

export interface ItemRoadMapParam {
  actor?: string;
  combo?: Array<string>;
}

export const ItemRoadMap: React.FC<ItemRoadMapParam> = ({
  actor = "",
  combo = [],
}) => {
  if (actor == "ring-player")
    return <SVGRoadmapRing color="#2673D9" width="100%" height="100%" />;
  else if (actor == "ring-banker")
    return <SVGRoadmapRing color="#F10149" width="100%" height="100%" />;
  else if (actor == "fill-banker")
    return (
      <SVGRoadmapItem text="" color="#F10149" width="100%" height="100%" />
    );
  else if (actor == "fill-player")
    return (
      <SVGRoadmapItem text="" color="#2673D9" width="100%" height="100%" />
    );
  else if (actor == "line-banker") {
    return (
      <SVGRandStroke
        color="#F10149"
        width="100%"
        height="100%"
        roundMode={true}
      />
    );
  } else if (actor == "line-player") {
    return <SVGRandStroke width="100%" height="100%" roundMode={true} />;
  } else if (actor.toLowerCase() == "player") {
    return (
      <SVGRoadmapItem text="P" color="#2673D9" width="100%" height="100%" />
    );
  } else if (actor.toLowerCase() == "banker") {
    return (
      <SVGRoadmapItem text="B" color="#F10149" width="100%" height="100%" />
    );
  } else if (actor.toLowerCase() == "tie") {
    return (
      <SVGRoadmapItem text="T" color="#01C995" width="100%" height="100%" />
    );
  } else if (actor == "combo-ring") {
    return (
      <div className="combobox-roadmap">
        <ItemRoadMap actor={combo[0]} />
        <ItemRoadMap actor={combo[1]} />
        <ItemRoadMap actor={combo[2]} />
        <ItemRoadMap actor={combo[3]} />
      </div>
    );
  } else
    return (
      <div
        style={{
          position: "relative",
          border: "none",
          width: "inherit",
          height: "inherit",
        }}
      ></div>
    );
};

export interface GridRoadMapParam {
  row?: number;
  column?: number;
  children?: React.ReactNode | null;
  containTie?: boolean;
}

export const GridRoadMap: React.FC<GridRoadMapParam> = ({
  row = 0,
  column = 0,
  children = null,
  containTie = false,
}) => {
  return (
    <div
      key={row + column}
      className="cell-roadmap"
      style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
    >
      {children}
      {!containTie ? (
        <></>
      ) : (
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <SVGRandStroke
            color="#01C995"
            width="100%"
            height="100%"
            roundMode={true}
            style={{ position: "absolute", transform: "scale(0.8, 0.8)" }}
          />
        </div>
      )}
    </div>
  );
};

export interface TableRoadMapParam {
  width: string;
  height: string;
  src?: RootRoadMap | null;
  mode?: string;
  xMaximum?: number;
  yMaximum?: number;
}

export const TableRoadMap: React.FC<TableRoadMapParam> = ({
  width,
  height,
  src = null,
  mode = "",
}) => {
  const [cells, setCells] = useState<Array<React.ReactNode>>([]);

  useEffect(
    function () {
      const tmpCells: Array<React.ReactNode> = [];
      if (mode == "ruled-road") {
        const tmpClassCells: Array<GridRoadMapParam> = [];
        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 24; j++) {
            const classItem: GridRoadMapParam = { row: j, column: i };
            tmpClassCells.push(classItem);
          }
        }

        if (src?.history != undefined) {
          //#region Construct-BigRoad
          let currentRow = 0;
          let currentColumn = 0;
          let prevRow = 0;
          let prevColumn = 0;
          let prevDragonRepeat = 0;
          let dragonRepeat = 0;
          const maxRow = 5;
          const maxColumn = 24;
          let oldValue: string | undefined = "";
          for (let i = 0; i < src?.history?.length; i++) {
            if (oldValue != "") {
              if (oldValue != src.history[i].result) {
                prevRow = currentRow;
                prevColumn = currentColumn;
                prevDragonRepeat = dragonRepeat;
                dragonRepeat = 0;
                currentRow = 0;
                currentColumn += 1;
                if (currentColumn >= maxColumn) break;
                else {
                  if (src.history[i].result == "tie") {
                    const getClassItem = tmpClassCells.find(
                      (x) =>
                        x.row == prevRow &&
                        x.column == prevColumn + prevDragonRepeat
                    );
                    if (getClassItem != null) {
                      getClassItem.containTie = true;
                      //oldValue = src.history[i].result;
                      dragonRepeat = prevDragonRepeat;
                      currentRow = prevRow;
                      currentColumn = prevColumn;
                    }
                    continue;
                  }
                  const getClassItem = tmpClassCells.find(
                    (x) => x.row == currentRow && x.column == currentColumn
                  );
                  if (getClassItem != null) {
                    const resultInput = "ring-" + src.history[i].result;
                    getClassItem.children = (
                      <ItemRoadMap
                        actor={src == null ? "" : resultInput}
                        combo={[]}
                      />
                    );
                    oldValue = src.history[i].result;
                  }
                }
              } else {
                if (src.history[i].result == "tie") {
                  const getClassItem = tmpClassCells.find(
                    (x) =>
                      x.row == prevRow &&
                      x.column == prevColumn + prevDragonRepeat
                  );
                  if (getClassItem != null) {
                    getClassItem.containTie = true;
                    //oldValue = src.history[i].result;
                    currentRow = prevRow;
                    currentColumn = prevColumn;
                  }
                  continue;
                }
                prevRow = currentRow;
                currentRow++;
                if (currentRow >= maxRow) {
                  prevDragonRepeat = dragonRepeat;
                  if (dragonRepeat <= 0) {
                    dragonRepeat = currentColumn - 1;
                  } else {
                    dragonRepeat += 1;
                  }
                  prevRow = currentRow;
                  currentRow = maxRow - 1;
                }
                const getClassItem = tmpClassCells.find(
                  (x) =>
                    x.row == currentRow &&
                    x.column == currentColumn + dragonRepeat
                );
                if (getClassItem != null) {
                  const resultInput = "ring-" + src.history[i].result;
                  getClassItem.children = (
                    <ItemRoadMap
                      actor={src == null ? "" : resultInput}
                      combo={[]}
                    />
                  );
                  oldValue = src.history[i].result;
                }
              }
            } else {
              const getClassItem = tmpClassCells.find(
                (x) => x.row == currentRow && x.column == currentColumn
              );
              if (getClassItem != null) {
                const resultInput = "ring-" + src.history[i].result;
                getClassItem.children = (
                  <ItemRoadMap
                    actor={src == null ? "" : resultInput}
                    combo={[]}
                  />
                );
                oldValue = src.history[i].result;
                // currentRow++;
                // if (currentRow >= maxRow) {
                //   currentColumn++;
                //   currentRow = 0;
                // }
              }
            }
          }
        }

        for (let i = 0; i < 8; i++) {
          for (let j = 0; j < 24; j++) {
            const getClassItem = tmpClassCells.find(
              (x) => x.row == i && x.column == j
            );
            if (getClassItem != null) {
              tmpCells.push(
                <GridRoadMap
                  row={getClassItem.row}
                  column={getClassItem.column}
                  containTie={getClassItem.containTie}
                >
                  {getClassItem.children}
                </GridRoadMap>
              );
            } else {
              tmpCells.push(<GridRoadMap row={j} column={i}></GridRoadMap>);
            }
          }
        }
        //#endregion Construct-BigRoad
      } else {
        for (let i = 0; i < 192; i++) {
          const index = i;
          const historyItem: RoadMapItem | undefined = src?.history[index];
          tmpCells.push(
            <div
              key={index}
              className="cell-roadmap"
              style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
            >
              <ItemRoadMap
                actor={src == null ? "" : historyItem?.result}
                combo={src == null ? [] : historyItem?.combo}
              />
            </div>
          );
        }
      }
      setCells(tmpCells);
    },
    [src]
  );

  return (
    <div
      className={mode == "ruled-road" ? "table-roadmap-ruled" : "table-roadmap"}
      style={{ width: width, height: height, border: "0.8px solid #F4F4F4" }}
    >
      {cells}
    </div>
  );
};

// interface TableHistoryParam {
//   src?: RootRoadMap | null;
//   mode?: string;
// }

export const TableHistory: React.FC = () => {
  return <GridBackground />;
};

export function PanelHistory() {
  // const [roadmapdata, setRoadmap] = useState<RootRoadMap | null>(null);
  // const gameCode = useSelector((state: StateMainPage) => state.code);

  async function CallRoadmap() {
    return;
  }

  useEffect(function () {
    CallRoadmap();
  }, []);

  return (
    <Panel
      className="customscrollbar"
      style={{
        width: "100%",
        flex: "0.8",
        padding: "0px 13px 0px 13px",
        margin: "0px",
        position: "relative",
        overflowX: "visible",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      }}
      children={[<TableHistory />]}
    />
  );
}
