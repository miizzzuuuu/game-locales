import { BaseV2Roadmap, IKeyNumberDict } from "./M23";
export const pcode = "m22";

const basePcode: string = pcode;

const isPortrait = () => true;

function nary(N: number) {
  return !isNaN(N) ? [...new Array(N + 1).keys()].slice(1) : [];
}

export type OptionalJSXElement = JSX.Element | null;

export enum RoadmapDirections {
  Down,
  Right,
}

/**
 * Counts elements in an array, returns object.
 * Reference:
 *   https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
 * @example
 *   getArrayElementCounts(["a", "b", "c", "a"])
 * @param ary The array to check.
 * @returns {object: {string: any}} {"a": 2, "b": 1, "c": 1};
 */
function getArrayElementCounts(ary: any[]): IKeyNumberDict {
  const counts: IKeyNumberDict = {};
  ary.forEach((x) => {
    counts[x + ""] = (counts[x + ""] || 0) + 1;
  });
  return counts;
}

function joinClassList(...classListAry: string[]) {
  return classListAry.filter((x) => x).join(" ");
}

/**
 * @returns array elements without duplicates
 */
function uniq(ary: any[]): any[] {
  return [...new Set(ary)];
}

/**
 * Used as filter lambda function.
 * Reference: https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
 * @param value Current value of the iterator.
 * @param index Current index of the iterator.
 * @param self Reference to the array itself.
 * @returns {any[]} Only unique elements (remove duplicates) of an array.
 * @deprecated Use Set instead
 */
// function onlyUnique(value: any, index: number, self: any[]): boolean {
// 	return self.indexOf(value) === index;
// }

export {
  getArrayElementCounts,
  // onlyUnique
  joinClassList,
  uniq,
};

// import CardTooltip from "src/components/RoadmapCardTooltip";

export interface NewSimpleBigRoadTileData {
  ele: Element | null;
  color: string | null;
  blink: string;
}

function addBigRoadDisplay(
  this: BaseV2Roadmap,
  displayAry: Array<Array<OptionalJSXElement>> | NewSimpleBigRoadTileData,
  tile: OptionalJSXElement,
  type: string
) {
  // console.log("aBRD", displayAry);
  const maxRow = 5;
  const maxIdxRow = maxRow - 1;
  //layout
  //BPB
  //BPB
  //BPB
  //BPBB
  //BPPP
  //BBBB
  if (this.currentType === type && this.currentDisplayRow! >= maxIdxRow) {
    this.currentDirection = RoadmapDirections.Down;

    this.currentDisplayCol!++;
  } else if (
    this.currentType !== type ||
    this.currentDisplayRow! >= maxIdxRow
  ) {
    this.currentDirection = RoadmapDirections.Down;

    this.currentDisplayRow = 0;
    this.lastDisplayCol! += 1;
    this.currentDisplayCol = this.lastDisplayCol;
  } else {
    // @ts-ignore
    if (displayAry[this.currentDisplayRow! + 1][this.currentDisplayCol!])
      this.currentDirection = RoadmapDirections.Right;

    if (this.currentDirection === RoadmapDirections.Right)
      this.currentDisplayCol!++;
    else this.currentDisplayRow!++;
  }

  //nudge columns to the left on every overflow
  if (this.currentDisplayCol! >= this.totalColumns!)
    // console.log("aBRD cDC", self.currentDisplayCol);
    this.firstRoadmapDisplayedCol =
      this.currentDisplayCol! - this.totalColumns! + 1;

  // @ts-ignore
  displayAry[this.currentDisplayRow!][this.currentDisplayCol!] = tile;
  this.bigRoadSequence!.push([
    this.currentDisplayRow!,
    this.currentDisplayCol!,
  ]);

  this.currentType = type;
}

/** @deprecated */
export function addDisplayTileLegacy(
  this: BaseV2Roadmap,
  displayAry: any,
  tile: OptionalJSXElement,
  type: string
) {
  // console.log("aDT", this.currentType, type);
  const maxRow = 5;
  const maxIdxRow = maxRow - 1;

  if (this.currentType === type && this.currentDisplayRow! >= maxIdxRow) {
    this.currentDirection = RoadmapDirections.Down;

    this.currentDisplayCol!++;
  } else if (
    this.currentType !== type ||
    this.currentDisplayRow! >= maxIdxRow
  ) {
    this.currentDirection = RoadmapDirections.Down;

    this.currentDisplayRow = 0;
    this.lastDisplayCol! += 1;
    this.currentDisplayCol = this.lastDisplayCol;
  } else {
    if (displayAry[this.currentDisplayRow! + 1][this.currentDisplayCol!])
      this.currentDirection = RoadmapDirections.Right;

    if (this.currentDirection === RoadmapDirections.Right)
      this.currentDisplayCol!++;
    else this.currentDisplayRow!++;
  }

  displayAry[this.currentDisplayRow!][this.currentDisplayCol!] = tile;

  //nudge to the left on overflow
  if (this.currentDisplayCol! >= this.totalColumns!)
    this.firstDisplayedCol = this.currentDisplayCol! - this.totalColumns! + 1;

  this.currentType = type;
}

