import { useDispatch, useSelector } from "react-redux";
import { Button } from "../base/button";
import { Panel } from "../base/panel";
import { StateMainPage } from "../../model/betselection";
import { SVGClose } from "../base/svgclose";
import { PanelHistory2 } from "./tablehistory2";

// function TableCell(props: any) {
//   return (
//     <Panel
//       style={{
//         width: props.width,
//         height: props.height,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "10px",
//         border: "0.8px solid #F4F4F4",
//       }}
//     />
//   );
// }

// function TableRow(props: any) {
//   let cells = [];
//   let pctWidth = 100 / props.numOfCells;
//   for (let i = 0; i < props.numOfCells; i++) {
//     cells.push(<TableCell height="100%" width={pctWidth.toString() + "%"} />);
//   }
//   return (
//     <Panel
//       style={{
//         width: props.width,
//         height: props.height,
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       children={cells}
//     />
//   );
// }

// function TableHistory(props: any) {
//   let rows = [];
//   for (let i = 0; i < props.numOfRow; i++) {
//     rows.push(TableRow(props));
//   }
//   return (
//     <div
//       style={{
//         width: "auto",
//         height: "80%",
//         display: "inline-block",
//         margin: "0px 2px",
//         padding: "4px 5px 5px 3px",
//         borderRadius: "6px",
//         background: "#FFF",
//         aspectRatio: "144/49",
//       }}
//       children={[
//         <Panel
//           style={{
//             width: "auto",
//             height: "100%",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           children={rows}
//         />,
//       ]}
//     ></div>
//   );
// }

export function LandscapeRoadmap(props: any) {
  const dispatchBetAction = useDispatch();
  const showRoadmap = useSelector((state: StateMainPage) => state.showRoadmap);

  return (
    <Panel
      className={`overlay-panel ${showRoadmap == true ? "" : "close"}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        justifyContent: "flex-start",
      }}
    >
      {props.children}
      <PanelHistory2 />
      <Panel
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="rbutton"
          onClick={() => {
            dispatchBetAction({
              type: "setActiveRoadmap",
              showRoadmap: false,
            });
          }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100px",
            border: "0.8px solid rgba(133, 135, 157, 0.50)",
            background: "rgba(0, 0, 0, 0.32)",
            backdropFilter: "blur(2px)",
          }}
        >
          <SVGClose />
        </Button>
      </Panel>
    </Panel>
  );
}
