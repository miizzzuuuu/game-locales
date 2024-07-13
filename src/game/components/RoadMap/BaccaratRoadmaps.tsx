import { BaseV2Roadmap, IKeyNumberDict } from "./M23";
export const pcode = "m23";

const basePcode: string = pcode;

const isPortrait =
    () => true;


function nary(N: number) {

    return (!isNaN(N)) ?
        [...new Array(N + 1).keys()].slice(1) :
        [];
}

export type OptionalJSXElement = JSX.Element | null;

export enum RoadmapDirections {
    Down,
    Right
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
    return classListAry.filter(x => x).join(" ");
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
    uniq
};

// import CardTooltip from "src/components/RoadmapCardTooltip";


export interface NewSimpleBigRoadTileData {
    ele: Element | null
    color: string | null
    blink: string
}

function addBigRoadDisplay(this: BaseV2Roadmap, displayAry: Array<Array<OptionalJSXElement>> | NewSimpleBigRoadTileData, tile: OptionalJSXElement, type: string) {
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
    } else if (this.currentType !== type || this.currentDisplayRow! >= maxIdxRow) {
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
        else
            this.currentDisplayRow!++;
    }

    //nudge columns to the left on every overflow
    if (this.currentDisplayCol! >= this.totalColumns!)
        // console.log("aBRD cDC", self.currentDisplayCol);
        this.firstRoadmapDisplayedCol = this.currentDisplayCol! - this.totalColumns! + 1;

    // @ts-ignore
    displayAry[this.currentDisplayRow!][this.currentDisplayCol!] = tile;
    this.bigRoadSequence!.push([this.currentDisplayRow!, this.currentDisplayCol!]);

    this.currentType = type;
}

/** @deprecated */
export function addDisplayTileLegacy(this: BaseV2Roadmap, displayAry: any, tile: OptionalJSXElement, type: string) {
    // console.log("aDT", this.currentType, type);
    const maxRow = 5;
    const maxIdxRow = maxRow - 1;

    if (this.currentType === type && this.currentDisplayRow! >= maxIdxRow) {
        this.currentDirection = RoadmapDirections.Down;

        this.currentDisplayCol!++;
    } else if (this.currentType !== type || this.currentDisplayRow! >= maxIdxRow) {
        this.currentDirection = RoadmapDirections.Down;

        this.currentDisplayRow = 0;
        this.lastDisplayCol! += 1;
        this.currentDisplayCol = this.lastDisplayCol;
    } else {
        if (displayAry[this.currentDisplayRow! + 1][this.currentDisplayCol!])
            this.currentDirection = RoadmapDirections.Right;

        if (this.currentDirection === RoadmapDirections.Right)
            this.currentDisplayCol!++;
        else
            this.currentDisplayRow!++;
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
export function addDisplayTile(this: BaseV2Roadmap, tile: OptionalJSXElement, type: string) {
    // console.log("aDT", this.currentType, type);
    const maxRow = 5;
    const maxIdxRow = maxRow - 1;

    if (this.currentType === type && this.currentDisplayRow! >= maxIdxRow) {
        // at the bottom, change column
        this.currentDirection = RoadmapDirections.Down;
        this.currentDisplayCol!++;

    } else if (this.currentType !== type || this.currentDisplayRow! >= maxIdxRow) {
        // reset row & change column
        this.currentDirection = RoadmapDirections.Down;

        this.currentDisplayRow = 0;
        this.lastDisplayCol! += 1;
        this.currentDisplayCol = this.lastDisplayCol;

    } else {
        if (this.roadmapDisplay![this.currentDisplayRow! + 1][this.currentDisplayCol!])
            this.currentDirection = RoadmapDirections.Right;

        if (this.currentDirection === RoadmapDirections.Right)
            this.currentDisplayCol!++;
        else
            this.currentDisplayRow!++;
    }

    this.roadmapDisplay![this.currentDisplayRow!][this.currentDisplayCol!] = tile;

    //nudge to the left on overflow
    if (this.currentDisplayCol! >= this.totalColumns!)
        this.firstDisplayedCol = this.currentDisplayCol! - this.totalColumns! + 1;

    this.currentType = type;
}

export function pushRoadmapType(this: BaseV2Roadmap, roadmapAry: Array<Array<string | null>>, type: string) {
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

export function pushTieDisplay(this: BaseV2Roadmap, tieDisplayAry: Array<Array<JSX.Element | null>>) {
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
            isLandscape: this.props.isLandscape
        }), num: this.tieCount
    };
    // @ts-ignore
    tieDisplayAry[this.currentDisplayRow!][this.currentDisplayCol!] = tieElement;
    this.bigRoadSequence!.push([this.currentDisplayRow!, this.currentDisplayCol!]);
}

