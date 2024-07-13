import React, { Fragment } from "react";

// Clone of Baccarat Roadmap

import {
	addBigRoadDisplay,
	addDisplayTileLegacy,
	pushRoadmapType,
	pushTieDisplay,
	checkLastIdx,
	renderV3,
	resetAnalysisPointer,
	resetDisplayPointer,
	resetTieCount,
	prepareV3Render,
	addDisplayTile,
	// NewSimpleBigRoadTileData,
	OptionalJSXElement,
	renderPredictions,
} from "./BaccaratRoadmaps";



interface IStringDictionary {
	[key: string]: string;
}


// import { PasarCode } from "./PasarCode";

// import CardTooltip from "src/components/RoadmapCardTooltip";

function nary(N: number) {

	return (!isNaN(N)) ?
		[...new Array(N + 1).keys()].slice(1) :
		[];
}

export function nullArray(length: number): null[] {
	if (!length || isNaN(length) || length < 1)
		throw new Error('length has to be a number');

	return [...Array(+length)].map((_) => null);
}


export interface DragonTigerWinType {
	dragon: string;
	tiger: string;
}



export interface IKeyNumberDict {
	[key: string]: number;
}

const specialCardLetters: IKeyNumberDict = {
	A: 1,
	T: 10,
	J: 11,
	Q: 12,
	K: 13
};

// export interface M23GameClass;
// class M23GameClass implements React.PureComponent<IProps> {}

function getDragonVal(win: DragonTigerWinType): number {
	if (!win || !win.dragon)
		return -1;

	const letter = win.dragon[0];

	return letter in specialCardLetters
		? specialCardLetters[letter]
		: isNaN(+letter)
			? 0 : Number(letter);
}

function getTigerVal(win: DragonTigerWinType): number {
	if (!win || !win.tiger)
		return -1;

	const letter = win.tiger[0];

	return letter in specialCardLetters
		? specialCardLetters[letter]
		: isNaN(+letter)
			? 0 : Number(letter);
}



const basePcode: string = "m23";

const redColor = "#F10149";
const blueColor = "#D3942A";
const greenColor = "#01C995";

export interface Props {
	/** mutable references */
	/** Usually game[pcode].roadmap.big_road, taken from fetchGameHistory() */
	history: any;
	/** roadmap element blink */
	historyBlink: boolean;

	/** desktop single */
	enlarged?: boolean;

	/** only for mobile game */
	expanded?: boolean;
	langdata?: IStringDictionary;
	darkMode?: boolean;

	/** set only once during runtime */
	type: string;
	pcode: string;
	full: string;
	isLandscape?: boolean;
	onClick: () => void
	lobbyMobile?: boolean;
	showGroup?: boolean;
	small?: boolean;
	mobile?: boolean;
	showLobbyGameGroup?: boolean;
}


export enum RoadmapDirections {
	Down,
	Right
}

export class BaseV2Roadmap extends React.Component<Props> {
	totalColumns: number | undefined;

	alternatingStyle: string | null = "sl-roadmap-alternating";
	firstDisplayedCol: number | undefined;
	firstRoadmapDisplayedCol: number | undefined;

	currentRow: number | undefined;
	currentCol: number | undefined;
	currentType: string | null = null;
	currentType1: string | undefined;
	currentDisplayRow: number | undefined;
	currentDisplayCol: number | undefined;
	lastDisplayCol: number | undefined;
	currentDirection: RoadmapDirections | undefined;

	tieCount: number | undefined;

	simpleBigRoad: string[] | undefined;
	simpleBigRoadPairs: string[] | undefined;
	bigRoadSequence: number[][] | undefined;
	roadmapTypes: (string | null)[][] | undefined;

	roadmapDisplay: Array<Array<OptionalJSXElement>> | undefined;
	roadmapPairsDisplay: Array<Array<Array<OptionalJSXElement> | null>> | undefined;
	roadmapTiesDisplay: Array<Array<OptionalJSXElement>> | undefined;

