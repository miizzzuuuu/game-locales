import React, { JSX } from 'react';
import { getBasePcode, getPcode } from '../../../../../common/utils/GameHelper';
import { IKeyNumberDict } from '../game/M23';
import { BaseV2Roadmap } from './V2Roadmap';

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
        counts[x + ''] = (counts[x + ''] || 0) + 1;
    });
    return counts;
}

function joinClassList(...classListAry: string[]) {
    return classListAry.filter((x) => x).join(' ');
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
    type: string,
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
    } else if (this.currentType !== type || this.currentDisplayRow! >= maxIdxRow) {
        this.currentDirection = RoadmapDirections.Down;

        this.currentDisplayRow = 0;
        this.lastDisplayCol! += 1;
        this.currentDisplayCol = this.lastDisplayCol;
    } else if (this.currentType !== type || this.currentDisplayRow! >= maxIdxRow) {
        this.currentDirection = RoadmapDirections.Down;

        this.currentDisplayRow = 0;
        this.lastDisplayCol! += 1;
        this.currentDisplayCol = this.lastDisplayCol;
    } else {
        // console.log("sBR", this.currentDisplayRow! + 1, this.currentDisplayCol!, this.props.type);

        // @ts-ignore
        if (displayAry[this.currentDisplayRow! + 1][this.currentDisplayCol!])
            this.currentDirection = RoadmapDirections.Right;
        // @ts-ignore
        if (!displayAry[this.currentDisplayRow! + 1][this.currentDisplayCol!])
            this.currentDirection = RoadmapDirections.Down;

        if (this.currentDirection === RoadmapDirections.Right) this.currentDisplayCol!++;
        else this.currentDisplayRow!++;
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
export function addDisplayTileLegacy(
    this: BaseV2Roadmap,
    displayAry: any,
    tile: OptionalJSXElement,
    type: string,
) {
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
        if (!this.roadmapDisplay![this.currentDisplayRow! + 1][this.currentDisplayCol!])
            this.currentDirection = RoadmapDirections.Down;
        if (this.currentDirection === RoadmapDirections.Right) this.currentDisplayCol!++;
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
        if (!this.roadmapDisplay![this.currentDisplayRow! + 1][this.currentDisplayCol!])
            this.currentDirection = RoadmapDirections.Down;

        if (this.currentDirection === RoadmapDirections.Right) this.currentDisplayCol!++;
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
    type: string,
) {
    if (this.currentType1 !== type) {
        this.currentCol!++;
        this.currentRow = 0;
    } else {
        this.currentRow!++;
    }

    if (roadmapAry.length <= this.currentRow!) {
        roadmapAry.push([]);
        for (let a = 0; a < roadmapAry[0].length; a++) roadmapAry[roadmapAry.length - 1][a] = null;
    }

    roadmapAry[this.currentRow!][this.currentCol!] = type;

    this.currentType1 = type;
}

export function pushTieDisplay(
    this: BaseV2Roadmap,
    tieDisplayAry: Array<Array<JSX.Element | null>>,
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
            baseClass: '',
            noOutline: true,
            tieLine: true,
            tieValue: this.tieCount,
            isLandscape: this.props.isLandscape,
        }),
        num: this.tieCount,
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
    const basePcode: string = getBasePcode();

    this.firstDisplayedCol = 0;
    this.firstRoadmapDisplayedCol = 0;

    if (this.props.enlarged)
        //Desktop enlarged
        this.totalColumns = 16;
    else {
        switch (this.props.type) {
            case 'big-eye-road':
                this.totalColumns = this.props.totalColumns || 16;
                break;
            case 'small-road':
            case 'cockroach-road':
                this.totalColumns = basePcode === 'm32' ? 12 : this.props.totalColumns || 16; //desktop single
                break;
            case 'big-road':
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
                            ? 24 //mobile landscape V2 expanded
                            : basePcode === 'm32'
                              ? 14
                              : 4 //mobile landscape
                      : //landscape open/close

                        this.props.small
                        ? 14 //lobby desktop
                        : basePcode === 'm32'
                          ? 17
                          : this.props.totalColumns || 24; //desktop in-game
                break;

            case 'bead-road':
                this.totalColumns = this.props.totalColumns || 24; //desktop in-game
                break;

            case 'fan':
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
                        ? basePcode === 'm25'
                            ? 12
                            : 14 //lobby desktop
                        : 25; //desktop in-game
                break;

            case 'shio':
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
    if (
        basePcode === 'm22' ||
        ['m23b', 'm23c'].some((m23wild) => getPcode().includes(m23wild)) ||
        basePcode === 'm28' ||
        basePcode === 'm38'
    )
        this.roadmapPairsDisplay = [];

    for (let a = 0; a < 9; a++) {
        this.roadmapDisplay[a] = [...Array(9).keys()].map(() => null);
        this.roadmapTypes[a] = [...Array(9).keys()].map(() => null);
        this.roadmapTiesDisplay[a] = [...Array(9).keys()].map(() => null);

        // Todo: use clonePcode later
        if (
            basePcode === 'm22' ||
            ['m23b', 'm23c'].some((m23wild) => getPcode().includes(m23wild)) ||
            basePcode === 'm28' ||
            basePcode === 'm38'
        )
            this.roadmapPairsDisplay![a] = '1'.split('').map(() => []);
    }

    // Todo: use clonePcode later
    switch (basePcode) {
        case 'm22':
        case 'm28':
        case 'm38':
            this.simpleBigRoad = getSimpleBaccaratResultArray(this.props.history);
            this.simpleBigRoadPairs = getSimpleBaccaratResultPairArray(this.props.history);
            break;

        case 'm23':
            this.simpleBigRoad = getSimpleDragonTigerResultArray(this.props.history);
            if (['m23b', 'm23c'].some((m23wild) => getPcode().includes(m23wild)))
                this.simpleBigRoadPairs = getSimpleDragonTigerResultPairArray(this.props.history);
            break;

        case 'm25':
            this.simpleBigRoad = getSimpleFanTanResultArray(this.props.history);
            break;

        case 'm27':
            this.simpleBigRoad = getSimpleShioFightResultArray(this.props.history);
            break;

        case 'm32':
            this.simpleBigRoad = getSimpleSamGongResultArray(this.props.history);
            // mainClass.simpleBigRoadPairs = getSimpleSamGongResultPairArray(mainClass.props.history);
            break;
        case 'm34':
            this.simpleBigRoad = getSimpleHiLoResultArray(this.props.history);
            break;
        case 'm40':
            this.simpleBigRoad = getSimpleXocDiaResultArray(this.props.history);
            break;

        default:
            break;
    }

    this.alternatingStyle = this.props.historyBlink ? 'sl-roadmap-alternating' : null;
}

function renderV3(this: BaseV2Roadmap) {
    // if (!mainClass.totalColumns)
    // console.warn("renderV3 totalColumns is empty");

    const roadmapColumns = nary(this.totalColumns! + 2);
    const { darkMode, small, full, type, totalColumns } = this.props;

    const classList = joinClassList(
        'roadmap-table',
        'v3',
        full ? (full == type ? 'full' : 'invisible') : '',
        `col-${totalColumns!.toString()}`,
        small ? 'small' : '',
        darkMode ? 'dark' : '',
        type,
    );

    return (
        <g onClick={this.props.onClick} className={classList} pointerEvents={'bounding-box'}>
            {
                //big eye, small, cockroach roadmaps
                type === 'big-eye-road' || type === 'small-road' || type === 'cockroach-road' ? (
                    this.bigRoadDerivativesFragment()
                ) : //big & bead roads: 20
                type === 'big-road' ? (
                    this.bigRoadFragment()
                ) : type === 'bead-road' ? (
                    this.beadRoadFragment()
                ) : // FanTan
                type === 'fan' ? (
                    nary(4).map((row, rowIdx) => (
                        <div className="row" key={'ft' + row}>
                            {roadmapColumns.map((col, colIdx) => (
                                <div key={'bt_' + row + col}>
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
                type === 'shio' ? (
                    nary(6).map((row, rowIdx) => (
                        <React.Fragment key={'cBR_' + '_' + row}>
                            {roadmapColumns.map((col, colIdx) => (
                                <React.Fragment key={'cBR_' + row + '_' + col}>
                                    {this.roadmapDisplay![rowIdx][
                                        colIdx + this.firstDisplayedCol!
                                    ] !== undefined
                                        ? this.roadmapDisplay![rowIdx][
                                              colIdx + this.firstDisplayedCol!
                                          ]
                                        : null}

                                    {this.props.expanded || this.props.small ? null : null}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))
                ) : //Predictions
                type === 'predictions' ? (
                    this.renderPredictions(this)
                ) : (
                    // null
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
export function renderPredictions(gameRoad: any) {
    const basePcode: string = getBasePcode();
    const clonePcode = basePcode;

    const blueLetter =
        clonePcode === 'm22' || clonePcode === 'm32' || basePcode === 'm38' ? (
            <text
                x="5"
                y="10"
                style={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: 8 }}
                fill="white"
            >
                PLAYER
            </text>
        ) : clonePcode === 'm23' ? (
            <text
                x="5"
                y="11"
                style={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: 10 }}
                fill="white"
            >
                DRAGON
            </text>
        ) : clonePcode === 'm27' ? (
            <text
                x="5"
                y="11"
                style={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: 10 }}
                fill="white"
            >
                DI
            </text>
        ) : clonePcode === 'm34' ? (
            'Hi'
        ) : (
            'E'
        );

    const redLetter =
        clonePcode === 'm22' || clonePcode === 'm32' || basePcode === 'm38' ? (
            <text
                x="82"
                y="9.5"
                style={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: 8 }}
                fill="white"
            >
                BANKER
            </text>
        ) : clonePcode === 'm23' ? (
            <text
                x="85"
                y="11"
                style={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: 10 }}
                fill="white"
            >
                TIGER
            </text>
        ) : clonePcode === 'm27' ? (
            <text
                x="85"
                y="11"
                style={{ fontFamily: 'Manrope', fontWeight: 'bold', fontSize: 10 }}
                fill="white"
            >
                TIAN
            </text>
        ) : clonePcode === 'm34' ? (
            'Lo'
        ) : (
            'O'
        );

    const bluePredictionArray =
        clonePcode === 'm22' || clonePcode === 'm32' || clonePcode === 'm38'
            ? // @ts-ignore
              gameRoad.playerPrediction
            : clonePcode === 'm23'
              ? // @ts-ignore
                gameRoad.dragonPrediction
              : clonePcode === 'm27'
                ? // @ts-ignore

                  gameRoad.tianPrediction
                : clonePcode === 'm34'
                  ? // @ts-ignore

                    gameRoad.hiPrediction
                  : // @ts-ignore

                    gameRoad.evenPrediction; //FanTan

    const redPredictionArray =
        clonePcode === 'm22' || clonePcode === 'm32' || basePcode === 'm38'
            ? // @ts-ignore

              gameRoad.bankerPrediction
            : clonePcode === 'm23'
              ? // @ts-ignore
                gameRoad.tigerPrediction
              : clonePcode === 'm27'
                ? // @ts-ignore
                  gameRoad.diPrediction
                : clonePcode === 'm34'
                  ? // @ts-ignore
                    gameRoad.loPrediction
                  : // @ts-ignore
                    gameRoad.oddPrediction; //FanTan
    // @ts-ignore
    //Template return, no need to change
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="133" fill="none" viewBox="0 0 143 14">
                <g clipPath="url(#clip0_246_543)">
                    <rect
                        width="75.091"
                        height="14"
                        x="0.818"
                        fill={
                            clonePcode === 'm23'
                                ? gameRoad.layout.redColor
                                : gameRoad.layout.blueColor
                        }
                        rx="4"
                    ></rect>
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
                        {bluePredictionArray[0] &&
                            bluePredictionArray[0]({
                                cx: '53.0002',
                                cy: '7.00018',
                            })}
                        {bluePredictionArray[1] &&
                            bluePredictionArray[1]({
                                cx: '60.8635',
                                cy: '7.00018',
                            })}
                        {bluePredictionArray[2] &&
                            bluePredictionArray[2]({
                                d: 'M71.2735 4.45508L66.1826 9.54599',
                            })}
                    </g>
                </g>
                <g clipPath="url(#clip1_246_543)">
                    <rect
                        width="62.091"
                        height="14"
                        x="80.909"
                        fill={
                            clonePcode === 'm23'
                                ? gameRoad.layout.blueColor
                                : gameRoad.layout.redColor
                        }
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
                        {redPredictionArray[0] &&
                            redPredictionArray[0]({
                                cx: '120.091',
                                cy: '7',
                            })}
                        {redPredictionArray[1] && redPredictionArray[1]({ cx: '127.954', cy: '7' })}
                        {redPredictionArray[2] &&
                            redPredictionArray[2]({
                                d: 'M138.364 4.455l-5.091 5.091',
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
    this.currentType = '';
    this.currentType1 = '';
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
        item.result === 'banker' ? 'B' : item.result === 'player' ? 'P' : 'T',
    );
}

//Baccarat Pair
/** @param bigRoad props.history */
function getSimpleBaccaratResultPairArray(bigRoad: Array<any>) {
    if (!bigRoad) return [];

    return bigRoad.map((item) =>
        item.bankerPair && item.playerPair
            ? 'D'
            : item.bankerPair
              ? 'B'
              : item.playerPair
                ? 'P'
                : ' ',
    );
}

//Dragon Tiger Pair
/** @param bigRoad props.history */
function getSimpleDragonTigerResultPairArray(bigRoad: Array<any>) {
    if (!bigRoad) return [];
    return bigRoad.map((item) =>
        item.tiger[0] == item.wild[0] && item.dragon[0] == item.wild[0]
            ? 'D'
            : item.tiger[0] == item.wild[0]
              ? 'TG'
              : item.dragon[0] == item.wild[0]
                ? 'DG'
                : ' ',
    );
}

//Dragon & Tiger
/** @param bigRoad props.history */
function getSimpleDragonTigerResultArray(bigRoad: Array<any>) {
    if (!bigRoad) return [];

    return bigRoad.map((item) =>
        item.result === 'dragon' ? 'D' : item.result === 'tiger' ? 'T' : 't',
    );
}
//ShioFight
/** @param bigRoad props.history */
function getSimpleShioFightResultArray(history: Array<any>) {
    if (!history) return [];

    return history.map((item) => (item.result === 'di' ? 'D' : item.result === 'tian' ? 'T' : 't'));
}

//FanTan
function getSimpleFanTanResultArray(history: Array<any>) {
    if (!history) return [];

    return history.map((item) => (item.angka % 2 ? 'O' : 'E'));
}

//SamGong
function getSimpleSamGongResultArray(history: Array<any>) {
    if (!history) return [];

    return history.map((item) =>
        item.result === 'player' ? 'P' : item.result === 'banker' ? 'B' : 'T',
    );
}

//Hilo
function getSimpleHiLoResultArray(history: Array<any>) {
    if (!history) return [];

    return history.map((item) => (+item.angka > 7 ? 'H' : +item.angka < 7 ? 'L' : '7'));
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
        return redCount % 2 > 0 ? 'O' : 'E';
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
                className={'bead-road-cls-1 ' + baseClassList}
                cx="25"
                cy="25"
                r="24"
            />

            <text id="Number" className="bead-road-cls-2" transform="translate(13.1 37)">
                {value}
            </text>

            {bankerPair ? (
                <circle
                    id="BankerPair"
                    className={'bead-road-cls-3 sl-roadmap-red'}
                    cx="10"
                    cy="10"
                    r="6"
                />
            ) : null}

            {playerPair ? (
                <circle
                    id="PlayerPair"
                    className={'bead-road-cls-4 sl-roadmap-blue'}
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
            <line id="TieLine" className="sl-roadmap-green" x1="46" y1="4" x2="4" y2="46" />
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
                blinking ? 'sl-roadmap-alternating' : '',
                tieLineFilled ? 'tie-line-filled' : '',
            )}
            xmlns="http://www.w3.org/2000/svg"
            width="20%"
            viewBox="0 0 50 50"
        >
            <title>Big Road</title>

            {!noOutline ? (
                <circle
                    id="Circle"
                    className={joinClassList('big-road-cls-1', filled ? 'filled' : '')}
                    cx="25"
                    cy="25"
                    r="15"
                />
            ) : null}

            {bankerPair ? (
                <circle id="BankerPair" className="big-road-cls-2" cx="10" cy="10" r="6" />
            ) : null}

            {playerPair ? (
                <circle id="PlayerPair" className="big-road-cls-3" cx="40" cy="40" r="6" />
            ) : null}

            {tieLine ? (
                isLandscape ? (
                    <line id="TieLine" className="big-road-cls-4" x1="46" y2="46" y1="4" x2="4" />
                ) : (
                    <line id="TieLine" className="big-road-cls-4" x1="46" y2="46" y1="4" x2="4" />
                )
            ) : null}

            {tieValue ? (
                <text className="big-road-cls-5" transform="translate(18.6 26.34) rotate(-45)">
                    {tieValue}
                </text>
            ) : null}
        </svg>
    );
}