function checkLastIdx(ary: Array<any>, idx: number) {
    return idx === ary.length - 1;
}

export function prepareV3Render(this: BaseV2Roadmap) {
    // console.log("prepareV3Render props", mainClass.props);


    this.firstDisplayedCol = 0;
    this.firstRoadmapDisplayedCol = 0;


    if (this.props.enlarged) //Desktop enlarged
        this.totalColumns = 16;
    else {
        switch (this.props.type) {
            case "big-eye-road":
                this.totalColumns =

                    basePcode === "m32" ? 27 :
                        14;
                break;
            case "small-road":
            case "cockroach-road":
                this.totalColumns =

                    basePcode === "m32" ? 12 : 14; //desktop single
                break;
            case "big-road":
                this.totalColumns =
                    this.props.lobbyMobile ? (
                        this.props.showLobbyGameGroup && isPortrait() ? 29 :
                            isPortrait() ? 13 : 17
                    ) : //lobby mobile

                        this.props.mobile ? (
                            isPortrait() ? 14 : //mobile portrait
                                (this.props.expanded ? 22 : //mobile landscape V2 expanded
                                    basePcode === "m32" ? 14 : 4) //mobile landscape
                        ) : //landscape open/close

                            this.props.small ? 14 : //lobby desktop
                                basePcode === "m32" ? 17 : 22; //desktop in-game
                break;

            case "bead-road":
                this.totalColumns =
                    this.props.lobbyMobile ? (
                        this.props.showLobbyGameGroup && isPortrait() ? 29 :
                            isPortrait() ? 13 : 17
                    ) : //lobby mobile

                        this.props.mobile ? (
                            isPortrait() ? 14 : //mobile portrait
                                (this.props.expanded ? 18 : 4)
                        ) : //mobile single game

                            this.props.small ? (basePcode === "m25" ? 12 : 14) : //lobby desktop
                                (basePcode === "m32" ? 12 : 26); //desktop in-game
                break;

            case "fan":
                this.totalColumns =
                    this.props.lobbyMobile ? (
                        isPortrait() ? 7 : 9
                    ) : // lobby mobile

                        this.props.mobile ? (
                            isPortrait() ? 14 : //mobile portrait
                                (this.props.expanded ? 18 : 4)
                        ) : //mobile expanded

                            this.props.small ? (basePcode === "m25" ? 12 : 14) : //lobby desktop

                                25; //desktop in-game
                break;

            case "shio":
                this.totalColumns =
                    this.props.lobbyMobile ? (
                        this.props.showLobbyGameGroup && isPortrait() ? 9 :
                            isPortrait() ? 8 : 10
                    ) : //lobby mobile

                        this.props.mobile ? ( //mobile portrait & landscape
                            isPortrait() ? 14 : 12
                        ) :

                            this.props.small ? 10 : //desktop multi table

                                16; //maximize Desktop
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
            this.simpleBigRoadPairs = getSimpleBaccaratResultPairArray(this.props.history);
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

        default: break;
    }

    this.alternatingStyle = (this.props.historyBlink ? "sl-roadmap-alternating" : null);
}

function renderV3(this: BaseV2Roadmap) {
    // if (!mainClass.totalColumns)
    // console.warn("renderV3 totalColumns is empty");

    const roadmapColumns = nary(this.totalColumns! + 2);
    const {
        // pcode,
        darkMode, small, full, type } = this.props;

    const classList = joinClassList(
        "roadmap-table",
        "v3",
        full ? full == type ? "full" : "invisible" : "",
        pcode,
        (small ? "small" : ""),
        (darkMode ? "dark" : ""),
        type
    );


    return (

        <g onClick={this.props.onClick} className={classList} pointerEvents={"bounding-box"}>
            {
                //big eye, small, cockroach roadmaps
                type === "big-eye-road" ||
                    type === "small-road" ||
                    type === "cockroach-road"
                    ? this.bigRoadDerivativesFragment()


                    //big & bead roads: 20
                    : type === "big-road"
                        ? this.bigRoadFragment()
                        :

                        type === "bead-road"
                            ? this.beadRoadFragment()

                            // FanTan
                            : type === "fan" ? (
                                nary(4).map((row, rowIdx) =>
                                    <div className="row" key={"ft" + row}>
                                        {
                                            roadmapColumns.map((col, colIdx) =>
                                            (
                                                <div key={"bt_" + row + col}>
                                                    {
                                                        this.roadmapDisplay![rowIdx][colIdx + this.firstDisplayedCol!] !== undefined ?
                                                            this.roadmapDisplay![rowIdx][colIdx + this.firstDisplayedCol!] : null
                                                    }
                                                </div>
                                            )
                                            )
                                        }
                                    </div>
                                )
                            ) :

                                // Shio Fights
                                type === "shio" ? (
                                    nary(4).map((row, rowIdx) =>
                                        <div className="row" key={"cBR_" + this.props.pcode + "_" + row}>
                                            {
                                                roadmapColumns.map((col, colIdx) =>
                                                (
                                                    <div key={"cBR_" + this.props.pcode + "_" + row + "_" + col}>
                                                        {
                                                            this.roadmapDisplay![rowIdx][colIdx + this.firstDisplayedCol!] !== undefined ?
                                                                this.roadmapDisplay![rowIdx][colIdx + this.firstDisplayedCol!] : null
                                                        }

                                                        {
                                                            this.props.expanded || this.props.small
                                                                ? null
                                                                : null
                                                            // <CardTooltip
                                                            //     cardset={this.props.history[colIdx * 4 + rowIdx]}
                                                            //     pcode={this.props.pcode}
                                                            //     langdata={this.props.langdata}
                                                            // />
                                                        }
                                                    </div>
                                                )
                                                )
                                            }
                                        </div>
                                    )
                                ) :

                                    //Predictions
                                    type === "predictions"
                                        ?
                                        this.renderPredictions()
                                        // null
                                        : <div>Unknown type: {type}</div>


            }
        </g>
    )
    // return (
    //     <div className={classList} onClick={()=>this.props.onClick()}>

    //         {this.backTextFragment()}

    //         <div className="roadmap">

    //         </div>
    //     </div>
    // );
}
export function renderPredictions(this: BaseV2Roadmap) {
    const { pcode } = this.props;
    const clonePcode = pcode;

    const blueLetter =
        clonePcode === 'm22' || clonePcode === 'm32' || basePcode === 'm38'
            ? 'P'
            : clonePcode === 'm23'
                ? <path
                    fill="#fff"
                    d="M4.592 10.5V3.522h2.224l.344.005c.175.003.343.015.504.034.553.071 1.02.268 1.4.591.385.32.676.729.873 1.226.197.498.295 1.042.295 1.633s-.098 1.136-.295 1.633a3.036 3.036 0 01-.872 1.23c-.382.32-.848.516-1.4.587-.16.02-.326.03-.5.034l-.349.005H4.592zm1.187-1.1h1.037c.097 0 .22-.003.368-.01.152-.006.286-.02.403-.043a1.38 1.38 0 00.804-.441c.207-.233.359-.515.455-.848.1-.333.15-.682.15-1.047 0-.378-.05-.733-.15-1.066a2.1 2.1 0 00-.465-.838 1.398 1.398 0 00-.794-.431 2.07 2.07 0 00-.403-.044 8.761 8.761 0 00-.368-.01H5.78V9.4zm5.599 1.1V3.522h2.883c.068 0 .155.003.262.01.106.003.205.013.295.029.404.061.737.195.998.402.265.207.46.469.587.785.129.314.194.662.194 1.047 0 .568-.144 1.058-.432 1.468-.287.407-.728.66-1.323.756l-.499.044h-1.797V10.5h-1.168zm4.007 0L14.01 7.66l1.187-.261 1.512 3.101h-1.323zm-2.84-3.528h1.668c.064 0 .137-.003.218-.01.08-.006.155-.019.223-.038a.878.878 0 00.455-.257c.113-.123.192-.262.237-.417.049-.155.073-.307.073-.455 0-.149-.024-.3-.073-.456a1.034 1.034 0 00-.237-.421.878.878 0 00-.456-.257.95.95 0 00-.222-.034 2.763 2.763 0 00-.218-.01h-1.667v2.355zm4.746 3.528l2.2-6.978h1.71l2.2 6.978H22.2l-1.997-6.26h.262l-1.972 6.26H17.29zm1.226-1.512v-1.09h3.663v1.09h-3.663zm8.45 1.657c-.453 0-.878-.079-1.275-.237A3.043 3.043 0 0124.65 9.7c-.297-.31-.53-.69-.697-1.138-.168-.453-.252-.97-.252-1.55 0-.763.142-1.414.426-1.954a3.024 3.024 0 011.168-1.245 3.235 3.235 0 011.671-.436c.86 0 1.54.2 2.04.6.505.398.845.957 1.023 1.677l-1.192.19a2.045 2.045 0 00-.65-.99c-.3-.248-.683-.372-1.148-.372-.468-.007-.858.095-1.168.305-.31.21-.544.506-.702.887-.155.38-.233.827-.233 1.337s.078.955.233 1.333c.155.374.387.667.697.877.314.21.705.318 1.173.324.352.004.66-.06.926-.189.265-.132.481-.33.649-.596.168-.268.281-.602.34-1.003h-1.232v-.915h2.472c.006.051.011.127.014.227.004.1.005.16.005.18 0 .659-.13 1.245-.392 1.759a2.9 2.9 0 01-1.115 1.201c-.485.291-1.064.436-1.74.436zm7.17 0c-.697 0-1.295-.152-1.793-.455a3.044 3.044 0 01-1.148-1.28c-.265-.545-.397-1.178-.397-1.899 0-.72.132-1.353.397-1.9.268-.545.651-.97 1.148-1.274.498-.307 1.096-.46 1.793-.46.698 0 1.296.153 1.793.46.5.304.884.729 1.149 1.275.268.546.402 1.179.402 1.9 0 .72-.134 1.353-.402 1.899a3.001 3.001 0 01-1.149 1.279c-.497.303-1.095.455-1.793.455zm0-1.1c.469.004.858-.1 1.168-.31.313-.21.548-.505.703-.886.158-.382.237-.827.237-1.338 0-.51-.079-.953-.237-1.328a1.897 1.897 0 00-.703-.881c-.31-.21-.7-.319-1.168-.325-.468-.003-.857.1-1.168.31-.31.21-.544.506-.702.887-.155.38-.233.827-.233 1.337s.078.955.233 1.333c.155.374.388.667.698.877.313.21.704.318 1.172.324zm4.308.955V3.522h1.183l3.237 4.919V3.522h1.182V10.5h-1.182l-3.237-4.918V10.5h-1.183z"
                ></path>
                : clonePcode === 'm27'
                    ? 'T'
                    : clonePcode === 'm34'
                        ? 'Hi'
                        : 'E';

    const redLetter =
        clonePcode === 'm22' || clonePcode === 'm32' || basePcode === 'm38'
            ? 'B'
            : clonePcode === 'm23'
                ? <path
                    fill="#fff"
                    d="M86.385 10.5V4.617h-2.258V3.522h5.684v1.095h-2.258V10.5h-1.168zm4.297 0V3.522h1.168V10.5h-1.167zm5.498.145c-.452 0-.877-.079-1.274-.237a3.044 3.044 0 01-1.042-.708c-.297-.31-.53-.69-.698-1.138-.168-.453-.252-.97-.252-1.55 0-.763.142-1.414.427-1.954a3.025 3.025 0 011.167-1.245 3.235 3.235 0 011.672-.436c.86 0 1.54.2 2.04.6.504.398.845.957 1.023 1.677l-1.192.19a2.047 2.047 0 00-.65-.99c-.3-.248-.683-.372-1.148-.372-.469-.007-.858.095-1.168.305-.31.21-.544.506-.703.887-.155.38-.232.827-.232 1.337s.077.955.232 1.333c.155.374.388.667.698.877.314.21.704.318 1.173.324.352.004.66-.06.925-.189.265-.132.482-.33.65-.596.168-.268.28-.602.339-1.003h-1.23v-.915h2.47a2.7 2.7 0 01.015.227l.005.18c0 .659-.131 1.245-.393 1.759a2.9 2.9 0 01-1.114 1.201c-.485.291-1.065.436-1.74.436zm4.22-.145V3.522h4.506v1.095h-3.338v1.72h2.757v1.096h-2.757v1.972h3.338V10.5H100.4zm5.669 0V3.522h2.883c.068 0 .155.003.262.01.106.003.205.013.295.029.404.061.737.195.999.402.265.207.46.469.586.785.129.314.194.662.194 1.047 0 .568-.144 1.058-.431 1.468-.288.407-.729.66-1.323.756l-.499.044h-1.798V10.5h-1.168zm4.007 0L108.7 7.66l1.187-.261 1.512 3.101h-1.323zm-2.839-3.528h1.667c.064 0 .137-.003.218-.01.081-.006.155-.019.223-.038a.88.88 0 00.455-.257c.113-.123.192-.262.238-.417.048-.155.072-.307.072-.455 0-.149-.024-.3-.072-.456a1.045 1.045 0 00-.238-.421.88.88 0 00-.455-.257.949.949 0 00-.223-.034 2.777 2.777 0 00-.218-.01h-1.667v2.355z"
                ></path>
                : clonePcode === 'm27'
                    ? 'D'
                    : clonePcode === 'm34'
                        ? 'Lo'
                        : 'O';

    const bluePredictionArray =
        clonePcode === 'm22' || clonePcode === 'm32' || clonePcode === 'm38'
            // @ts-ignore   
            ? this.playerPrediction
            : clonePcode === 'm23'
                // @ts-ignore   
                ? this.dragonPrediction
                : clonePcode === 'm27'
                    // @ts-ignore   

                    ? this.tianPrediction
                    : clonePcode === 'm34'
                        // @ts-ignore   

                        ? this.hiPrediction
                        // @ts-ignore   

                        : this.evenPrediction; //FanTan

    const redPredictionArray =
        clonePcode === 'm22' || clonePcode === 'm32' || basePcode === 'm38'
            // @ts-ignore   

            ? this.bankerPrediction
            : clonePcode === 'm23'
                // @ts-ignore   
                ? this.tigerPrediction
                : clonePcode === 'm27'
                    // @ts-ignore   
                    ? this.diPrediction
                    : clonePcode === 'm34'
                        // @ts-ignore   
                        ? this.loPrediction
                        // @ts-ignore   
                        : this.oddPrediction; //FanTan

    //Template return, no need to change
    return (<>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="133"
            fill="none"
            viewBox="0 0 143 14"
        >

            <g clipPath="url(#clip0_246_543)">
                <rect width="75.091" height="14" x="0.818" fill="#F10149" rx="4"></rect>
                <rect
                    width="26.091"
                    height="10.364"
                    x="47.818"
                    y="1.818"
                    fill="url(#paint0_linear_246_543)"
                    rx="3"
                    shapeRendering="crispEdges"
                ></rect>
                {blueLetter}

                <g filter="url(#filter0_d_246_543)">
                
                    {bluePredictionArray[0]({
                        cx:"53.0002",cy:"7.00018"
                    })}
                    {bluePredictionArray[1]({
                         cx:"60.8635",cy:"7.00018"
                    })}
                    {bluePredictionArray[2]({
                        d:"M71.2735 4.45508L66.1826 9.54599" 
                    })}
                </g>
            </g>
            <g clipPath="url(#clip1_246_543)">
                <rect
                    width="62.091"
                    height="14"
                    x="80.909"
                    fill="#D3942A"
                    rx="4"
                ></rect>
                <rect
                    width="26.091"
                    height="10.364"
                    x="114.909"
                    y="1.818"
                    fill="url(#paint1_linear_246_543)"
                    rx="3"
                    shapeRendering="crispEdges"
                ></rect>
                {redLetter}
                <g filter="url(#filter1_d_246_543)">


                    {redPredictionArray[0]({
                        cx:"120.091",cy:"7"
                    })}

                    {redPredictionArray[1](
                         {cx:"127.954",cy:"7" }
                    )}
                    {redPredictionArray[2]({
                         d:"M138.364 4.455l-5.091 5.091"
                    })}
                </g>

            </g>

            <defs>
                <filter
                    id="filter0_d_246_543"
                    width="29.091"
                    height="13.363"
                    x="46.318"
                    y="1.318"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.75"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_246_543"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_246_543"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter1_d_246_543"
                    width="29.091"
                    height="13.363"
                    x="113.409"
                    y="1.318"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.75"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_246_543"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_246_543"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint0_linear_246_543"
                    x1="47.909"
                    x2="73.909"
                    y1="2"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0.85"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_246_543"
                    x1="115"
                    x2="141"
                    y1="2"
                    y2="12"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0.85"></stop>
                </linearGradient>
                <clipPath id="clip0_246_543">
                    <rect width="75.091" height="14" x="0.818" fill="#fff" rx="4"></rect>
                </clipPath>
                <clipPath id="clip1_246_543">
                    <rect width="62.091" height="14" x="80.909" fill="#fff" rx="4"></rect>
                </clipPath>
            </defs>
        </svg>
    </>

    );
}

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
    if (!bigRoad)
        return [];

    return bigRoad.map(item =>
        item.win === "banker" ? "B" :
            item.win === "player" ? "P" :
                "T"
    );
}