	shouldComponentUpdate(nextProps: Readonly<Props>) {
		const [current, next] = [this.props, nextProps];

		if (current.history !== next.history ||
			current.history.length !== next.history.length ||
			current.historyBlink !== next.historyBlink ||
			current.enlarged !== next.enlarged ||
			current.expanded !== next.expanded ||
			current.full !== next.full ||
			current.darkMode !== next.darkMode ||
			current.langdata !== next.langdata)
			return true;

		return false;
	}


	addTieDisplay = pushTieDisplay;
	pushTieDisplay = pushTieDisplay;
	addBigRoadDisplay = addBigRoadDisplay;

	resetDisplayPointer = resetDisplayPointer;
	resetAnalysisPointer = resetAnalysisPointer;
	resetTieCount = resetTieCount;

	addRoadmapType = pushRoadmapType;
	pushRoadmapType = pushRoadmapType;

	prepareV3Render = prepareV3Render;
	addDisplayTile = addDisplayTile;
	addDisplayTileLegacy = addDisplayTileLegacy;
	renderV3 = renderV3;
	renderPredictions = renderPredictions;


	backTextFragment() {
		// const { type } = this.props;

		return (null);
	}

	beadRoadFragment() {
		// @ts-ignore
		const roadmapColumns = nary(this.totalColumns + 2);

		return (
			nary(8).map((row, rowIdx) =>
				<Fragment key={`${row}-${rowIdx}`}>
					{
						roadmapColumns.map((col, colIdx) =>
						(
							<Fragment key={`${row}-${rowIdx}-${col}-${colIdx}`}>
								{
									// @ts-ignore
									this.roadmapDisplay[rowIdx][colIdx + this.firstDisplayedCol] !== undefined
										// @ts-ignore	
										? this.roadmapDisplay[rowIdx][colIdx + this.firstDisplayedCol]
										: null
								}

								{
									this.props.expanded || this.props.small || basePcode === "m34" ?
										null
										: null

								}
							</Fragment>
						)
						)
					}
				</Fragment>
			)
		);
	}

	bigRoadFragment() {
		// @ts-ignore
		const roadmapColumns = nary(this.totalColumns + 2);
		const maxRow = 5;

		return nary(maxRow).map((row) => {
			return (
				<Fragment key={self.crypto.randomUUID()}>
					{
						roadmapColumns.map((col) => {
							const idKey = self.crypto.randomUUID()
							return (
								<Fragment key={idKey}>
									{
										// @ts-ignore
										this.roadmapDisplay[row - 1]
										// @ts-ignore
										[col - 1 + this.firstRoadmapDisplayedCol] ?

											[
												// Base Circle Element
												// @ts-ignore
												this.roadmapDisplay[row - 1]
												// @ts-ignore

												[col - 1 + this.firstRoadmapDisplayedCol] ?
													<>
														<rect
															width="9"
															height="9"
															// @ts-ignore

															x={4.5 + (12 * (col - 1))}
															y={4.5 + 12 * (row - 1)}
															// @ts-ignore
															stroke={this.roadmapDisplay[row - 1][col - 1 + this.firstRoadmapDisplayedCol].color}

															// @ts-ignore
															className={this.roadmapDisplay[row - 1][col - 1 + this.firstRoadmapDisplayedCol].blink}

															strokeWidth="1.2"
															rx="4.5"
														></rect>


													</>
													: null,

												// Ties
												// @ts-ignore

												this.roadmapTiesDisplay[row - 1][col - 1 + this.firstRoadmapDisplayedCol] ? <>
													<path
														id={`${idKey}`}
														// @ts-ignore
														className={this.roadmapDisplay[row - 1][col - 1 + this.firstRoadmapDisplayedCol].blink}
														stroke={greenColor}
														strokeLinecap="round"
														// @ts-ignore
														d={`M${7 + (12 * (col - 1))} ${11 + (12 * (row - 1))}l4-4`}
													></path>
													<text
														fill={this.props.darkMode ? "#fff" : "#000"}
														fontFamily="Manrope"
														// @ts-ignore
														className={this.roadmapDisplay[row - 1][col - 1 + this.firstRoadmapDisplayedCol].blink}
														fontSize="5"
														style={{ textAlign: "center" }}
														transform="translate(.5 -1.5)"
													>
														{/* @ts-ignore */}
														<textPath href={`#${idKey}`}>{this.roadmapTiesDisplay[row - 1][col - 1 + this.firstRoadmapDisplayedCol].num}</textPath>
													</text>
												</>
													: null,

												// Pairs
												// @ts-ignore
												basePcode === "m22" || basePcode === "m38" ?
													// @ts-ignore
													this.roadmapPairsDisplay[row - 1]
													// @ts-ignore
													[col - 1 + this.firstRoadmapDisplayedCol] : null
											]
											: null
									}
								</Fragment>
							)
						})
					}
				</Fragment>
			)
		});


	}