/**
 * @param tile new cell to add
 * @param type new tag to set
 */
export function addDisplayTile(
  this: BaseV2Roadmap,
  tile: OptionalJSXElement,
  type: string
) {
  // console.log("aDT", this.currentType, type);
  const maxRow = 5;
  const maxIdxRow = maxRow - 1;

  if (this.currentType === type && this.currentDisplayRow! >= maxIdxRow) {
    // at the bottom, change column
    this.currentDirection = RoadmapDirections.Down;
    this.currentDisplayCol!++;
  } else if (
    this.currentType !== type ||
    this.currentDisplayRow! >= maxIdxRow
  ) {
    // reset row & change column
    this.currentDirection = RoadmapDirections.Down;

    this.currentDisplayRow = 0;
    this.lastDisplayCol! += 1;
    this.currentDisplayCol = this.lastDisplayCol;
  } else {
    if (
      this.roadmapDisplay![this.currentDisplayRow! + 1][this.currentDisplayCol!]
    )
      this.currentDirection = RoadmapDirections.Right;

    if (this.currentDirection === RoadmapDirections.Right)
      this.currentDisplayCol!++;
    else this.currentDisplayRow!++;
  }

  this.roadmapDisplay![this.currentDisplayRow!][this.currentDisplayCol!] = tile;

  //nudge to the left on overflow
  if (this.currentDisplayCol! >= this.totalColumns!)
    this.firstDisplayedCol = this.currentDisplayCol! - this.totalColumns! + 1;

  this.currentType = type;
}

export function pushRoadmapType(
  this: BaseV2Roadmap,
  roadmapAry: Array<Array<string | null>>,
  type: string
) {
  if (this.currentType1 !== type) {
    this.currentCol!++;
    this.currentRow = 0;
  } else {
    this.currentRow!++;
  }

  if (roadmapAry.length <= this.currentRow!) {
    roadmapAry.push([]);
    for (let a = 0; a < roadmapAry[0].length; a++)
      roadmapAry[roadmapAry.length - 1][a] = null;
  }

  roadmapAry[this.currentRow!][this.currentCol!] = type;

  this.currentType1 = type;
}

export function pushTieDisplay(
  this: BaseV2Roadmap,
  tieDisplayAry: Array<Array<JSX.Element | null>>
) {
  this.tieCount!++;

  // const tieElement = (
  // 	<div key={`tE${self.currentDisplayRow}${self.currentDisplayCol}`}
  // 		className="sl-baccarat-diagonal-line sl-roadmap-green tie">
  // 			{ self.tieCount }
  // 	</div>
  // );

  const tieElement = {
    ele: bigRoadCircleSvg({
      baseClass: "",
      noOutline: true,
      tieLine: true,
      tieValue: this.tieCount,
      isLandscape: this.props.isLandscape,
    }),
    num: this.tieCount,
  };
  // @ts-ignore
  tieDisplayAry[this.currentDisplayRow!][this.currentDisplayCol!] = tieElement;
  this.bigRoadSequence!.push([
    this.currentDisplayRow!,
    this.currentDisplayCol!,
  ]);
}

function checkLastIdx(ary: Array<any>, idx: number) {
  return idx === ary.length - 1;
}

