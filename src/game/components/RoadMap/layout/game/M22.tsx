import { DisplayHelper } from '../../../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { selectPeriod } from '../../../../../store/slice/gameSlice';
import { checkLastIdx } from '../base/BaccaratRoadmaps';
import { BaseV2Roadmap, ResultHaveResultString, nullArray } from '../base/V2Roadmap';

export interface BaccaratHistory {
    banker: string;
    bankerPair: number;
    gamekey: number;
    hitung: string;
    idnomor: number;
    periode: number;
    player: string;
    playerPair: number;
    result: string;
    tanggal: string;
    value: number;
}

export default class M22 extends BaseV2Roadmap {
    playerPrediction: ((props: any) => JSX.Element)[] | [] = [];
    bankerPrediction: ((props: any) => JSX.Element)[] | [] = [];

    currentDirection = 0;
    static redColor = '#F10149';
    static blueColor = '#2673D9';
    static greenColor = '#01C995';
    redColor = M22.redColor;
    blueColor = M22.blueColor;
    greenColor = M22.greenColor;
    layout = M22;
    processBeadRoad() {
        this.currentRow = -1;
        this.currentCol = 0;

        //Note: always use actual history array on release
        const { history } = this.props;
        if (!history) return;

        // Formula: history length divided by displayed rows
        if (Math.ceil(history.length / 6) >= this.totalColumns!)
            this.firstDisplayedCol = Math.ceil(history.length / 6) - this.totalColumns!;

        history.forEach((item: BaccaratHistory, idx: number) => {
            let ele = null;

            if (this.currentRow! >= 7) {
                this.currentRow = 0;
                this.currentCol! += 1;
            } else this.currentRow! += 1;

            const alternatingStyleClass = checkLastIdx(history, idx) ? this.alternatingStyle : '';

            // @ts-ignore
            const { value } = item;
            const bankerPair = !!item.bankerPair;
            const playerPair = !!item.playerPair;
            if (this.currentCol! < (this.firstDisplayedCol || 0)) return;

            if (item.result === 'banker') {
                ele = (
                    <>
                        <rect
                            className={alternatingStyleClass || ''}
                            x={4.5 + 12 * this.currentCol! - (this.firstDisplayedCol || 0) * 12}
                            y={4.5 + 12 * this.currentRow!}
                            width="9"
                            height="9"
                            rx="4.5"
                            fill={this.redColor}
                        />
                        <text
                            className={alternatingStyleClass || ''}
                            x={
                                (4.5 + 9) / 2 +
                                12 * this.currentCol! -
                                (this.firstDisplayedCol || 0) * 12
                            }
                            y={4.5 + 9 - 2 + 12 * this.currentRow!}
                            style={{
                                fontFamily: 'Manrope, ManropeCustom',
                                fontWeight: 'bold',
                                fontSize: 7,
                            }}
                            fill="white"
                        >
                            B
                        </text>
                        {bankerPair && (
                            <circle
                                className={alternatingStyleClass || ''}
                                cx={
                                    5.5 + this.currentCol! * 12 - (this.firstDisplayedCol || 0) * 12
                                }
                                cy={5.5 + this.currentRow! * 12}
                                r="1.5"
                                fill={this.redColor}
                            />
                        )}
                        {playerPair && (
                            <circle
                                className={alternatingStyleClass || ''}
                                cx={
                                    12.5 +
                                    this.currentCol! * 12 -
                                    (this.firstDisplayedCol || 0) * 12
                                }
                                cy={12.5 + this.currentRow! * 12}
                                r="1.5"
                                fill={this.blueColor}
                            />
                        )}
                    </>
                );
            } else if (item.result === 'player') {
                ele = (
                    <>
                        <rect
                            className={alternatingStyleClass || ''}
                            x={4.5 + 12 * this.currentCol! - (this.firstDisplayedCol || 0) * 12}
                            y={4.5 + 12 * this.currentRow!}
                            width="9"
                            height="9"
                            rx="4.5"
                            fill={this.blueColor}
                        />
                        <text
                            className={alternatingStyleClass || ''}
                            x={
                                (4.5 + 9) / 2 +
                                12 * this.currentCol! -
                                (this.firstDisplayedCol || 0) * 12
                            }
                            y={4.5 + 9 - 2 + 12 * this.currentRow!}
                            style={{
                                fontFamily: 'Manrope, ManropeCustom',
                                fontWeight: 'bold',
                                fontSize: 7,
                            }}
                            fill="white"
                        >
                            P
                        </text>
                        {bankerPair && (
                            <circle
                                className={alternatingStyleClass || ''}
                                cx={
                                    5.5 + this.currentCol! * 12 - (this.firstDisplayedCol || 0) * 12
                                }
                                cy={5.5 + this.currentRow! * 12}
                                r="1.5"
                                fill={this.redColor}
                            />
                        )}
                        {playerPair && (
                            <circle
                                className={alternatingStyleClass || ''}
                                cx={
                                    12.5 +
                                    this.currentCol! * 12 -
                                    (this.firstDisplayedCol || 0) * 12
                                }
                                cy={12.5 + this.currentRow! * 12}
                                r="1.5"
                                fill={this.blueColor}
                            />
                        )}
                    </>
                );
            } else {
                //tie
                ele = (
                    <>
                        <rect
                            x={4.5 + 12 * this.currentCol! - (this.firstDisplayedCol || 0) * 12}
                            y={4.5 + 12 * this.currentRow!}
                            width="9"
                            height="9"
                            rx="4.5"
                            fill={this.greenColor}
                        />
                        <text
                            x={
                                (4.5 + 9) / 2 +
                                12 * this.currentCol! -
                                (this.firstDisplayedCol || 0) * 12
                            }
                            y={4.5 + 9 - 2 + 12 * this.currentRow!}
                            style={{
                                fontFamily: 'Manrope, ManropeCustom',
                                fontWeight: 'bold',
                                fontSize: 7,
                            }}
                            fill="white"
                        >
                            T
                        </text>
                        {bankerPair && (
                            <circle
                                className={alternatingStyleClass || ''}
                                cx={
                                    5.5 + this.currentCol! * 12 - (this.firstDisplayedCol || 0) * 12
                                }
                                cy={5.5 + this.currentRow! * 12}
                                r="1.5"
                                fill={this.redColor}
                            />
                        )}
                        {playerPair && (
                            <circle
                                className={alternatingStyleClass || ''}
                                cx={
                                    12.5 +
                                    this.currentCol! * 12 -
                                    (this.firstDisplayedCol || 0) * 12
                                }
                                cy={12.5 + this.currentRow! * 12}
                                r="1.5"
                                fill={this.blueColor}
                            />
                        )}
                    </>
                );
            }

            this.roadmapDisplay![this.currentRow!][this.currentCol!] = ele;
        });
    }