//Baccarat Pair
/** @param bigRoad props.history */
function getSimpleBaccaratResultPairArray(bigRoad: Array<any>) {
    if (!bigRoad)
        return [];

    return bigRoad.map(item =>
        item.bankerPair && item.playerPair ? "D" :
            item.bankerPair ? "B" :
                item.playerPair ? "P" : " ");
}

//Dragon & Tiger
/** @param bigRoad props.history */
function getSimpleDragonTigerResultArray(bigRoad: Array<any>) {
    //big_road data:
    // { "dragon": "Js", "tiger": "Kd", "value": "tiger", "periode": 42, "gamekey": "2803" }

    //scanDragonTiger data:
    //{ "pcode":"m23","dragon":"4h","tiger":"9c","value":"9","win":"tiger","submit":true,"periode":54,"gameSet":2803 }

    if (!bigRoad)
        return [];

    return bigRoad.map(item =>
        item.win === "dragon" ? "D" :
            item.win === "tiger" ? "T" : "t"
    );
}
//ShioFight
/** @param bigRoad props.history */
function getSimpleShioFightResultArray(history: Array<any>) {
    if (!history)
        return [];

    return history.map(item =>
        item.win === "di" ? "D" :
            item.win === "tian" ? "T" : "t"
    );
}



//FanTan
function getSimpleFanTanResultArray(history: Array<any>) {
    if (!history)
        return [];

    return history.map(item => item.angka % 2 ? "O" : "E");
}