export function prepareV3Render(this: BaseV2Roadmap) {
  // console.log("prepareV3Render props", mainClass.props);

  this.firstDisplayedCol = 0;
  this.firstRoadmapDisplayedCol = 0;

  if (this.props.enlarged)
    //Desktop enlarged
    this.totalColumns = 16;
  else {
    switch (this.props.type) {
      case "big-eye-road":
        this.totalColumns = basePcode === "m32" ? 27 : 17;
        break;
      case "small-road":
      case "cockroach-road":
        this.totalColumns = basePcode === "m32" ? 12 : 12; //desktop single
        break;
      case "big-road":
        this.totalColumns = this.props.lobbyMobile
          ? this.props.showLobbyGameGroup && isPortrait()
            ? 29
            : isPortrait()
            ? 13
            : 17
          : //lobby mobile

          this.props.mobile
          ? isPortrait()
            ? 14 //mobile portrait
            : this.props.expanded
            ? 22 //mobile landscape V2 expanded
            : basePcode === "m32"
            ? 14
            : 4 //mobile landscape
          : //landscape open/close

          this.props.small
          ? 14 //lobby desktop
          : basePcode === "m32"
          ? 17
          : 22; //desktop in-game
        break;

      case "bead-road":
        this.totalColumns = this.props.lobbyMobile
          ? this.props.showLobbyGameGroup && isPortrait()
            ? 29
            : isPortrait()
            ? 13
            : 17
          : //lobby mobile

          this.props.mobile
          ? isPortrait()
            ? 14 //mobile portrait
            : this.props.expanded
            ? 18
            : 4
          : //mobile single game

          this.props.small
          ? basePcode === "m25"
            ? 12
            : 14 //lobby desktop
          : basePcode === "m32"
          ? 12
          : 26; //desktop in-game
        break;

      case "fan":
        this.totalColumns = this.props.lobbyMobile
          ? isPortrait()
            ? 7
            : 9
          : // lobby mobile

          this.props.mobile
          ? isPortrait()
            ? 14 //mobile portrait
            : this.props.expanded
            ? 18
            : 4
          : //mobile expanded

          this.props.small
          ? basePcode === "m25"
            ? 12
            : 14 //lobby desktop
          : 25; //desktop in-game
        break;

      case "shio":
        this.totalColumns = this.props.lobbyMobile
          ? this.props.showLobbyGameGroup && isPortrait()
            ? 9
            : isPortrait()
            ? 8
            : 10
          : //lobby mobile

          this.props.mobile //mobile portrait & landscape
          ? isPortrait()
            ? 14
            : 12
          : this.props.small
          ? 10 //desktop multi table
          : 16; //maximize Desktop
        break;

      default:
        break;
    }
  }

  this.bigRoadSequence = [];

  this.roadmapDisplay = [];
  this.roadmapTypes = [];
  this.roadmapTiesDisplay = [];

  // Todo: use clonePcode later
  if (basePcode === "m22" || basePcode === "m28" || basePcode === "m38")
    this.roadmapPairsDisplay = [];

  for (let a = 0; a < 9; a++) {
    this.roadmapDisplay[a] = [...Array(9).keys()].map(() => null);
    this.roadmapTypes[a] = [...Array(9).keys()].map(() => null);
    this.roadmapTiesDisplay[a] = [...Array(9).keys()].map(() => null);

    // Todo: use clonePcode later
    if (basePcode === "m22" || basePcode === "m28" || basePcode === "m38")
      this.roadmapPairsDisplay![a] = "1".split("").map(() => []);
  }

  // Todo: use clonePcode later
  switch (basePcode) {
    case "m22":
    case "m28":
    case "m38":
      this.simpleBigRoad = getSimpleBaccaratResultArray(this.props.history);
      this.simpleBigRoadPairs = getSimpleBaccaratResultPairArray(
        this.props.history
      );
      break;

    case "m23":
      this.simpleBigRoad = getSimpleDragonTigerResultArray(this.props.history);
      break;

    case "m25":
      this.simpleBigRoad = getSimpleFanTanResultArray(this.props.history);
      break;

    case "m27":
      this.simpleBigRoad = getSimpleShioFightResultArray(this.props.history);
      break;

    case "m32":
      this.simpleBigRoad = getSimpleSamGongResultArray(this.props.history);
      // mainClass.simpleBigRoadPairs = getSimpleSamGongResultPairArray(mainClass.props.history);
      break;
    case "m34":
      this.simpleBigRoad = getSimpleHiLoResultArray(this.props.history);
      break;
    case "m40":
      this.simpleBigRoad = getSimpleXocDiaResultArray(this.props.history);
      break;

    default:
      break;
  }

  this.alternatingStyle = this.props.historyBlink
    ? "sl-roadmap-alternating"
    : null;
}