    processBigRoadDerivatives() {
        this.resetDisplayPointer();
        this.resetAnalysisPointer();
        console.log('starting type', this.props.type);
        //Actual data
        // console.log("sBR", this.simpleBigRoad);

        // Note: This should've been a 2D array of strings, not JSX Elements
        this.simpleBigRoad!.forEach((item, idx) => {
            if (item === 'T') this.pushTieDisplay(this.roadmapTiesDisplay!);
            else {
                const data = {
                    ele:
                        item === 'B' ? (
                            <div
                                key={'sBR' + idx}
                                className={
                                    'sl-roadmap-circle-hollow sl-roadmap-red ' +
                                    (checkLastIdx(this.simpleBigRoad!, idx)
                                        ? this.alternatingStyle
                                        : 0)
                                }
                            />
                        ) : item === 'P' ? (
                            <div
                                key={'sBR' + idx}
                                className={
                                    'sl-roadmap-circle-hollow sl-roadmap-blue ' +
                                    (checkLastIdx(this.simpleBigRoad!, idx)
                                        ? this.alternatingStyle
                                        : 0)
                                }
                            />
                        ) : null,
                    color: item === 'B' ? this.redColor : item === 'P' ? this.blueColor : null,
                    blink: checkLastIdx(this.simpleBigRoad!, idx) ? this.alternatingStyle : 0,
                };
                // @ts-ignore
                this.addBigRoadDisplay(this.roadmapDisplay!, data, item);

                // Use straight columns to set this.roadmapTypes columns, not dragon tail

                this.addRoadmapType(this.roadmapTypes!, item);

                this.resetTieCount();
            }
        });

        if (Math.ceil(this.roadmapTypes![0].filter((x) => x).length) >= 24!) {
            this.firstDisplayedCol = Math.ceil(this.roadmapTypes![0].filter((x) => x).length) - 24!;
        }

        console.log('roadmapTypes: ' + this.roadmapTypes![0].filter((x) => x));
        console.log('roadmapTypes length: ' + this.roadmapTypes![0].filter((x) => x).length);
        console.log('firstDisplayCol: ' + this.firstDisplayedCol);

        // Banker & Player Pairs
        this.resetDisplayPointer();

        if (this.roadmapPairsDisplay)
            try {
                this.simpleBigRoadPairs!.forEach((item, idx) => {
                    const pos = this.bigRoadSequence![idx];

                    if (this.roadmapPairsDisplay![0].length - 1 < pos[1])
                        for (const b in this.roadmapPairsDisplay) // @ts-ignore
                            this.roadmapPairsDisplay[b].push(...[]);

                    const alternatingStyle = checkLastIdx(this.simpleBigRoadPairs!, idx)
                        ? this.alternatingStyle
                        : '';

                    this.roadmapPairsDisplay![pos[0]][pos[1]] = [
                        <>
                            {(item === 'D' || item === 'B') && (
                                <circle
                                    className={alternatingStyle || ''}
                                    cx={5.5 + pos[1] * 12 - (this.firstDisplayedCol || 0) * 12}
                                    cy={5.5 + pos[0] * 12}
                                    r="1.5"
                                    fill={this.redColor}
                                />
                            )}
                            {(item === 'D' || item === 'P') && (
                                <circle
                                    className={alternatingStyle || ''}
                                    cx={12.5 + pos[1] * 12 - (this.firstDisplayedCol || 0) * 12}
                                    cy={12.5 + pos[0] * 12}
                                    r="1.5"
                                    fill={this.blueColor}
                                />
                            )}
                        </>,
                    ];
                });
            } catch (err) {
                console.error(err);
            }
    }