	bigRoadDerivativesFragment() {
		// @ts-ignore
		const roadmapColumns = nary(this.totalColumns + 2);
		const maxRow = 5;
		// const maxIdxRow = maxRow - 1;
		return nary(maxRow + 1).map((row, rowIdx) =>
			<Fragment key={`brd_${row}-${rowIdx}`}>
				{
					roadmapColumns.map((col, colIdx) => {
						// @ts-ignore
						const Element = this.roadmapDisplay
						[row - 1]
						// @ts-ignore
						[col - 1 + this.firstDisplayedCol]
							// @ts-ignore
							? this.roadmapDisplay
							[row - 1]
							// @ts-ignore
							[col - 1 + this.firstDisplayedCol]
							: null
						return (
							<Fragment key={`brd_${row}-${rowIdx}-${col}-${colIdx}`}>
								{
									// @ts-ignore
									Element && Element({ row: rowIdx, col: colIdx })
								}
							</Fragment>
						);
					}
					)
				}
			</Fragment>
		);
	}
}

export default class M23 extends BaseV2Roadmap {
	dragonPrediction: ((props: any) => JSX.Element)[] | [] = [];
	tigerPrediction: ((props: any) => JSX.Element)[] | []= [];


	render(): any {


		this.prepareV3Render();

		//Obligatory counters
		this.currentRow = 0;
		this.currentCol = -1;
		this.currentType = "";

		const { history } = this.props;
		if (!history) return null;

		// Formats history to desired roadmap
		switch (this.props.type) {
			case "bead-road":
				this.currentRow = -1;
				this.currentCol = 0;

				if (Math.ceil(history.length / 8) >= 24!)
					this.firstDisplayedCol = Math.ceil(history.length / 8) - 24!;

				// console.log("m23 hist", history);

				history.forEach((item: any, idx: number) => {
					let ele = null;
					const alternatingStyleClass = checkLastIdx(history, idx)
						? this.alternatingStyle
						: '';
					const dragonVal = getDragonVal(item);
					const tigerVal = getTigerVal(item);
					dragonVal;
					tigerVal;
					if (this.currentRow! >= 8) {
						this.currentRow = 0;
						this.currentCol! += 1;
					} else
						this.currentRow! += 1;

					if (item.win === "tiger") {
						ele = (<>
							<rect
								className={alternatingStyleClass || ""}

								x={4.5 + (12 * this.currentCol!)} y={4.5 + (12 * this.currentRow!)} width="9" height="9" rx="4.5" fill={blueColor} />
							<text
								className={alternatingStyleClass || ""}

								x={(4.5 + 9) / 2 + (12 * this.currentCol!)} y={((4.5) + 9) - 2 + (12 * this.currentRow!)}
								style={{ fontFamily: "Manrope", fontWeight: "bold", fontSize: 7 }}
								fill="white">T</text>
						</>
						);
					} else if (item.win === "dragon") {
						ele = (<>
							<rect
								className={alternatingStyleClass || ""}

								x={4.5 + (12 * this.currentCol!)} y={4.5 + (12 * this.currentRow!)} width="9" height="9" rx="4.5" fill={redColor} />
							<text
								className={alternatingStyleClass || ""}

								x={(4.5 + 9) / 2 + (12 * this.currentCol!)} y={((4.5) + 9) - 2 + (12 * this.currentRow!)}
								style={{ fontFamily: "Manrope", fontWeight: "bold", fontSize: 7 }}
								fill="white">D</text>
						</>);
					} else { //tie
						ele = (<>
							<rect
								className={alternatingStyleClass || ""}

								x={4.5 + (12 * this.currentCol!)} y={4.5 + (12 * this.currentRow!)} width="9" height="9" rx="4.5" fill={greenColor} />
							<text
								className={alternatingStyleClass || ""}

								x={(4.5 + 9) / 2 + (12 * this.currentCol!)} y={((4.5) + 9) - 2 + (12 * this.currentRow!)}
								style={{ fontFamily: "Manrope", fontWeight: "bold", fontSize: 7 }}
								fill="white">T</text>
						</>);
					}

					this.roadmapDisplay![this.currentRow!][this.currentCol!] = ele;
				});
				break;

			case "big-road":
			case "big-eye-road":
			case "small-road":
			case "cockroach-road":
			case "predictions":
				this.resetDisplayPointer();
				this.resetAnalysisPointer();

				// console.log("sBR", this.simpleBigRoad);

				//Actual data
				this.simpleBigRoad!
					.forEach((item, idx) => {
						if (item === "t")
							this.pushTieDisplay(this.roadmapTiesDisplay!);
						else {
							const data = {
								ele: item === "D" ?
									<div key={"sBR" + idx}
										className={"sl-roadmap-circle-hollow sl-roadmap-red " + (checkLastIdx(this.simpleBigRoad!, idx) ? this.alternatingStyle : 0)} /> :
									item === "T" ?
										<div key={"sBR" + idx}
											className={"sl-roadmap-circle-hollow sl-roadmap-blue " + (checkLastIdx(this.simpleBigRoad!, idx) ? this.alternatingStyle : 0)} /> :
										null,

								color: item === "D" ? redColor :
									item === "T" ? blueColor :
										null,
								blink: (checkLastIdx(this.simpleBigRoad!, idx) ? this.alternatingStyle : "")
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

			default: break;
		}

		//Resets counter for 2nd filter
		// this.currentRow = 0;
		// this.currentCol = 0;

		let startingCol: number,
			startingRow: number;

		let redElement: (props: any) => JSX.Element,
			blueElement: (props: any) => JSX.Element,
			redBlinkElement: (props: any) => JSX.Element,
			blueBlinkElement: (props: any) => JSX.Element;

		switch (this.props.type) {
			case "big-eye-road":
				redElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={redColor} {...{ ...props }} ></circle>;
				blueElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={blueColor}  {...{ ...props }}></circle>;

				redBlinkElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={redColor} {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle} ></circle>;
				blueBlinkElement = (props) => <circle cx={6 + (6 * props.col)} cy={66 + (6 * props.row)} r="2" stroke={blueColor}  {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle} ></circle>;
				startingCol = 1;
				break;
			case "small-road":
				redElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={redColor}  {...{ ...props }} ></circle>;
				blueElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={blueColor}  {...{ ...props }} ></circle>;

				redBlinkElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={redColor}  {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle}  ></circle>;
				blueBlinkElement = (props) => <circle cx={102 + (6 * props.col)} cy={66 + (6 * props.row)} r="2.5" fill={blueColor}  {...{ ...props }} className={(props.classNames || "") + this.alternatingStyle} ></circle>;
				startingCol = 2;
				break;
			case "cockroach-road":
				redElement = (props) => <path
					stroke={redColor}
					strokeLinecap="round"
					strokeWidth="1.2"
					d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
				></path>;
				blueElement = (props) => <path
					stroke={blueColor}
					strokeLinecap="round"
					strokeWidth="1.2"
					d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
				></path>;

				redBlinkElement = (props) => <path
					stroke={redColor}
					strokeLinecap="round"
					strokeWidth="1.2"
					d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
					{...{ ...props }} className={(props.classNames || "") + this.alternatingStyle}
				></path>;
				blueBlinkElement = (props) => <path
					stroke={blueColor}
					strokeLinecap="round"
					strokeWidth="1.2"
					d={`M${196.75 + (5 * props.col) + (2 * ((props.col >= 2 ? Math.floor(props.col / 2) : 0)))} ${68.25 + (5 * props.row) + (2 * ((props.row >= 2 ? Math.floor(props.row / 2) : 0)))}l3.5-3.5`}
					{...{ ...props }} className={(props.classNames || "") + this.alternatingStyle}
				></path>;

				startingCol = 3;
				break;
			default: break;
		}

		let a = 0;

		let lengthLeft = 0, lengthRight = 0;

		switch (this.props.type) {
			case "big-eye-road":
			case "small-road":
			case "cockroach-road":
				this.currentRow = 1;
				this.currentCol = startingCol!; //1 //for big-eye-road


				for (a = 0; a < 9; a++)
					this.roadmapDisplay![a] = "123456789".split("").map(
						item => item ? null : null
					);

				//Evaluate the same column, first column
				if (this.roadmapTypes![1][this.currentCol]) {
					for (a = 1; a < this.roadmapTypes!.length; a++) {
						if (!this.roadmapTypes![a][this.currentCol])
							break;

						//Evaluate the same column
						//startingCol = 1 for big-eye-road
						if (this.roadmapTypes![a][this.currentCol - startingCol!] ===
							this.roadmapTypes![a - 1][this.currentCol - startingCol!])
							// @ts-ignore
							this.addDisplayTileLegacy(this.roadmapDisplay!, redElement!, "red");
						// @ts-ignore
						else this.addDisplayTileLegacy(this.roadmapDisplay!, blueElement!, "blue");
					}
				}

				this.currentRow = 0;
				this.currentCol++;

				for (; this.currentCol < this.roadmapTypes![0].length;) {
					//Evaluate the next column
					if (this.roadmapTypes![0][this.currentCol]) {
						//Count filled cells
						lengthLeft = 0; lengthRight = 0;

						//startingCol = 1 for big-eye-road
						for (a = 0; a < this.roadmapTypes!.length; a++) {
							if (this.roadmapTypes![a][this.currentCol - startingCol! - 1])
								lengthLeft++;
							if (this.roadmapTypes![a][this.currentCol - 1])
								lengthRight++;
						}

						// console.log("left:" + lengthLeft, "right:" + lengthRight);
						//Compare column lengths
						if (lengthLeft === lengthRight)
							// @ts-ignore
							this.addDisplayTileLegacy(this.roadmapDisplay!, redElement!, "red");
						// @ts-ignore
						else this.addDisplayTileLegacy(this.roadmapDisplay!, blueElement!, "blue");
					}

					this.currentRow++;

					//Checks empty cell of the next row
					if (this.roadmapTypes![this.currentRow][this.currentCol])
						for (; this.currentRow < this.roadmapTypes!.length; this.currentRow++) {
							//Evaluate the same column

							//Checks empty cell
							if (this.roadmapTypes![this.currentRow][this.currentCol]) {
								//Checks adjacent cells
								if (this.roadmapTypes![this.currentRow][this.currentCol - startingCol!] === //1
									this.roadmapTypes![this.currentRow - 1][this.currentCol - startingCol!])
									// @ts-ignore
									this.addDisplayTileLegacy(this.roadmapDisplay!, redElement!, "red");
								// @ts-ignore 
								else this.addDisplayTileLegacy(this.roadmapDisplay!, blueElement!, "blue");
							} else break;
						}

					this.currentRow = 0;
					this.currentCol++;
				}

				// console.log("cR cC", this.currentDisplayRow, this.currentDisplayCol);
				if (this.props.historyBlink &&
					this.simpleBigRoad![this.simpleBigRoad!.length - 1] !== "t")
					if (this.currentType === "red")
						// @ts-ignore 
						this.roadmapDisplay![this.currentDisplayRow!][this.currentDisplayCol!] = redBlinkElement!;
					// @ts-ignore 
					else this.roadmapDisplay![this.currentDisplayRow!][this.currentDisplayCol!] = blueBlinkElement!;
				break;


			case "predictions":
				this.dragonPrediction = [];
				this.tigerPrediction = [];
				const redElements = [
					(props: any) => <circle {...{ ...props }} r="2.70455" stroke="#F10149" stroke-width="0.954546" />,
					(props: any) => <circle {...{ ...props }} r="3.18182" fill="#F10149" />,
					(props: any) => <path {...{ ...props }} stroke="#F10149" stroke-width="0.954546" />
				];
				const blueElements = [
					(props: any) => <circle {...{ ...props }} r="2.705" stroke="#D3942A" strokeWidth="0.955" ></circle>,
					(props: any) => <circle {...{ ...props }} r="3.182" fill="#D3942A"></circle>,
					(props: any) => <path {...{ ...props }} stroke="#D3942A" strokeWidth="0.955" ></path>
				];
				//@ts-ignore
				//  blueElements[0].stroke = "#000";
				startingCol = 0;
				startingRow = 0;

				// console.log("rT", this.roadmapTypes);

				const lastBigRoadSequence = this.bigRoadSequence![this.bigRoadSequence!.length - 1];
				if (lastBigRoadSequence === undefined)
					break;

				startingRow = this.bigRoadSequence![this.bigRoadSequence!.length - 1][0];
				startingCol = this.bigRoadSequence![this.bigRoadSequence!.length - 1][1];

				this.currentType = this.roadmapTypes![startingRow][startingCol];

				const currentPlayer =
					this.currentType === "T" ? "tiger" :
						this.currentType === "D" ? "dragon" : "tie";


				// console.log("bRS", this.bigRoadSequence);

				//Use this.currentRow only for predictions on the same column (the same currentPlayer)
				for (a = 0; a < this.roadmapTypes!.length; a++)
					if (this.roadmapTypes![a][this.currentCol])
						startingRow = a;
					else break;

				this.currentRow = startingRow;
				this.currentCol = startingCol;
				// console.log({this.currentCol: this.currentCol, this.currentRow: this.currentRow, this.currentType: this.currentType, currentPlayer: currentPlayer});


				//Banker and player are disabled for now

				//Evaluate banker
				if (currentPlayer === "tiger") {
					this.currentRow += 1;

					for (a = 0; a < 3; a++) {
						if (this.currentCol - a - 1 < 0)
							this.tigerPrediction[a] = redElements[a];
						else if (this.roadmapTypes![this.currentRow][this.currentCol - a - 1] ===
							this.roadmapTypes![this.currentRow - 1][this.currentCol - a - 1])
							this.tigerPrediction[a] = redElements[a];
						else this.tigerPrediction[a] = blueElements[a];
					}
				} else {
					//evaluate different column

					this.currentRow = 0;
					this.currentCol += 1;

					for (let col = 0; col < 3; col++) {
						if (this.currentCol - col - 2 < 0) {
							this.tigerPrediction[col] = redElements[col];
							continue;
						}

						lengthLeft = 0;
						lengthRight = 0;
						for (a = 0; a < this.roadmapTypes!.length; a++) {
							if (this.roadmapTypes![a][this.currentCol - col - 2])
								lengthLeft++;
							if (this.roadmapTypes![a][this.currentCol - 1])
								lengthRight++;
						}

						this.tigerPrediction[col] = (lengthLeft === lengthRight) ?
							redElements[col] :
							blueElements[col];
					}
				}

				this.currentRow = startingRow;
				this.currentCol = startingCol;

				//Evaluate player
				if (currentPlayer === "dragon") {
					this.currentRow += 1;

					for (a = 0; a < 3; a++) {
						if (this.currentCol - a - 1 < 0)
							this.dragonPrediction[a] = blueElements[a];
						else if (this.roadmapTypes![this.currentRow][this.currentCol - a - 1] ===
							this.roadmapTypes![this.currentRow - 1][this.currentCol - a - 1])
							this.dragonPrediction[a] = redElements[a];
						else this.dragonPrediction[a] = blueElements[a];
					}
				} else {
					//evaluate different column

					this.currentRow = 0;
					this.currentCol += 1;

					lengthLeft = 0;
					lengthRight = 0;
					try {
						for (let col = 0; col < 3; col++) {
							if (this.currentCol - col - 2 < 0) {
								this.dragonPrediction[col] = blueElements[col];
								continue;
							}

							lengthLeft = 0;
							lengthRight = 0;
							for (a = 0; a < this.roadmapTypes!.length; a++) {
								if (this.roadmapTypes![a][this.currentCol - col - 2])
									lengthLeft++;
								if (this.roadmapTypes![a][this.currentCol - 1])
									lengthRight++;
							}

							this.dragonPrediction[col] = (lengthLeft === lengthRight) ?
								redElements[col] :
								blueElements[col];
						}
					} catch (error) {
						console.log(error);
					}

				}


				break;
			default: break;
		}

		return this.renderV3();
	}
}