function renderV3(this: BaseV2Roadmap) {
  // if (!mainClass.totalColumns)
  // console.warn("renderV3 totalColumns is empty");

  const roadmapColumns = nary(this.totalColumns! + 2);
  const {
    // pcode,
    baccaratDarkMode,
    small,
    full,
    type,
  } = this.props;

  const classList = joinClassList(
    "roadmap-table",
    "v3",
    full ? (full == type ? "full" : "invisible") : "",
    pcode,
    small ? "small" : "",
    baccaratDarkMode ? "dark" : "",
    type
  );

  return (
    <g onClick={this.props.onClick} className={classList}>
      {
        //big eye, small, cockroach roadmaps
        type === "big-eye-road" ||
        type === "small-road" ||
        type === "cockroach-road" ? (
          this.bigRoadDerivativesFragment()
        ) : //big & bead roads: 20
        type === "big-road" ? (
          this.bigRoadFragment()
        ) : type === "bead-road" ? (
          this.beadRoadFragment()
        ) : // FanTan
        type === "fan" ? (
          nary(4).map((row, rowIdx) => (
            <div className="row" key={"ft" + row}>
              {roadmapColumns.map((col, colIdx) => (
                <div key={"bt_" + row + col}>
                  {this.roadmapDisplay![rowIdx][
                    colIdx + this.firstDisplayedCol!
                  ] !== undefined
                    ? this.roadmapDisplay![rowIdx][
                        colIdx + this.firstDisplayedCol!
                      ]
                    : null}
                </div>
              ))}
            </div>
          ))
        ) : // Shio Fights
        type === "shio" ? (
          nary(4).map((row, rowIdx) => (
            <div className="row" key={"cBR_" + this.props.pcode + "_" + row}>
              {roadmapColumns.map((col, colIdx) => (
                <div key={"cBR_" + this.props.pcode + "_" + row + "_" + col}>
                  {this.roadmapDisplay![rowIdx][
                    colIdx + this.firstDisplayedCol!
                  ] !== undefined
                    ? this.roadmapDisplay![rowIdx][
                        colIdx + this.firstDisplayedCol!
                      ]
                    : null}

                  {
                    this.props.expanded || this.props.small ? null : null
                    // <CardTooltip
                    //     cardset={this.props.history[colIdx * 4 + rowIdx]}
                    //     pcode={this.props.pcode}
                    //     langdata={this.props.langdata}
                    // />
                  }
                </div>
              ))}
            </div>
          ))
        ) : //Predictions
        type === "predictions" ? // this.renderPredictions()
        null : (
          <div>Unknown type: {type}</div>
        )
      }
    </g>
  );
  // return (
  //     <div className={classList} onClick={()=>this.props.onClick()}>

  //         {this.backTextFragment()}

  //         <div className="roadmap">

  //         </div>
  //     </div>
  // );
}

// export function renderPredictions(this: BaseV2Roadmap) {
//     const { pcode } = this.props;

//     const blueLetter = clonePcode === "m22" || clonePcode === "m32" || basePcode === "m38" ? "P" :
//         clonePcode === "m23" ? "D" :
//             clonePcode === "m27" ? "T" :
//                 clonePcode === "m34" ? "Hi" : "E";

//     const redLetter = clonePcode === "m22" || clonePcode === "m32" || basePcode === "m38" ? "B" :
//         clonePcode === "m23" ? "T" :
//             clonePcode === "m27" ? "D" :
//                 clonePcode === "m34" ? "Lo" : "O";

//     const bluePredictionArray = clonePcode === "m22" || clonePcode === "m32" || clonePcode === "m38"
//         ? this.playerPrediction
//         : clonePcode === "m23" ? this.dragonPrediction
//             : clonePcode === "m27" ? this.tianPrediction
//                 : clonePcode === "m34" ? this.hiPrediction : this.evenPrediction; //FanTan

//     const redPredictionArray = clonePcode === "m22" || clonePcode === "m32" || basePcode === "m38"
//         ? this.bankerPrediction
//         : clonePcode === "m23" ? this.tigerPrediction
//             : clonePcode === "m27" ? this.diPrediction
//                 : clonePcode === "m34" ? this.loPrediction : this.oddPrediction; //FanTan

//     //Template return, no need to change
//     return this.props.mobile ? (
//         <div>
//             <div className="baccarat-prediction-container">
//                 <div className={
//                     "baccarat-prediction-letter sl-roadmap-" +
//                     (clonePcode === "m23" ? "red" : "blue")
//                 }>
//                     {blueLetter}
//                 </div>

//                 <div className="player-container">
//                     <div className="circle-hollow">
//                         {bluePredictionArray[0]}
//                     </div>

