import React, { Fragment } from "react";
import { OptionalJSXElement, RoadmapDirections, addBigRoadDisplay, addDisplayTile, addDisplayTileLegacy, prepareV3Render, pushRoadmapType, pushTieDisplay, renderPredictions, renderV3, resetAnalysisPointer, resetDisplayPointer, resetTieCount } from "./BaccaratRoadmaps";
import { GameHelper } from "../../../../../common/utils/GameHelper";

export interface ResultHaveResultString {
	result: string
}

interface IStringDictionary {
	[key: string]: string;
}

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
	full: string;
	isLandscape?: boolean;
	onClick: () => void
	lobbyMobile?: boolean;
	showGroup?: boolean;
	small?: boolean;
	mobile?: boolean;
	showLobbyGameGroup?: boolean;
}


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
	redColor = "#F10149";
	blueColor = "#D3942A";
	greenColor = "#01C995";
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
		const basePcode = GameHelper.getBasePcode();

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
		const basePcode = GameHelper.getBasePcode();

		if (this.bigRoadSequence!.length && Math.ceil(this.bigRoadSequence![this.bigRoadSequence!.length - 1][1])+1 >= 24){

			this.firstDisplayedCol = Math.ceil(this.bigRoadSequence![this.bigRoadSequence!.length - 1][1]) - 24;
		}

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
														stroke={this.greenColor!}
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
												basePcode === "m22"|| GameHelper.pcode === "m23b" || basePcode === "m38" ?
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