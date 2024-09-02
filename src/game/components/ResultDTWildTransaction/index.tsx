import { useEffect, useRef, useState } from 'react';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { PcodeDragonTigerWild, Transaction } from '../../../types';
import { Label } from '../External/components/base/label';
import { RenderCardV2 } from '../External/prefabs/covercards/rcard-v2';

import styles from './styles.module.scss';
import { StringUtility } from '../External/managers/StringUtility';
import dragonornamen from './base/dragonornamen';
import tigerornamen from './base/tigerornamen';

interface IProps {
    data: Transaction<PcodeDragonTigerWild>;
}


function getValueOfLeterCard(letter: string) {
    if (letter == "A")
        return 1;
    if (letter == "T")
        return 10;
    if (letter == "J")
        return 11;
    if (letter == "Q")
        return 12;
    if (letter == "K")
        return 13;
}

const ResultDTWildTransaction = ({ data }: IProps) => {
    const { detail_result } = data;

    if (!detail_result || Array.isArray(detail_result)) {
        return null;
    }
    const trans = data;
    // @ts-ignore
    const winner = trans.detail_result.result;
    // @ts-ignore
    const slotCardDragon = trans.detail_result.dragon;
    // @ts-ignore
    const slotCardTiger = trans.detail_result.tiger;
    // @ts-ignore
    const slotCardWild = trans.detail_result.wild;

    // const open = openIdx+
    // let borderRadiusStr = "0px";
    // if (index == 0) {
    //     borderRadiusStr = "8px 8px 0px 0px";
    //     if (isBottom) {
    //         borderRadiusStr = "8px";
    //     }
    // } else {
    //     if (isBottom) borderRadiusStr = "0px 0px 8px 8px";
    // }



    const cardContainer = useRef<HTMLDivElement>(null);
    const cardContainer2 = useRef<HTMLDivElement>(null);
    const [, setDimensions] = useState({ width: 0, height: 0 });
    const [_, setDimensions2] = useState({ width: 0, height: 0 });

    const updateDimensions = () => {
        if (cardContainer.current) {
            const { width, height } = cardContainer.current.getBoundingClientRect();
            const updateWidth: number = height * (3 / 4);
            setDimensions({ width: updateWidth, height });
            console.log("Card Container: " + width + ", " + height);
        }
    };

    const updateDimensions2 = () => {
        if (cardContainer2.current) {
            const { width, height } = cardContainer2.current.getBoundingClientRect();
            const updateWidth: number = height * (3 / 4);
            setDimensions2({ width: updateWidth, height });
            console.log("Card Container: " + width + ", " + height);
        }
    };

    useEffect(() => {
        updateDimensions();
        updateDimensions2();
        window.addEventListener("resize", updateDimensions2);
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions2);
            window.removeEventListener("resize", updateDimensions);
        };
    }, []);

    const [arrayOfB, setArrayOfB] = useState([""]);
    const [arrayOfP, setArrayOfP] = useState([""]);
    useEffect(() => {
        console.log("card insert");
        setArrayOfB(StringUtility.formatStringToArray(slotCardTiger));
        setArrayOfP(StringUtility.formatStringToArray(slotCardDragon));
    }, [slotCardTiger, slotCardDragon]);

    useEffect(() => {
        //
    }, [arrayOfP, arrayOfB]);

    return (
        <div className={styles.result}>
            {/* <SVGResult24D value={Number(detail_result.angka)} /> */}


            <div
                className="detail-history"
                style={{
                    display: "flex",
                    width: "100%",
                    boxSizing: "border-box",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "3px",
                    padding: "12px 0px",
                }}
            >

                <div
                    className="player-board-history"
                    style={{
                        flex: "1",
                        display: "flex",
                        height: "64px",
                        padding: "12px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "4px 2px 2px 4px",
                        border:
                            winner == "dragon"
                                ? "0.6px solid #F30049"
                                : "0.6px solid #4C4D66",
                        background:
                            winner == "dragon"
                                ? "linear-gradient(0deg, #F30049 -39.84%, rgba(1, 137, 222, 0.00) 100%)"
                                : "linear-gradient(180deg, #42445F 0%, #2F3046 100%)",
                        position: "relative",
                    }}
                >
                    <div
                        className="player-info-board-history"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "5px",
                            position: "absolute",
                            left: "7px",
                            top: "7px",
                            width: "80%"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "2px",
                                alignItems: "center",
                            }}
                        >
                            <Label
                                value="DRAGON"
                                style={{
                                    color: "#FFF",
                                    textAlign: "center",
                                    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                    fontFamily: "Manrope",
                                    fontSize: "1.1rem",
                                    fontStyle: "normal",
                                    fontWeight: "800",
                                    lineHeight: "normal",
                                    letterSpacing: "0.11px",
                                    textTransform: "uppercase",
                                    padding: "0px",
                                    margin: "0px",
                                }}
                            />
                            <div
                                className="badge-win"
                                style={{
                                    display: winner == "dragon" ? "flex" : "none",
                                    padding: "0px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 2,
                                    position: "absolute",
                                    right: 0
                                }}
                            >
                                <Label
                                    value="WIN"
                                    style={{
                                        color: "#FFF",
                                        textAlign: "center",
                                        textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                        fontFamily: "Manrope",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: "800",
                                        lineHeight: "normal",
                                        letterSpacing: "0.11px",
                                        textTransform: "uppercase",
                                        padding: "0px",
                                        margin: "0px",
                                        borderRadius: "3px",
                                        border: "0.4px solid #51FF15",
                                        background:
                                            "linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)",
                                        boxShadow: "-2px 4px 6px 0px rgba(0, 0, 0, 0.20)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                />
                            </div>
                        </div>
                        {/* @ts-ignore */}
                        <Label value={`${Number(isNaN(Number(data.detail_result.dragon[0])) ? getValueOfLeterCard(data.detail_result.dragon[0]) : data.detail_result.dragon[0])}`}
                            style={{
                                color: "#FFF",
                                textAlign: "center",
                                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                fontFamily: "Manrope",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                letterSpacing: "0.11px",
                                textTransform: "uppercase",
                                padding: "0px",
                                margin: "0px",
                            }}
                        />
                    </div>

                    {dragonornamen()}
                    <div
                        ref={cardContainer}
                        className="player-cards-board-history"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "3px",
                            position: "absolute",
                            right: "10px",
                            bottom: "5px",
                            height: "46%",
                            // ...(devideOrientation == "landscape"?({transform: "scale(0.5) translateY(-2rem)"}):{})
                        }}
                    >

                        <div
                            className="card-container-item"
                            style={{
                                height: "100%",
                                width: `2rem`,
                                background: "rgba(255, 255, 255, 0)",
                                marginRight: "1.5rem",
                                marginTop: "-0.5rem",
                                ...(DisplayHelper.getOrientation() == "landscape" ? ({ transform: "" }) : {
                                    transform: "scale(1.25)",

                                })

                            }}
                        >
                            <RenderCardV2 value={slotCardDragon} visible={true} submit={true} />
                        </div>
                    </div>
                </div>
                <div
                    className="mid-board-history"
                    style={{
                        flex: "1",
                        display: "flex",
                        alignSelf: "stretch",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "stretch",
                        borderRadius: "4px 2px 2px 4px",
                        position: "relative",
                        height: "64px",
                        minWidth: "calc(100%/3)"
                    }}
                >
          
                    <span>
                    {/* @ts-ignore */}
                        <div className={[styles.triangle_border_1, (data.detail_result.wild[0] == data.detail_result.dragon[0] && data.detail_result.wild[0]  == data.detail_result.tiger[0] ?styles.win:"")].join(" ")}></div>
                    {/* @ts-ignore */}
                    <div className={[styles.triangle_1,  (data.detail_result.wild[0] == data.detail_result.dragon[0] && data.detail_result.wild[0]  == data.detail_result.tiger[0] ?styles.win:"")].join(" ")}>
                            <span
                                style={{
                                    wordSpacing: "2rem",
                                    paddingLeft: "0.5rem",
                                    paddingTop: "0.25rem",
                                    width: "5rem",
                                    display: "flex"
                                }}
                            >SUPER WILD</span>
                        </div>
                    </span>

                    <span>
                    {/* @ts-ignore */}
                        <div className={[styles.triangle_border, (data.detail_result.dragon[0] == data.detail_result.tiger[0] ?styles.win:"")].join(" ")}>
                        </div>
                    {/* @ts-ignore */}
                        <div className={[styles.triangle, (data.detail_result.dragon[0] == data.detail_result.tiger[0] ?styles.win:"")].join(" ")}>
                            <span
                                style={{
                                    float: "right",
                                    wordSpacing: "2rem",
                                    paddingLeft: "2.5rem",
                                    paddingTop: "3.25rem",
                                    width: "5rem",
                                    display: "flex"
                                }}
                            >TIE</span>
                        </div>
                    </span>
                    <div
                        className="badge-win"
                        style={{
                            display:
                            // @ts-ignore
                                (data.detail_result.wild[0] == data.detail_result.tiger[0] && data.detail_result.wild[0] == data.detail_result.dragon[0]) ?
                                    "flex"
                                    : "none"
                            ,
                            padding: "0px",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: "3rem",
                            left: "0.5rem",
                            zIndex: 2

                        }}
                    >
                        <Label
                            value="WIN"
                            style={{
                                color: "#FFF",
                                textAlign: "center",
                                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                fontFamily: "Manrope",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "800",
                                lineHeight: "normal",
                                letterSpacing: "0.11px",
                                textTransform: "uppercase",
                                padding: "0px",
                                margin: "0px",
                                borderRadius: "3px",
                                border: "0.4px solid #51FF15",
                                background:
                                    "linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)",
                                boxShadow: "-2px 4px 6px 0px rgba(0, 0, 0, 0.20)",
                                backdropFilter: "blur(4px)",
                            }}
                        />
                    </div>
                    <div
                        className="badge-win"
                        style={{
                            display:
                                winner == "tie" ?
                                    "flex"
                                    : "none"
                            ,
                            padding: "0px",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            bottom: "2.5rem",
                            right: "0.5rem",
                            zIndex: 2

                        }}
                    >
                        <Label
                            value="WIN"
                            style={{
                                color: "#FFF",
                                textAlign: "center",
                                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                fontFamily: "Manrope",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "800",
                                lineHeight: "normal",
                                letterSpacing: "0.11px",
                                textTransform: "uppercase",
                                padding: "0px",
                                margin: "0px",
                                borderRadius: "3px",
                                border: "0.4px solid #51FF15",
                                background:
                                    "linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)",
                                boxShadow: "-2px 4px 6px 0px rgba(0, 0, 0, 0.20)",
                                backdropFilter: "blur(4px)",

                            }}
                        />
                    </div>

                    <div
                        className="card-container-item"
                        style={{
                            height: "2.5rem",
                            width: `2rem`,
                            background: "rgba(255, 255, 255, 0)",
                            left: "40%",
                            top: "30%",
                            position: "absolute",
                            ...(DisplayHelper.getOrientation() == "landscape" ? ({ transform: "" }) : {
                                transform: "scale(1.25)",

                            })

                        }}
                    >
                        <RenderCardV2 value={slotCardWild} visible={true} submit={true} />
                    </div>
                    {/* </div> */}
                </div>
                <div
                    className="banker-board-history"
                    style={{
                        flex: "1",
                        display: "flex",
                        height: "64px",
                        padding: "12px",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "4px 2px 2px 4px",
                        border:
                            winner == "tiger"
                                ? "0.6px solid #FF7A00"
                                : "0.6px solid #4C4D66",
                        background:
                            winner == "tiger"
                                ? "linear-gradient(0deg, #FF7A00 -39.84%, rgba(243, 0, 73, 0.00) 100%)"
                                : "linear-gradient(180deg, #42445F 0%, #2F3046 100%)",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "flex-end",
                            gap: "5px",
                            position: "absolute",
                            right: "7px",
                            top: "7px",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                gap: "2px",
                                alignItems: "center",
                            }}
                        >
                            <div
                                className="badge-win"
                                style={{
                                    display: winner == "tiger" ? "flex" : "none",
                                    padding: "0px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    zIndex: 2,

                                }}
                            >
                                <Label
                                    value="WIN"
                                    style={{
                                        color: "#FFF",
                                        textAlign: "center",
                                        textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                        fontFamily: "Manrope",
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontWeight: "800",
                                        lineHeight: "normal",
                                        letterSpacing: "0.11px",
                                        textTransform: "uppercase",
                                        padding: "0px",
                                        margin: "0px",
                                        borderRadius: "3px",
                                        border: "0.4px solid #51FF15",
                                        background:
                                            "linear-gradient(108deg, rgba(59, 232, 0, 0.75) 2.97%, rgba(64, 248, 0, 0.75) 49.79%, rgba(59, 232, 0, 0.75) 98.51%)",
                                        boxShadow: "-2px 4px 6px 0px rgba(0, 0, 0, 0.20)",
                                        backdropFilter: "blur(4px)",
                                    }}
                                />
                            </div>
                            <Label
                                value="TIGER"
                                style={{
                                    color: "#FFF",
                                    textAlign: "center",
                                    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                    fontFamily: "Manrope",
                                    fontSize: "1.1rem",
                                    fontStyle: "normal",
                                    fontWeight: "800",
                                    lineHeight: "normal",
                                    letterSpacing: "0.11px",
                                    textTransform: "uppercase",
                                    padding: "0px",
                                    margin: "0px",
                                }}
                            />
                        </div>
                        {/* @ts-ignore */}
                        <Label value={`${Number(isNaN(Number(data.detail_result.tiger[0])) ? getValueOfLeterCard(data.detail_result.tiger[0]) : data.detail_result.tiger[0])}`}
                            style={{
                                color: "#FFF",
                                textAlign: "center",
                                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                                fontFamily: "Manrope",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                letterSpacing: "0.11px",
                                textTransform: "uppercase",
                                padding: "0px",
                                margin: "0px",
                            }}
                        />
                    </div>

                    {tigerornamen()}

                    <div
                        ref={cardContainer2}
                        className="banker-cards-board-history"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            gap: "3px",
                            position: "absolute",
                            left: "10px",
                            bottom: "5px",
                            height: "46%",

                        }}
                    >
                        <div
                            className="card-container-item"
                            style={{
                                height: "100%",
                                width: `2rem`,
                                background: "rgba(255, 255, 255, 0)",
                                marginLeft: "0.5rem",
                                marginTop: "-0.5rem",
                                ...(DisplayHelper.getOrientation() == "landscape" ? ({ transform: "" }) : {
                                    transform: "scale(1.25)",

                                })

                            }}
                        >
                            <RenderCardV2 value={slotCardTiger} visible={true} submit={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultDTWildTransaction;