    processRenderPredictions() {
        this.playerPrediction = [];
        this.bankerPrediction = [];

        let a = 0;
        let startingCol = 0;
        let startingRow = 0;
        const redElements = [
            (props: any) => (
                <circle
                    {...{ ...props }}
                    r="2.70455"
                    stroke={this.redColor}
                    stroke-width="0.954546"
                />
            ),
            (props: any) => <circle {...{ ...props }} r="3.18182" fill={this.redColor} />,
            (props: any) => (
                <path {...{ ...props }} stroke={this.redColor} stroke-width="0.954546" />
            ),
        ];
        const blueElements = [
            (props: any) => (
                <circle
                    {...{ ...props }}
                    r="2.705"
                    stroke={this.blueColor}
                    strokeWidth="0.955"
                ></circle>
            ),
            (props: any) => <circle {...{ ...props }} r="3.182" fill={this.blueColor}></circle>,
            (props: any) => (
                <path {...{ ...props }} stroke={this.blueColor} strokeWidth="0.955"></path>
            ),
        ];

        let lastIdxCol = this.roadmapTypes![0].filter((i) => i).length - 1;

        // @ts-ignore

        const lastBigRoadSequence = this.bigRoadSequence![this.bigRoadSequence!.length - 1];
        if (lastBigRoadSequence === undefined) {
        } else {
            startingRow = this.bigRoadSequence![this.bigRoadSequence!.length - 1][0];
            startingCol = this.bigRoadSequence![this.bigRoadSequence!.length - 1][1];

            for (a = 0; a < this.roadmapTypes!.length; a++)
                if (this.roadmapTypes![a][startingCol]) startingRow = a;
                else break;

            this.currentRow = startingRow;
            this.currentCol = startingCol > lastIdxCol ? lastIdxCol : startingCol;

            this.currentType = this.roadmapTypes![this.currentRow][this.currentCol];

            const currentPlayer =
                this.currentType === 'B' ? 'banker' : this.currentType === 'P' ? 'player' : 'tie';

            if (currentPlayer == 'tie') {
            }

            if (currentPlayer === 'player') {
                this.currentRow += 1;

                for (a = 0; a < 3; a++) {
                    if (this.currentCol - a - 1 < 0) {
                    } else if (
                        this.roadmapTypes![this.currentRow][this.currentCol - a - 1] ===
                        this.roadmapTypes![this.currentRow - 1][this.currentCol - a - 1]
                    ) {
                        this.playerPrediction[a] = redElements[a];
                        this.bankerPrediction[a] = blueElements[a];
                    } else {
                        this.playerPrediction[a] = blueElements[a];
                        this.bankerPrediction[a] = redElements[a];
                    }
                }
            }

            if (currentPlayer === 'banker') {
                this.currentRow += 1;

                for (a = 0; a < 3; a++) {
                    if (this.currentCol - a - 1 < 0) {
                    } else if (
                        this.roadmapTypes![this.currentRow][this.currentCol - a - 1] ===
                        this.roadmapTypes![this.currentRow - 1][this.currentCol - a - 1]
                    ) {
                        this.playerPrediction[a] = blueElements[a];
                        this.bankerPrediction[a] = redElements[a];
                    } else {
                        this.playerPrediction[a] = redElements[a];
                        this.bankerPrediction[a] = blueElements[a];
                    }
                }
            }
        }
    }