//                     {bluePredictionArray[1]}
//                     {bluePredictionArray[2]}
//                 </div>

//                 <br />

//                 <div className={
//                     "baccarat-prediction-letter sl-roadmap-" +
//                     (clonePcode === "m23" ? "blue" : "red")
//                 }>
//                     {redLetter}
//                 </div>

//                 <div className="banker-container">
//                     <div className="circle-hollow">
//                         {redPredictionArray[0]}
//                     </div>

//                     {redPredictionArray[1]}
//                     {redPredictionArray[2]}
//                 </div>
//             </div>
//         </div>
//     ) : (
//         <div>
//             <div className="baccarat-prediction-container smaller">
//                 <div key="bpl0"
//                     className={"baccarat-prediction-letter sl-roadmap-" + (clonePcode === "m23" ? "red" : "blue")}>
//                     {blueLetter}
//                 </div>
//                 <div key="bpl1"
//                     className={"baccarat-prediction-letter sl-roadmap-" + (clonePcode === "m23" ? "blue" : "red")}>
//                     {redLetter}
//                 </div>

//                 <br />

//                 <div className={(clonePcode === "m23" ? "banker" : "player") + "-container"}>
//                     <div className="circle-hollow">
//                         {bluePredictionArray[0]}
//                     </div>

//                     {bluePredictionArray[1]}
//                     {bluePredictionArray[2]}
//                 </div>

//                 <div className={(clonePcode === "m23" ? "player" : "banker") + "-container"}>
//                     <div className="circle-hollow">
//                         {redPredictionArray[0]}
//                     </div>

//                     {redPredictionArray[1]}
//                     {redPredictionArray[2]}
//                 </div>
//             </div>
//         </div>
//     );
// }

function resetAnalysisPointer(this: BaseV2Roadmap) {
  this.currentCol = -1;
  this.currentRow = 0;
}

function resetDisplayPointer(this: BaseV2Roadmap) {
  this.currentDisplayRow = 0;
  this.currentDisplayCol = -1;
  this.currentType = "";
  this.currentType1 = "";
  this.lastDisplayCol = -1;
}

function resetTieCount(this: BaseV2Roadmap) {
  this.tieCount = 0;
}

//Baccarat
/** @param bigRoad props.history */
function getSimpleBaccaratResultArray(bigRoad: Array<any>) {
  if (!bigRoad) return [];

  return bigRoad.map((item) =>
    item.win === "banker" ? "B" : item.win === "player" ? "P" : "T"
  );
}

//Baccarat Pair
/** @param bigRoad props.history */
function getSimpleBaccaratResultPairArray(bigRoad: Array<any>) {
  if (!bigRoad) return [];

  return bigRoad.map((item) =>
    item.bankerPair && item.playerPair
      ? "D"
      : item.bankerPair
      ? "B"
      : item.playerPair
      ? "P"
      : " "
  );
}

//Dragon & Tiger
/** @param bigRoad props.history */
function getSimpleDragonTigerResultArray(bigRoad: Array<any>) {
  //big_road data:
  // { "dragon": "Js", "tiger": "Kd", "value": "tiger", "periode": 42, "gamekey": "2803" }

  //scanDragonTiger data:
  //{ "pcode":"m23","dragon":"4h","tiger":"9c","value":"9","win":"tiger","submit":true,"periode":54,"gameSet":2803 }

  if (!bigRoad) return [];

  return bigRoad.map((item) =>
    item.win === "dragon" ? "D" : item.win === "tiger" ? "T" : "t"
  );
}
//ShioFight
/** @param bigRoad props.history */
function getSimpleShioFightResultArray(history: Array<any>) {
  if (!history) return [];

  return history.map((item) =>
    item.win === "di" ? "D" : item.win === "tian" ? "T" : "t"
  );
}

//FanTan
function getSimpleFanTanResultArray(history: Array<any>) {
  if (!history) return [];

  return history.map((item) => (item.angka % 2 ? "O" : "E"));
}

//SamGong
function getSimpleSamGongResultArray(history: Array<any>) {
  if (!history) return [];

  return history.map((item) =>
    item.result === "player" ? "P" : item.result === "banker" ? "B" : "T"
  );
}

//Hilo
function getSimpleHiLoResultArray(history: Array<any>) {
  if (!history) return [];

  return history.map((item) =>
    +item.angka > 7 ? "H" : +item.angka < 7 ? "L" : "7"
  );
}