//SamGong
function getSimpleSamGongResultArray(history: Array<any>) {
    if (!history)
        return [];

    return history.map(item =>
        item.result === "player" ? "P" :
            item.result === "banker" ? "B" : "T"
    );
}

//Hilo
function getSimpleHiLoResultArray(history: Array<any>) {
    if (!history)
        return [];

    return history.map(item =>
        +item.angka > 7 ? "H" :
            +item.angka < 7 ? "L" : "7"
    );
}


export interface IXocDiaHistoryItem {
    "angka": string; // "White,Red,Red,Red",
    "tanggal": string; // "2021-06-15 11:01:17",
    "periode": number; // 7089,
    "hitung": string; // "1",
    "gamekey": number; // 7089,
    "idnomor": number; // 7089
}

function getSimpleXocDiaResultArray(history: IXocDiaHistoryItem[]) {
    if (!history)
        return [];

    return history.map(item => {
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
    resetTieCount
};



export function beadRoadSvg({ baseClassList, bankerPair, playerPair, value }: {
    baseClassList: string,
    bankerPair?: boolean,
    playerPair?: boolean,
    value: number | string
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10%" viewBox="0 0 50 50">
            <title>Artboard 2</title>

            <circle id="Base" className={"bead-road-cls-1 " + baseClassList} cx="25" cy="25" r="24" />

            <text id="Number" className="bead-road-cls-2" transform="translate(13.1 37)">
                {value}
            </text>

            {
                bankerPair
                    ? <circle id="BankerPair" className={"bead-road-cls-3 sl-roadmap-red"} cx="10" cy="10" r="6" />
                    : null
            }

            {
                playerPair
                    ? <circle id="PlayerPair" className={"bead-road-cls-4 sl-roadmap-blue"} cx="41" cy="40" r="6" />
                    : null
            }
        </svg>
    );
}

export function tieLineSvg({ tieValue }: { tieValue?: number }) {
    if (!tieValue) return null;

    return <>
        <line id="TieLine" className="sl-roadmap-green" x1="46" y1="4" x2="4" y2="46" />
        <text id="Number" transform="translate(18.55 26.34) rotate(-45)">9</text>
    </>;
}

export function bigRoadCircleSvg({
    baseClass, bankerPair, playerPair, tieLine, tieValue,
    isLandscape = false,
    blinking, filled, noOutline, tieLineFilled
}: {
    baseClass: string,

    bankerPair?: boolean,
    playerPair?: boolean,
    tieLine?: boolean,
    tieValue?: number,

    blinking?: boolean,
    filled?: boolean,
    isLandscape?: boolean,
    /** adds "hidden-outline" class */
    noOutline?: boolean,
    tieLineFilled?: boolean,
}) {
    return (
        <svg
            data-name="Layer 1"
            className={
                joinClassList(
                    baseClass,
                    blinking ? "sl-roadmap-alternating" : "",
                    tieLineFilled ? "tie-line-filled" : ""
                )}
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            viewBox="0 0 50 50">
            <title>Big Road</title>

            {
                !noOutline
                    ? <circle id="Circle"
                        className={joinClassList(
                            "big-road-cls-1",
                            (filled ? "filled" : ""))}

                        cx="25" cy="25" r="15" /> : null
            }

            {
                bankerPair
                    ? <circle id="BankerPair" className="big-road-cls-2" cx="10" cy="10" r="6" />
                    : null
            }

            {
                playerPair
                    ? <circle id="PlayerPair" className="big-road-cls-3" cx="40" cy="40" r="6" />
                    : null
            }

            {
                tieLine
                    ?
                    isLandscape ? <line id="TieLine" className="big-road-cls-4" x1="46" y2="46" y1="4" x2="4" /> :
                        <line id="TieLine" className="big-road-cls-4" x1="46" y2="46" y1="4" x2="4" />
                    : null
            }

            {
                tieValue
                    ? <text className="big-road-cls-5" transform="translate(18.6 26.34) rotate(-45)">
                        {tieValue}
                    </text>
                    : null
            }

        </svg>
    )
}