    static ShoeStat() {
        const darkMode = true;
        const historyBlink = false;
        const data = useAppSelector((state) => state.history.history);
        const periode = data.length;
        const a = periode?.toString().length + 3;
        const firstSpace = a * 6;
        const Layout = M22;

        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    width: '100%',
                    paddingBlock: '1%',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="180"
                    fill="none"
                    viewBox="0 0 180 12"
                >
                    <text
                        x={0 + 6 / 2}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        #{periode}
                    </text>

                    <rect
                        width="12"
                        height="12"
                        x={firstSpace}
                        fill={Layout.blueColor}
                        rx="6"
                    ></rect>
                    <text
                        x={firstSpace + 6 / 2}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        P
                    </text>

                    <text
                        x={firstSpace + 15}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        {
                            data.filter(({ result }: ResultHaveResultString) => result == 'player')
                                .length
                        }
                    </text>
                    <rect
                        width="12"
                        height="12"
                        x={firstSpace + 31}
                        fill={Layout.redColor}
                        rx="6"
                    ></rect>
                    <text
                        x={firstSpace + 31 + 6 / 2}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        B
                    </text>

                    <text
                        x={firstSpace + 31 + 15}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        {
                            data.filter(({ result }: ResultHaveResultString) => result == 'banker')
                                .length
                        }
                    </text>
                    <rect
                        width="12"
                        height="12"
                        x={firstSpace + 64}
                        fill={Layout.greenColor}
                        rx="6"
                    ></rect>
                    <text
                        x={firstSpace + 64 + 6 / 2}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        T
                    </text>

                    <text
                        x={firstSpace + 64 + 15}
                        y={6 + 6 * 0.65}
                        style={{ fontFamily: 'Manrope', fontWeight: '500', fontSize: 10 }}
                        fill="white"
                    >
                        {
                            data.filter(({ result }: ResultHaveResultString) => result == 'tie')
                                .length
                        }
                    </text>
                </svg>
                <Layout
                    darkMode={darkMode}
                    historyBlink={historyBlink}
                    history={data}
                    full={''}
                    isLandscape={DisplayHelper.getOrientation() == 'landscape'}
                    onClick={() => console.log('')}
                    type="predictions"
                />
            </div>
        );
    }

    render(): any {
        this.prepareV3Render();

        const { type: roadmapType } = this.props;

        //Obligatory counters
        this.currentRow = 0;
        this.currentCol = -1;
        this.currentType = '';

        // Formats history to desired roadmap
        switch (roadmapType) {
            case 'bead-road':
                if (!this.props.history) {
                    console.error('Missing history');
                    return null;
                }

                this.processBeadRoad();
                // this.processBeadRoadLegacy();
                break;

            case 'big-road':
            case 'big-eye-road':
            case 'small-road':
            case 'cockroach-road':
            case 'predictions':
                if (!this.props.history) return null;
                this.processBigRoadDerivatives();
                // this.processBigRoadDerivativesLegacy();
                break;

            default:
                break;
        }

        let startingCol = 0;

        let redElement: (props: any) => JSX.Element,
            blueElement: (props: any) => JSX.Element,
            redBlinkElement: (props: any) => JSX.Element,
            blueBlinkElement: (props: any) => JSX.Element;

        switch (roadmapType) {
            case 'big-eye-road':
                redElement = (props) => (
                    <circle
                        cx={6 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2"
                        stroke={this.redColor}
                        {...{ ...props }}
                    ></circle>
                );
                blueElement = (props) => (
                    <circle
                        cx={6 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2"
                        stroke={this.blueColor}
                        {...{ ...props }}
                    ></circle>
                );

                redBlinkElement = (props) => (
                    <circle
                        cx={6 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2"
                        stroke={this.redColor}
                        {...{ ...props }}
                        className={(props.classNames || '') + this.alternatingStyle}
                    ></circle>
                );
                blueBlinkElement = (props) => (
                    <circle
                        cx={6 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2"
                        stroke={this.blueColor}
                        {...{ ...props }}
                        className={(props.classNames || '') + this.alternatingStyle}
                    ></circle>
                );

                startingCol = 1;
                break;

            case 'small-road':
                redElement = (props) => (
                    <circle
                        cx={102 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2.5"
                        fill={this.redColor}
                        {...{ ...props }}
                    ></circle>
                );
                blueElement = (props) => (
                    <circle
                        cx={102 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2.5"
                        fill={this.blueColor}
                        {...{ ...props }}
                    ></circle>
                );

                redBlinkElement = (props) => (
                    <circle
                        cx={102 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2.5"
                        fill={this.redColor}
                        {...{ ...props }}
                        className={(props.classNames || '') + this.alternatingStyle}
                    ></circle>
                );
                blueBlinkElement = (props) => (
                    <circle
                        cx={102 + 6 * props.col}
                        cy={66 + 6 * props.row}
                        r="2.5"
                        fill={this.blueColor}
                        {...{ ...props }}
                        className={(props.classNames || '') + this.alternatingStyle}
                    ></circle>
                );
                startingCol = 2;
                break;

            case 'cockroach-road':
                redElement = (props) => (
                    <path
                        stroke={this.redColor}
                        strokeLinecap="round"
                        strokeWidth="1.2"
                        d={`M${196.75 + 5 * props.col + 2 * (props.col >= 2 ? Math.floor(props.col / 2) : 0)} ${68.25 + 5 * props.row + 2 * (props.row >= 2 ? Math.floor(props.row / 2) : 0)}l3.5-3.5`}
                    ></path>
                );
                blueElement = (props) => (
                    <path
                        stroke={this.blueColor}
                        strokeLinecap="round"
                        strokeWidth="1.2"
                        d={`M${196.75 + 5 * props.col + 2 * (props.col >= 2 ? Math.floor(props.col / 2) : 0)} ${68.25 + 5 * props.row + 2 * (props.row >= 2 ? Math.floor(props.row / 2) : 0)}l3.5-3.5`}
                    ></path>
                );

                redBlinkElement = (props) => (
                    <path
                        stroke={this.redColor}
                        strokeLinecap="round"
                        strokeWidth="1.2"
                        d={`M${196.75 + 5 * props.col + 2 * (props.col >= 2 ? Math.floor(props.col / 2) : 0)} ${68.25 + 5 * props.row + 2 * (props.row >= 2 ? Math.floor(props.row / 2) : 0)}l3.5-3.5`}
                        {...{ ...props }}
                        className={(props.classNames || '') + this.alternatingStyle}
                    ></path>
                );
                blueBlinkElement = (props) => (
                    <path
                        stroke={this.blueColor}
                        strokeLinecap="round"
                        strokeWidth="1.2"
                        d={`M${196.75 + 5 * props.col + 2 * (props.col >= 2 ? Math.floor(props.col / 2) : 0)} ${68.25 + 5 * props.row + 2 * (props.row >= 2 ? Math.floor(props.row / 2) : 0)}l3.5-3.5`}
                        {...{ ...props }}
                        className={(props.classNames || '') + this.alternatingStyle}
                    ></path>
                );

                startingCol = 3;
                break;

            default:
                break;
        }

        let a = 0;

        switch (roadmapType) {
            case 'big-eye-road':
            case 'small-road':
            case 'cockroach-road':
                this.currentRow = 1;
                this.currentCol = startingCol; //1 //for big-eye-road

                for (a = 0; a < 9; a++) this.roadmapDisplay![a] = nullArray(9);

                // console.log("rT", this.roadmapTypes);

                //Evaluate the same column, first column
                if (this.roadmapTypes![1][this.currentCol]) {
                    for (a = 1; a < this.roadmapTypes!.length; a++) {
                        if (!this.roadmapTypes![a][this.currentCol]) break;

                        //Evaluate the same column
                        //startingCol = 1 for big-eye-road
                        if (
                            this.roadmapTypes![a][this.currentCol - startingCol] ===
                            this.roadmapTypes![a - 1][this.currentCol - startingCol]
                        )
                            // @ts-ignore
                            this.addDisplayTile(redElement, 'red');
                        // @ts-ignore
                        else this.addDisplayTile(blueElement, 'blue');
                    }
                }

                this.currentRow = 0;
                this.currentCol++;

                for (; this.currentCol < this.roadmapTypes![0].length; ) {
                    //Evaluate the next column
                    if (this.roadmapTypes![0][this.currentCol]) {
                        //Count filled cells
                        let lengthLeft = 0,
                            lengthRight = 0;

                        //startingCol = 1 for big-eye-road
                        for (a = 0; a < this.roadmapTypes!.length; a++) {
                            if (this.roadmapTypes![a][this.currentCol - startingCol - 1])
                                lengthLeft++;
                            if (this.roadmapTypes![a][this.currentCol - 1]) lengthRight++;
                        }

                        // console.log("left:" + lengthLeft, "right:" + lengthRight);
                        //Compare column lengths
                        if (lengthLeft === lengthRight)
                            // @ts-ignore
                            this.addDisplayTile(redElement, 'red');
                        // @ts-ignore
                        else this.addDisplayTile(blueElement, 'blue');
                    }

                    this.currentRow++;

                    //Checks empty cell of the next row
                    if (this.roadmapTypes![this.currentRow][this.currentCol])
                        for (; this.currentRow < this.roadmapTypes!.length; this.currentRow++) {
                            //Evaluate the same column

                            //Checks empty cell
                            if (this.roadmapTypes![this.currentRow][this.currentCol]) {
                                //Checks adjacent cells
                                if (
                                    this.roadmapTypes![this.currentRow][
                                        this.currentCol - startingCol
                                    ] === //1
                                    this.roadmapTypes![this.currentRow - 1][
                                        this.currentCol - startingCol
                                    ]
                                )
                                    // @ts-ignore
                                    this.addDisplayTile(redElement, 'red');
                                // @ts-ignore
                                else this.addDisplayTile(blueElement, 'blue');
                            } else break;
                        }

                    this.currentRow = 0;
                    this.currentCol++;
                }

                // console.log("cR cC", this.currentDisplayRow, this.currentDisplayCol);
                if (
                    this.props.historyBlink &&
                    this.simpleBigRoad![this.simpleBigRoad!.length - 1] !== 'T'
                )
                    if (this.currentType === 'red')
                        this.roadmapDisplay![this.currentDisplayRow!][
                            this.currentDisplayCol!
                            // @ts-ignore
                        ] = redBlinkElement;
                    else
                        this.roadmapDisplay![this.currentDisplayRow!][
                            this.currentDisplayCol!
                            // @ts-ignore
                        ] = blueBlinkElement;
                break;

            case 'predictions':
                this.processRenderPredictions();

                break;

            default:
                break;
        }

        // Fills the roadmap with active data
        return this.renderV3();
    }
}
