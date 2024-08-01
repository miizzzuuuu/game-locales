import { DisplayHelper } from '../../../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { selectPeriod } from '../../../../../store/slice/gameSlice';
import {

    checkLastIdx,

} from '../base/BaccaratRoadmaps';
import '../../style.scss'
// import { assetImg } from 'src/modules/moduleImporter';
import { BaseV2Roadmap, ResultHaveResultString } from '../base/V2Roadmap';

import { Dog, Dragon, Goat, Horse, Monkey, Ox, Pig, Rabbit, Rat, Rooster, Snake, Tiger } from '../base/SVGShio';


export default class M27 extends BaseV2Roadmap {
    tianPrediction: ((props: any) => JSX.Element)[] | [] = [];
    diPrediction: ((props: any) => JSX.Element)[] | [] = [];
    static redColor = "#F10149";
    static blueColor = "#2673D9";
    static greenColor = "#01C995";
    redColor = M27.redColor;
    blueColor = M27.blueColor;
    greenColor = M27.greenColor;
    layout = M27;

    static ShoeStat() {
        const darkMode = true;
        const historyBlink = false;
        const data = useAppSelector((state) => state.history.history);
        const periode = data.length;
        const a = periode?.toString().length + 3
        const firstSpace = a * 6;
        const Layout = M27;
        return (
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                width: "100%",
                paddingBlock: '0.5rem'
            }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50%"
                    fill="none"
                    viewBox="0 0 180 12"
                >
                    <text
                        x={0 + 6 / 2} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">#{periode}</text>

                    <rect width="12" height="12" x={firstSpace} fill={Layout.blueColor} rx="6"></rect>
                    <text
                        x={firstSpace + 6 / 2} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">D</text>

                    <text
                        x={firstSpace + 15} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">{data.filter(({ result }: ResultHaveResultString) => result == "di").length}</text>
                    <rect width="12" height="12" x={firstSpace + 31} fill={Layout.redColor} rx="6"></rect>
                    <text
                        x={firstSpace + 31 + 6 / 2} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">T</text>

                    <text
                        x={firstSpace + 31 + 15} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">{data.filter(({ result }: ResultHaveResultString) => result == "tian").length}</text>
                    <rect width="12" height="12" x={firstSpace + 64} fill={Layout.greenColor} rx="6"></rect>
                    <text
                        x={firstSpace + 64 + 6 / 2} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">T</text>

                    <text
                        x={firstSpace + 64 + 15} y={6 + 6 * 0.65}
                        style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
                        fill="white">{data.filter(({ result }: ResultHaveResultString) => result == "tie").length}</text>
                </svg>
                <Layout
                    darkMode={darkMode}
                    historyBlink={historyBlink}
                    history={data}
                    full={""}
                    isLandscape={DisplayHelper.getOrientation() == "landscape"}
                    onClick={() => console.log("")}
                    type="predictions" />
            </div>
        );
    }

    render(): any {
        // console.log("m27 RL props", this.props);

        this.prepareV3Render();

        //Obligatory counters
        this.currentRow = 0;
        this.currentCol = -1;
        this.currentType = '';

        // Formats history to desired roadmap
        switch (this.props.type) {
            case 'shio':

                this.currentRow = -1;

                this.currentCol = 0;



                //Note: always use actual history array on release

                const history = this.props.history;



                //Skips render when history props is empty

                if (!history) return null;



                //Formula: history length divided by displayed rows

                if (Math.ceil(history.length / 6) >= this.totalColumns!)

                    this.firstDisplayedCol =

                        Math.ceil(history.length / 6) - this.totalColumns!;

                history.forEach((item: any, idx: any) => {

                    let ele = null;

                    if (this.currentRow! >= 5) {

                        this.currentRow = 0;

                        this.currentCol! += 1;

                    } else this.currentRow! += 1;

                    if (this.currentCol! < (this.firstDisplayedCol || 0)) return;


                    if (item.result === 'tian') {

                        ele = (

                            <>

                                <g>

                                    <rect

                                        x={3.5 + (this.currentCol! * 14) - ((this.firstDisplayedCol || 0) * 14)}

                                        y={4.5 + (this.currentRow! * 16)}
                                        width="13"

                                        height="13"

                                        rx="6.5"
                                        fill={M27.redColor}

                                    />

                                    <g
                                        className={
                                            'sl-roadmap-circle sl-roadmap-blue ' +
                                            (checkLastIdx(history, idx)
                                                ? this.alternatingStyle
                                                : null)
                                        }
                                        clip-path={`url(#${item.idnomor}-${item.di})`}

                                        transform={`translate(${3.5 + (this.currentCol! * 14) - ((this.firstDisplayedCol || 0) * 16)}, ${4.5 + (this.currentRow! * 16)})`}

                                    >

                                        {

                                            item.tian === 'dog' ? <Dog color={M27.redColor} /> :

                                                item.tian === 'dragon' ? <Dragon color={M27.redColor} /> :

                                                    item.tian === 'snake' ? <Snake color={M27.redColor} /> :

                                                        item.tian === 'rat' ? <Rat color={M27.redColor} /> :

                                                            item.tian === 'monkey' ? <Monkey color={M27.redColor} /> :

                                                                item.tian === 'rabbit' ? <Rabbit color={M27.redColor} /> :

                                                                    item.tian === 'ox' ? <Ox color={M27.redColor} /> :

                                                                        item.tian === 'tiger' ? <Tiger color={M27.redColor} /> :

                                                                            item.tian === 'pig' ? <Pig color={M27.redColor} /> :

                                                                                item.tian === 'horse' ? <Horse color={M27.redColor} /> :

                                                                                    item.tian === 'rooster' ? <Rooster color={M27.redColor} /> :

                                                                                        item.tian === 'goat' ? <Goat color={M27.redColor} /> : null

                                        }

                                    </g>



                                    <defs>

                                        <clipPath id={`${item.idnomor}-${item.di}`}>

                                            <rect

                                                x={0}

                                                y={0}

                                                width="13"

                                                height="13"

                                                rx="6.5"

                                                fill="white"

                                            />

                                        </clipPath>

                                    </defs>

                                </g>

                            </>

                        );

                    } else if (item.result === 'di') {

                        ele = (

                            <>

                                <g>

                                    <rect

                                        x={3.5 + (this.currentCol! * 14) - ((this.firstDisplayedCol || 0) * 14)}

                                        y={4.5 + (this.currentRow! * 16)}
                                        width="13"

                                        height="13"


                                        rx="6.5"

                                        fill="#2673D9"

                                    />

                                    <g
                                        className={
                                            'sl-roadmap-circle sl-roadmap-blue ' +
                                            (checkLastIdx(history, idx)
                                                ? this.alternatingStyle
                                                : null)
                                        }
                                        clip-path={`url(#${item.idnomor}-${item.di})`}

                                        transform={`translate(${3.5 + (this.currentCol! * 14) - ((this.firstDisplayedCol || 0) * 16)}, ${4.5 + (this.currentRow! * 16)})`}
                                    >

                                        {

                                            item.di === 'dog' ? <Dog color={M27.blueColor} /> :

                                                item.di === 'dragon' ? <Dragon color={M27.blueColor} /> :

                                                    item.di === 'snake' ? <Snake color={M27.blueColor} /> :

                                                        item.di === 'rat' ? <Rat color={M27.blueColor} /> :

                                                            item.di === 'monkey' ? <Monkey color={M27.blueColor} /> :

                                                                item.di === 'rabbit' ? <Rabbit color={M27.blueColor} /> :

                                                                    item.di === 'ox' ? <Ox color={M27.blueColor} /> :

                                                                        item.di === 'tiger' ? <Tiger color={M27.blueColor} /> :

                                                                            item.di === 'pig' ? <Pig color={M27.blueColor} /> :

                                                                                item.di === 'horse' ? <Horse color={M27.blueColor} /> :

                                                                                    item.di === 'rooster' ? <Rooster color={M27.blueColor} /> :

                                                                                        item.di === 'goat' ? <Goat color={M27.blueColor} /> : null

                                        }

                                    </g>



                                    <defs>

                                        <clipPath id={`${item.idnomor}-${item.di}`}>

                                            <rect

                                                x={0}

                                                y={0}

                                                width="13"

                                                height="13"

                                                rx="6.5"

                                                fill="white"

                                            />

                                        </clipPath>

                                    </defs>

                                </g>

                            </>

                        );

                    } else {

                        //tie

                        ele = (

                            <>

                                <g>

                                    <rect

                                        x={3.5 + (this.currentCol! * 14) - ((this.firstDisplayedCol || 0) * 14)}

                                        y={4.5 + (this.currentRow! * 16)}
                                        width="13"

                                        height="13"
                                        fill={M27.greenColor}
                                        rx="6.5"

                                    />

                                    <g
                                        className={
                                            'sl-roadmap-circle sl-roadmap-blue ' +
                                            (checkLastIdx(history, idx)
                                                ? this.alternatingStyle
                                                : null)
                                        }
                                        clip-path={`url(#${item.idnomor}-${item.di})`}

                                        transform={`translate(${3.5 + (this.currentCol! * 14) - ((this.firstDisplayedCol || 0) * 16)}, ${4.5 + (this.currentRow! * 16)})`}

                                    >

                                        {

                                            item.di === 'dog' ? <Dog color={M27.greenColor} /> :

                                                item.di === 'dragon' ? <Dragon color={M27.greenColor} /> :

                                                    item.di === 'snake' ? <Snake color={M27.greenColor} /> :

                                                        item.di === 'rat' ? <Rat color={M27.greenColor} /> :

                                                            item.di === 'monkey' ? <Monkey color={M27.greenColor} /> :

                                                                item.di === 'rabbit' ? <Rabbit color={M27.greenColor} /> :

                                                                    item.di === 'ox' ? <Ox color={M27.greenColor} /> :

                                                                        item.di === 'tiger' ? <Tiger color={M27.greenColor} /> :

                                                                            item.di === 'pig' ? <Pig color={M27.greenColor} /> :

                                                                                item.di === 'horse' ? <Horse color={M27.greenColor} /> :

                                                                                    item.di === 'rooster' ? <Rooster color={M27.greenColor} /> :

                                                                                        item.di === 'goat' ? <Goat color={M27.greenColor} /> : null

                                        }

                                    </g>



                                    <defs>

                                        <clipPath id={`${item.idnomor}-${item.di}`}>

                                            <rect

                                                x={0}

                                                y={0}

                                                width="13"

                                                height="13"

                                                rx="6.5"

                                                fill="white"

                                            />

                                        </clipPath>

                                    </defs>

                                </g>

                            </>

                        );

                    }



                    this.roadmapDisplay![this.currentRow!][this.currentCol!] = ele;

                });

                break;
            case 'big-road':
            case 'big-eye-road':
            case 'small-road':
            case 'cockroach-road':
            case 'predictions':
                this.resetDisplayPointer();
                this.resetAnalysisPointer();

                //Actual data
                //Todo: change this in prepareV3Render, at the end of the function
                this.simpleBigRoad!.forEach((item, idx) => {
                    if (item === 't')
                        this.pushTieDisplay(this.roadmapTiesDisplay!);
                    else {

                        const data = {
                            ele: item === 'T' ? (
                                <div
                                    key={'sBR' + idx}
                                    className={
                                        'sl-roadmap-circle-hollow sl-roadmap-blue ' +
                                        (checkLastIdx(this.simpleBigRoad!, idx)
                                            ? this.alternatingStyle
                                            : 0)
                                    }
                                />
                            ) : item === 'D' ? (
                                <div
                                    key={'sBR' + idx}
                                    className={
                                        'sl-roadmap-circle-hollow sl-roadmap-red ' +
                                        (checkLastIdx(this.simpleBigRoad!, idx)
                                            ? this.alternatingStyle
                                            : 0)
                                    }
                                />
                            ) : null,
                            color: item === "T" ? this.redColor :
                                item === "D" ? this.blueColor :
                                    null,
                            blink: (checkLastIdx(this.simpleBigRoad!, idx) ? this.alternatingStyle : 0)
                        }


                        // @ts-ignore
                        this.addBigRoadDisplay(this.roadmapDisplay!, data, item);

                        // Use straight columns to set this.roadmapTypes columns, not dragon tail

                        this.pushRoadmapType(this.roadmapTypes!, item);

                        this.resetTieCount();
                    }
                });

                this.resetDisplayPointer();
                break;

            default:
                break;
        }

        //Resets counter for 2nd filter
        // this.currentRow = 0;
        // this.currentCol = 0;

        let startingCol;


        let redElement: (props: any) => JSX.Element,
            blueElement: (props: any) => JSX.Element,
            redBlinkElement: (props: any) => JSX.Element,
            blueBlinkElement: (props: any) => JSX.Element;

        switch (this.props.type) {
            case 'big-eye-road':
                redElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={this.redColor} {...{ ...props }} ></circle>;
                blueElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={this.blueColor}  {...{ ...props }}></circle>;

                redBlinkElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={this.redColor} {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle} ></circle>;
                blueBlinkElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={this.blueColor}  {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle} ></circle>;

                startingCol = 1;
                break;

            case 'small-road':
                redElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={this.redColor}  {...{ ...props }} ></circle>;
                blueElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={this.blueColor}  {...{ ...props }} ></circle>;

                redBlinkElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={this.redColor}  {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle}  ></circle>;
                blueBlinkElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={this.blueColor}  {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle} ></circle>;
                startingCol = 2;
                break;

            case 'cockroach-road':
                redElement = (props) => <path
                    stroke={this.redColor}
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
                ></path>;
                blueElement = (props) => <path
                    stroke={this.blueColor}
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
                ></path>;

                redBlinkElement = (props) => <path
                    stroke={this.redColor}
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
                    {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle}
                ></path>;
                blueBlinkElement = (props) => <path
                    stroke={this.blueColor}
                    strokeLinecap="round"
                    strokeWidth="1.2"
                    d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
                    {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle}
                ></path>;

                startingCol = 3;
                break;

            default:
                break;
        }


        let a = 0;
        switch (this.props.type) {
            case 'big-eye-road':
            case 'small-road':
            case 'cockroach-road':
                this.currentRow = 1;
                this.currentCol = startingCol; //1 //for big-eye-road

                for (a = 0; a < 9; a++)
                    this.roadmapDisplay![a] = '123456789'
                        .split('')
                        .map((_) => null);

                //Evaluate the same column, first column
                if (this.roadmapTypes![1][this.currentCol!]) {
                    for (a = 1; a < this.roadmapTypes!.length; a++) {
                        if (!this.roadmapTypes![a][this.currentCol!]) break;

                        //Evaluate the same column
                        //startingCol = 1 for big-eye-road
                        if (
                            this.roadmapTypes![a][
                            this.currentCol! - startingCol!
                            ] ===
                            this.roadmapTypes![a - 1][
                            this.currentCol! - startingCol!
                            ]
                        )
                            this.addDisplayTileLegacy(
                                this.roadmapDisplay,
                                // @ts-ignore
                                redElement!,
                                'red',
                            );
                        else
                            this.addDisplayTileLegacy(
                                this.roadmapDisplay,
                                // @ts-ignore
                                blueElement!,
                                'blue',
                            );
                    }
                }

                this.currentRow = 0;
                this.currentCol!++;

                for (; this.currentCol! < this.roadmapTypes![0].length;) {
                    //Evaluate the next column
                    if (this.roadmapTypes![0][this.currentCol!]) {
                        //Count filled cells
                        let lengthLeft = 0,
                            lengthRight = 0;

                        //startingCol = 1 for big-eye-road
                        for (a = 0; a < this.roadmapTypes!.length; a++) {
                            if (
                                this.roadmapTypes![a][
                                this.currentCol! - startingCol! - 1
                                ]
                            )
                                lengthLeft++;
                            if (this.roadmapTypes![a][this.currentCol! - 1])
                                lengthRight++;
                        }

                        // console.log("left:" + lengthLeft, "right:" + lengthRight);
                        //Compare column lengths
                        if (lengthLeft === lengthRight)
                            this.addDisplayTileLegacy(
                                this.roadmapDisplay,
                                // @ts-ignore
                                redElement!,
                                'red',
                            );
                        else
                            this.addDisplayTileLegacy(
                                this.roadmapDisplay,
                                // @ts-ignore
                                blueElement!,
                                'blue',
                            );
                    }

                    this.currentRow++;

                    //Checks empty cell of the next row
                    if (this.roadmapTypes![this.currentRow][this.currentCol!])
                        for (
                            ;
                            this.currentRow < this.roadmapTypes!.length;
                            this.currentRow++
                        ) {
                            //Evaluate the same column

                            //Checks empty cell
                            if (
                                this.roadmapTypes![this.currentRow][
                                this.currentCol!
                                ]
                            ) {
                                //Checks adjacent cells
                                if (
                                    this.roadmapTypes![this.currentRow][
                                    this.currentCol! - startingCol!
                                    ] === //1
                                    this.roadmapTypes![this.currentRow - 1][
                                    this.currentCol! - startingCol!
                                    ]
                                )
                                    this.addDisplayTileLegacy(
                                        this.roadmapDisplay,
                                        // @ts-ignore
                                        redElement!,
                                        'red',
                                    );
                                else
                                    this.addDisplayTileLegacy(
                                        this.roadmapDisplay,
                                        // @ts-ignore
                                        blueElement!,
                                        'blue',
                                    );
                            } else break;
                        }

                    this.currentRow = 0;
                    this.currentCol!++;
                }

                // console.log("cR cC", this.currentDisplayRow, this.currentDisplayCol);
                if (
                    this.props.historyBlink &&
                    this.simpleBigRoad![this.simpleBigRoad!.length - 1] !== 't'
                )
                    if (this.currentType === 'red')
                        // @ts-ignore 
                        this.roadmapDisplay![this.currentDisplayRow!][
                            this.currentDisplayCol!
                            // @ts-ignore
                        ] = redBlinkElement;
                    else
                        // @ts-ignore 
                        this.roadmapDisplay![this.currentDisplayRow!][
                            this.currentDisplayCol!
                            // @ts-ignore
                        ] = blueBlinkElement;
                break;

            case 'predictions':
                this.diPrediction = [];
                this.tianPrediction = [];
                const redElements = [
                    (props: any) => <circle {...{ ...props }} r="2.70455" stroke={this.redColor} stroke-width="0.954546" />,
                    (props: any) => <circle {...{ ...props }} r="3.18182" fill={this.redColor} />,
                    (props: any) => <path {...{ ...props }} stroke={this.redColor} stroke-width="0.954546" />
                ];
                const blueElements = [
                    (props: any) => <circle {...{ ...props }} r="2.705" stroke={this.blueColor} strokeWidth="0.955" ></circle>,
                    (props: any) => <circle {...{ ...props }} r="3.182" fill={this.blueColor}></circle>,
                    (props: any) => <path {...{ ...props }} stroke={this.blueColor} strokeWidth="0.955" ></path>
                ];

                startingCol = 0;
                let startingRow = 0;

                let lastIdxCol = this.roadmapTypes![0].filter((i) => i).length - 1;


                // @ts-ignore

                const lastBigRoadSequence = this.bigRoadSequence![this.bigRoadSequence!.length - 1];
                if (lastBigRoadSequence === undefined)
                    break;

                startingRow = this.bigRoadSequence![this.bigRoadSequence!.length - 1][0];
                startingCol = this.bigRoadSequence![this.bigRoadSequence!.length - 1][1];

                for (a = 0; a < this.roadmapTypes!.length; a++)
                    if (this.roadmapTypes![a][startingCol])
                        startingRow = a;
                    else break;

                this.currentRow = startingRow;
                this.currentCol = startingCol > lastIdxCol ? lastIdxCol : startingCol;

                this.currentType = this.roadmapTypes![this.currentRow][this.currentCol];

                const currentPlayer =
                    this.currentType === "T" ? "tian" :
                        this.currentType === "D" ? "di" : "tie";



                if (currentPlayer == "tie") {

                }

                if (currentPlayer === "di") {
                    this.currentRow += 1;

                    for (a = 0; a < 3; a++) {

                        if (this.currentCol - a - 1 < 0) {

                        }
                        else if (this.roadmapTypes![this.currentRow][this.currentCol - a - 1] ===
                            this.roadmapTypes![this.currentRow - 1][this.currentCol - a - 1]) {

                            this.diPrediction[a] = blueElements[a];
                            this.tianPrediction[a] = redElements[a];

                        }
                        else {
                            this.diPrediction[a] = redElements[a];
                            this.tianPrediction[a] = blueElements[a];
                        }
                    }


                }

                if (currentPlayer === "tian") {
                    this.currentRow += 1;

                    for (a = 0; a < 3; a++) {

                        if (this.currentCol - a - 1 < 0) {

                        }
                        else if (this.roadmapTypes![this.currentRow][this.currentCol - a - 1] ===
                            this.roadmapTypes![this.currentRow - 1][this.currentCol - a - 1]) {
                            this.diPrediction[a] = redElements[a];
                            this.tianPrediction[a] = blueElements[a];
                        }
                        else {
                            this.diPrediction[a] = blueElements[a];

                            this.tianPrediction[a] = redElements[a];
                        }
                    }


                }

                break;
            default:
                break;
        }

        return this.renderV3();
    }

}