export interface IXocDiaHistoryItem {
  angka: string; // "White,Red,Red,Red",
  tanggal: string; // "2021-06-15 11:01:17",
  periode: number; // 7089,
  hitung: string; // "1",
  gamekey: number; // 7089,
  idnomor: number; // 7089
}

function getSimpleXocDiaResultArray(history: IXocDiaHistoryItem[]) {
  if (!history) return [];

  return history.map((item) => {
    const redCount = (item.angka.match(/Red/g) || []).length;
    return redCount % 2 > 0 ? "O" : "E";
  });
}

export {
  addBigRoadDisplay,
  checkLastIdx,
  getSimpleBaccaratResultArray,
  getSimpleBaccaratResultPairArray,
  getSimpleDragonTigerResultArray,
  getSimpleShioFightResultArray,
  getSimpleFanTanResultArray,
  getSimpleSamGongResultArray,
  getSimpleXocDiaResultArray,
  renderV3,
  resetAnalysisPointer,
  resetDisplayPointer,
  resetTieCount,
};

export function beadRoadSvg({
  baseClassList,
  bankerPair,
  playerPair,
  value,
}: {
  baseClassList: string;
  bankerPair?: boolean;
  playerPair?: boolean;
  value: number | string;
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10%" viewBox="0 0 50 50">
      <title>Artboard 2</title>

      <circle
        id="Base"
        className={"bead-road-cls-1 " + baseClassList}
        cx="25"
        cy="25"
        r="24"
      />

      <text
        id="Number"
        className="bead-road-cls-2"
        transform="translate(13.1 37)"
      >
        {value}
      </text>

      {bankerPair ? (
        <circle
          id="BankerPair"
          className={"bead-road-cls-3 sl-roadmap-red"}
          cx="10"
          cy="10"
          r="6"
        />
      ) : null}

      {playerPair ? (
        <circle
          id="PlayerPair"
          className={"bead-road-cls-4 sl-roadmap-blue"}
          cx="41"
          cy="40"
          r="6"
        />
      ) : null}
    </svg>
  );
}

export function tieLineSvg({ tieValue }: { tieValue?: number }) {
  if (!tieValue) return null;

  return (
    <>
      <line
        id="TieLine"
        className="sl-roadmap-green"
        x1="46"
        y1="4"
        x2="4"
        y2="46"
      />
      <text id="Number" transform="translate(18.55 26.34) rotate(-45)">
        9
      </text>
    </>
  );
}

export function bigRoadCircleSvg({
  baseClass,
  bankerPair,
  playerPair,
  tieLine,
  tieValue,
  isLandscape = false,
  blinking,
  filled,
  noOutline,
  tieLineFilled,
}: {
  baseClass: string;

  bankerPair?: boolean;
  playerPair?: boolean;
  tieLine?: boolean;
  tieValue?: number;

  blinking?: boolean;
  filled?: boolean;
  isLandscape?: boolean;
  /** adds "hidden-outline" class */
  noOutline?: boolean;
  tieLineFilled?: boolean;
}) {
  return (
    <svg
      data-name="Layer 1"
      className={joinClassList(
        baseClass,
        blinking ? "sl-roadmap-alternating" : "",
        tieLineFilled ? "tie-line-filled" : ""
      )}
      xmlns="http://www.w3.org/2000/svg"
      width="20%"
      viewBox="0 0 50 50"
    >
      <title>Big Road</title>

      {!noOutline ? (
        <circle
          id="Circle"
          className={joinClassList("big-road-cls-1", filled ? "filled" : "")}
          cx="25"
          cy="25"
          r="15"
        />
      ) : null}

      {bankerPair ? (
        <circle
          id="BankerPair"
          className="big-road-cls-2"
          cx="10"
          cy="10"
          r="6"
        />
      ) : null}

      {playerPair ? (
        <circle
          id="PlayerPair"
          className="big-road-cls-3"
          cx="40"
          cy="40"
          r="6"
        />
      ) : null}

      {tieLine ? (
        isLandscape ? (
          <line
            id="TieLine"
            className="big-road-cls-4"
            x1="46"
            y2="46"
            y1="4"
            x2="4"
          />
        ) : (
          <line
            id="TieLine"
            className="big-road-cls-4"
            x1="46"
            y2="46"
            y1="4"
            x2="4"
          />
        )
      ) : null}

      {tieValue ? (
        <text
          className="big-road-cls-5"
          transform="translate(18.6 26.34) rotate(-45)"
        >
          {tieValue}
        </text>
      ) : null}
    </svg>
  );
}
