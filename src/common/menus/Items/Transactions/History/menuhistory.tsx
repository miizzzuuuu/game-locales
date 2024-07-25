import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { RenderCardV2 } from "./base/rcard-v2";
import { Label } from "./base/label";
// import { useTransactionToday } from "../hooks/useTransactionToday";
// import { useTransactionBefore } from "../hooks/useTransactionBefore";
import tigerornamen from "./base/tigerornamen";
import dragonornamen from "./base/dragonornamen";
import "./style.css";
// import { Sound } from "../../../modules/sound";
import { StringUtility } from "../../../../../game/components/External/managers/StringUtility";
import { Sound } from "../../../../../services/sound";
import { GameHelper } from "../../../../utils/GameHelper";
// import { StateMainPage } from "../../model/betselection";
// import { MenuFooterContainer } from "./menupage";
// import { Label } from "../base/label";
// import { SVGMenuClose } from "../base/svgmenuclose";
// import { StringUtility } from "../../managers/StringUtility";
// import { RenderCardV2 } from "./rcard-v2";

export interface DetailBetting {
    tebak: string;
    type: string;
    taruhan: number;
    prize: number;
    win_amount: number;
    status: string;
}

export interface DetailResult {
    idnomor: number;
    tanggal: string;
    periode: number;
    hitung: string;
    dragon: string;
    tiger: string;
    result: string;
    gamekey: string;
    value: number;
    wild: string;
}

export interface Transaction {
    tglbel: string;
    periode: string;
    pcode: string;
    detail_betting: DetailBetting[];
    detail_result: DetailResult;
    total_debit: number;
    total_credit: number;
    total_transaction: number;
}


// interface MenuHistoryParams {
//     show: boolean;
// }

interface MenuItemParams {
    id: string;
    title: string;
    dragonNumber: number;
    tigerNumber: number;
    dateTime: string;
    winAmount: number;
    betAmount: number;
    isEven?: boolean;
    setOpen: (idx: number | null) => void;
    open: number | null;
    index?: number;
    isBottom?: boolean;
    details: DetailBetting[];
    winner?: string;
    slotCardDragon?: string;
    slotCardTiger?: string;
    slotCardWild?: string;
}

const HistoryItem: React.FC<MenuItemParams> = ({
    id,
    title,
    dragonNumber,
    tigerNumber,
    details,
    dateTime,
    winAmount,
    betAmount,
    setOpen,
    open,
    index = 0,
    isBottom = false,
    winner = "",
    slotCardDragon = "",
    slotCardTiger = "",
    slotCardWild = "",

}) => {
    // const open = openIdx+
    let borderRadiusStr = "0px";
    if (index == 0) {
        borderRadiusStr = "8px 8px 0px 0px";
        if (isBottom) {
            borderRadiusStr = "8px";
        }
    } else {
        if (isBottom) borderRadiusStr = "0px 0px 8px 8px";
    }

    const cardContainer = useRef<HTMLDivElement>(null);
    const cardContainer2 = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [dimensions2, setDimensions2] = useState({ width: 0, height: 0 });

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

    const toggleMaximize = () => {
        Sound.playClick();
        if (open !== null && open == index)
            setOpen(null);
        else
            setOpen(index)

    };

    return (
        <button
            className="historyitem"
            onClick={toggleMaximize}
            style={{
                display: "flex",
                width: "100%",
                height: "fit-content",
                padding: "12px 12px",
                boxSizing: "border-box",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                borderRadius: borderRadiusStr,
                border: "none",
                background: index != open ? "none" : "#1E1F2E",
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    boxSizing: "border-box",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Label
                        style={{
                            color: "#FFF",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Manrope",
                            fontSize: "1.2rem",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight: "16px",
                            letterSpacing: "0.26px",
                            padding: "0px",
                            margin: "0px",
                        }}
                        value={title}
                    />
                    <Label
                        style={{
                            color: winAmount >= 0 ? "#3BE800" : "#FF2667",
                            leadingTrim: "both",
                            textEdge: "cap",
                            fontFamily: "Manrope",
                            fontSize: "1.3rem",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "16px",
                            letterSpacing: "-0.26px",
                            padding: "0px",
                            margin: "0px",
                        }}
                        value={`${winAmount >= 0 ? "+" : "-"
                            } ${StringUtility.formatNumberCurrency(
                                Math.abs(winAmount),
                                "IDR"
                            )}`}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                        }}
                    >
                      
                        <Label
                            style={{
                                color: "#5E5F73",
                                fontFamily: "Manrope",
                                fontSize: "1.1rem",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "normal",
                                letterSpacing: "-0.22px",
                                padding: "0px",
                                margin: "0px",
                            }}
                            value={`${dateTime}`}
                        />
                        <div
                            style={{
                                strokeWidth: "0.6px",
                                background: "rgba(94, 95, 115, 0.32)",
                                width: "0.6px",
                                alignSelf: "stretch",
                            }}
                        ></div>
                        
                    </div>
                    <Label
                        style={{
                            color: "#5E5F73",
                            fontFamily: "Manrope",
                            fontSize: "1.1rem",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "normal",
                            letterSpacing: "-0.22px",
                            padding: "0px",
                            margin: "0px",
                        }}
                        value={`${StringUtility.formatNumberCurrency(betAmount, "IDR")}`}
                    />
                </div>
                <div
                    style={{
                        width: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                        }}
                    >
                        <Label
                            style={{
                                color: "#5E5F73",
                                fontFamily: "Manrope",
                                fontSize: "1.1rem",
                                fontStyle: "normal",
                                fontWeight: "500",
                                lineHeight: "normal",
                                letterSpacing: "-0.22px",
                                padding: "0px",
                                margin: "0px",
                            }}
                            value={`Periode`}
                        />

                        <Label
                            style={{
                                color: "#FFF",
                                fontFamily: "Manrope",
                                fontSize: "1.1rem",
                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0.22px",
                                padding: "0px",
                                margin: "0px",
                            }}
                            value={` ${id}`}
                        />
                        <div
                            style={{
                                strokeWidth: "0.6px",
                                background: "rgba(94, 95, 115, 0.32)",
                                width: "0.6px",
                                alignSelf: "stretch",
                            }}
                        ></div>
                        
                    </div>
                 
                </div>
            </div>

            {open == index ? <div
                className="detail-history"
                style={{
                    display: open == index ? "flex" : "none",
                    width: "100%",
                    boxSizing: "border-box",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "12px 0px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "1.5px",
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
                            </div>
                            <Label
                                value={`${dragonNumber}`}
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
                            }}
                        >

                            <div
                                className="card-container-item"
                                style={{
                                    height: "100%",
                                    width: `${dimensions.width}px`,
                                    background: "rgba(255, 255, 255, 0)",
                                    marginRight: "2.6rem",
                                    marginTop: "-0.5rem",
                                    transform: "scale(1.25)"
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
                            height: "100%",
                            alignSelf: "stretch",
                            // padding: "12px",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "stretch",
                            borderRadius: "4px 2px 2px 4px",
                            // border:
                            //     winner == "banker"
                            //         ? "0.6px solid #F30049"
                            //         : "0.6px solid #4C4D66",
                            // background:
                            //     winner == "banker"
                            //         ? "linear-gradient(0deg, #F30049 -39.84%, rgba(243, 0, 73, 0.00) 105.47%)"
                            //         : "linear-gradient(180deg, #42445F 0%, #2F3046 100%)",
                            position: "relative",
                        }}
                    >
                        {winner == "superwild" ? <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="64"
                            fill="none"
                            viewBox="0 0 118 64"
                        >
                            <path
                                fill="url(#paint0_linear_1483_7171)"
                                stroke="#4C4D66"
                                strokeWidth="0.6"
                                d="M116.904 1.523a.2.2 0 01.296.175V63a.7.7 0 01-.7.7H4.019c-.207 0-.278-.276-.096-.376L116.904 1.523z"
                            ></path>
                            <path
                                fill="url(#paint1_linear_1483_7171)"
                                stroke="#00A4EA"
                                strokeWidth="0.6"
                                d="M1.096 62.477a.2.2 0 01-.296-.175V1a.7.7 0 01.7-.7h112.481c.207 0 .278.276.096.375l.144.264-.144-.264L1.096 62.477z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M11.262 15.165a3.953 3.953 0 01-1.59-.308 3.017 3.017 0 01-1.16-.891c-.3-.389-.491-.85-.572-1.386l1.562-.231c.11.455.337.805.682 1.05.345.246.737.369 1.177.369.246 0 .484-.039.715-.116.231-.076.42-.19.566-.34a.755.755 0 00.226-.556.693.693 0 00-.039-.231.584.584 0 00-.115-.215.86.86 0 00-.237-.187 1.79 1.79 0 00-.379-.159l-2.057-.605a6.044 6.044 0 01-.539-.187 2.382 2.382 0 01-.588-.347c-.191-.15-.35-.348-.479-.593-.125-.25-.187-.563-.187-.941 0-.532.134-.973.402-1.326a2.394 2.394 0 011.072-.786 4.023 4.023 0 011.485-.253c.546.007 1.034.1 1.463.28.429.18.788.442 1.078.787.29.341.499.759.627 1.254l-1.617.275a1.43 1.43 0 00-.324-.649 1.553 1.553 0 00-.567-.401 1.881 1.881 0 00-.682-.149 1.821 1.821 0 00-.665.099c-.206.07-.374.172-.506.308a.68.68 0 00-.193.484c0 .172.053.313.16.423.106.107.24.193.401.259.161.066.326.121.495.165l1.375.374c.205.055.433.128.682.22.25.088.488.213.715.374.231.158.42.367.567.627.15.26.225.59.225.99 0 .425-.09.797-.27 1.116a2.33 2.33 0 01-.714.787c-.301.205-.642.36-1.024.462a4.445 4.445 0 01-1.171.154zm7.72 0c-.637 0-1.198-.128-1.682-.385a2.83 2.83 0 01-1.133-1.095c-.272-.469-.407-1.02-.407-1.655V7.091l1.518-.011v4.939c0 .26.044.497.132.71.088.212.209.396.363.55.157.153.339.273.544.357.21.08.431.121.666.121.242 0 .465-.042.67-.127.21-.084.391-.203.545-.357.154-.154.273-.337.358-.55.088-.213.132-.447.132-.704V7.08h1.518v4.95c0 .634-.136 1.186-.407 1.655-.271.47-.65.835-1.133 1.095-.484.257-1.045.385-1.683.385zm4.87-.165V7.08h3.343c.077 0 .18.004.308.011.132.004.25.015.352.033.473.073.86.23 1.16.468.305.238.529.538.672.901.143.36.214.761.214 1.205 0 .444-.073.847-.22 1.21a2.11 2.11 0 01-.67.897c-.301.238-.686.394-1.156.467a5.96 5.96 0 01-.66.044h-1.848V15h-1.496zm1.495-4.081h1.782c.077 0 .162-.004.253-.011.092-.007.176-.022.253-.044a.912.912 0 00.468-.275c.11-.132.185-.277.225-.434.044-.162.066-.314.066-.457 0-.143-.022-.293-.066-.451a1.05 1.05 0 00-.225-.434.894.894 0 00-.468-.281 1.297 1.297 0 00-.253-.044 3.19 3.19 0 00-.253-.011h-1.782v2.442zM31.116 15V7.08h5.17v1.397h-3.674v1.694h3.014v1.397h-3.014v2.035h3.674V15h-5.17zm6.598 0V7.08h3.344c.077 0 .18.004.308.011.132.004.25.015.352.033.473.073.86.23 1.16.468.305.238.528.538.671.901.143.36.215.761.215 1.205 0 .664-.165 1.232-.495 1.705-.33.47-.847.759-1.551.869l-.66.044H39.21V15h-1.496zm4.466 0l-1.562-3.223 1.54-.297L43.874 15H42.18zm-2.97-4.081h1.782c.077 0 .161-.004.253-.011.092-.007.176-.022.253-.044a.912.912 0 00.467-.275c.11-.132.186-.277.226-.434.044-.162.066-.314.066-.457 0-.143-.022-.293-.066-.451a1.05 1.05 0 00-.226-.434.894.894 0 00-.467-.281 1.297 1.297 0 00-.253-.044 3.193 3.193 0 00-.253-.011H39.21v2.442zM9.93 28L7.61 20.08h1.573l1.485 5.445 1.485-5.434 1.573-.011 1.485 5.445 1.485-5.445h1.573L15.948 28h-1.474l-1.534-5.346L11.405 28H9.931zm9.44 0v-7.92h1.497V28h-1.496zm3.366 0v-7.92h1.496v6.523h3.41V28h-4.906zm5.95 0v-7.92h2.564l.385.006c.194.003.381.016.56.038.639.077 1.18.299 1.623.666.444.366.781.832 1.012 1.396a4.85 4.85 0 01.347 1.854 4.85 4.85 0 01-.347 1.854 3.493 3.493 0 01-1.012 1.397c-.443.366-.984.588-1.622.665-.18.022-.367.035-.561.038a25.44 25.44 0 01-.385.006h-2.563zm1.519-1.408h1.045c.099 0 .233-.002.401-.005.17-.008.321-.024.457-.05a1.45 1.45 0 00.841-.484c.22-.253.382-.557.484-.913a3.82 3.82 0 00.16-1.1c0-.396-.055-.772-.165-1.127a2.33 2.33 0 00-.49-.902 1.465 1.465 0 00-.83-.468 2.422 2.422 0 00-.457-.05 19.248 19.248 0 00-.401-.005h-1.045v5.104zM96.43 57v-6.523h-2.497V49.08h6.49v1.397h-2.497V57H96.43zm5.097 0v-7.92h1.496V57h-1.496zm3.255 0v-7.92h5.17v1.397h-3.674v1.694h3.014v1.397h-3.014v2.035h3.674V57h-5.17z"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1483_7171"
                                    x1="59.782"
                                    x2="59.782"
                                    y1="0.855"
                                    y2="64"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#42445F"></stop>
                                    <stop offset="1" stopColor="#2F3046"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_1483_7171"
                                    x1="58.219"
                                    x2="58.219"
                                    y1="63"
                                    y2="-14"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#00A4EA"></stop>
                                    <stop offset="1" stopColor="#00A4EA" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg> : winner == "tie" ? <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="64"
                            fill="none"
                            viewBox="0 0 118 64"
                        >
                            <path
                                fill="url(#paint0_linear_1483_7122)"
                                stroke="#01CBA7"
                                strokeWidth="0.6"
                                d="M116.904 1.523a.2.2 0 01.296.175V63a.7.7 0 01-.7.7H4.019c-.207 0-.278-.276-.096-.376L116.904 1.523z"
                            ></path>
                            <path
                                fill="url(#paint1_linear_1483_7122)"
                                stroke="#4C4D66"
                                strokeWidth="0.6"
                                d="M1.096 62.477a.2.2 0 01-.296-.175V1a.7.7 0 01.7-.7h112.481c.207 0 .278.276.096.375l.144.264-.144-.264L1.096 62.477z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M11.262 15.165a3.953 3.953 0 01-1.59-.308 3.017 3.017 0 01-1.16-.891c-.3-.389-.491-.85-.572-1.386l1.562-.231c.11.455.337.805.682 1.05.345.246.737.369 1.177.369.246 0 .484-.039.715-.116.231-.076.42-.19.566-.34a.755.755 0 00.226-.556.693.693 0 00-.039-.231.584.584 0 00-.115-.215.86.86 0 00-.237-.187 1.79 1.79 0 00-.379-.159l-2.057-.605a6.044 6.044 0 01-.539-.187 2.382 2.382 0 01-.588-.347c-.191-.15-.35-.348-.479-.593-.125-.25-.187-.563-.187-.941 0-.532.134-.973.402-1.326a2.394 2.394 0 011.072-.786 4.023 4.023 0 011.485-.253c.546.007 1.034.1 1.463.28.429.18.788.442 1.078.787.29.341.499.759.627 1.254l-1.617.275a1.43 1.43 0 00-.324-.649 1.553 1.553 0 00-.567-.401 1.881 1.881 0 00-.682-.149 1.821 1.821 0 00-.665.099c-.206.07-.374.172-.506.308a.68.68 0 00-.193.484c0 .172.053.313.16.423.106.107.24.193.401.259.161.066.326.121.495.165l1.375.374c.205.055.433.128.682.22.25.088.488.213.715.374.231.158.42.367.567.627.15.26.225.59.225.99 0 .425-.09.797-.27 1.116a2.33 2.33 0 01-.714.787c-.301.205-.642.36-1.024.462a4.445 4.445 0 01-1.171.154zm7.72 0c-.637 0-1.198-.128-1.682-.385a2.83 2.83 0 01-1.133-1.095c-.272-.469-.407-1.02-.407-1.655V7.091l1.518-.011v4.939c0 .26.044.497.132.71.088.212.209.396.363.55.157.153.339.273.544.357.21.08.431.121.666.121.242 0 .465-.042.67-.127.21-.084.391-.203.545-.357.154-.154.273-.337.358-.55.088-.213.132-.447.132-.704V7.08h1.518v4.95c0 .634-.136 1.186-.407 1.655-.271.47-.65.835-1.133 1.095-.484.257-1.045.385-1.683.385zm4.87-.165V7.08h3.343c.077 0 .18.004.308.011.132.004.25.015.352.033.473.073.86.23 1.16.468.305.238.529.538.672.901.143.36.214.761.214 1.205 0 .444-.073.847-.22 1.21a2.11 2.11 0 01-.67.897c-.301.238-.686.394-1.156.467a5.96 5.96 0 01-.66.044h-1.848V15h-1.496zm1.495-4.081h1.782c.077 0 .162-.004.253-.011.092-.007.176-.022.253-.044a.912.912 0 00.468-.275c.11-.132.185-.277.225-.434.044-.162.066-.314.066-.457 0-.143-.022-.293-.066-.451a1.05 1.05 0 00-.225-.434.894.894 0 00-.468-.281 1.297 1.297 0 00-.253-.044 3.19 3.19 0 00-.253-.011h-1.782v2.442zM31.116 15V7.08h5.17v1.397h-3.674v1.694h3.014v1.397h-3.014v2.035h3.674V15h-5.17zm6.598 0V7.08h3.344c.077 0 .18.004.308.011.132.004.25.015.352.033.473.073.86.23 1.16.468.305.238.528.538.671.901.143.36.215.761.215 1.205 0 .664-.165 1.232-.495 1.705-.33.47-.847.759-1.551.869l-.66.044H39.21V15h-1.496zm4.466 0l-1.562-3.223 1.54-.297L43.874 15H42.18zm-2.97-4.081h1.782c.077 0 .161-.004.253-.011.092-.007.176-.022.253-.044a.912.912 0 00.467-.275c.11-.132.186-.277.226-.434.044-.162.066-.314.066-.457 0-.143-.022-.293-.066-.451a1.05 1.05 0 00-.226-.434.894.894 0 00-.467-.281 1.297 1.297 0 00-.253-.044 3.193 3.193 0 00-.253-.011H39.21v2.442zM9.93 28L7.61 20.08h1.573l1.485 5.445 1.485-5.434 1.573-.011 1.485 5.445 1.485-5.445h1.573L15.948 28h-1.474l-1.534-5.346L11.405 28H9.931zm9.44 0v-7.92h1.497V28h-1.496zm3.366 0v-7.92h1.496v6.523h3.41V28h-4.906zm5.95 0v-7.92h2.564l.385.006c.194.003.381.016.56.038.639.077 1.18.299 1.623.666.444.366.781.832 1.012 1.396a4.85 4.85 0 01.347 1.854 4.85 4.85 0 01-.347 1.854 3.493 3.493 0 01-1.012 1.397c-.443.366-.984.588-1.622.665-.18.022-.367.035-.561.038a25.44 25.44 0 01-.385.006h-2.563zm1.519-1.408h1.045c.099 0 .233-.002.401-.005.17-.008.321-.024.457-.05a1.45 1.45 0 00.841-.484c.22-.253.382-.557.484-.913a3.82 3.82 0 00.16-1.1c0-.396-.055-.772-.165-1.127a2.33 2.33 0 00-.49-.902 1.465 1.465 0 00-.83-.468 2.422 2.422 0 00-.457-.05 19.248 19.248 0 00-.401-.005h-1.045v5.104zM96.43 57v-6.523h-2.497V49.08h6.49v1.397h-2.497V57H96.43zm5.097 0v-7.92h1.496V57h-1.496zm3.255 0v-7.92h5.17v1.397h-3.674v1.694h3.014v1.397h-3.014v2.035h3.674V57h-5.17z"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1483_7122"
                                    x1="59.781"
                                    x2="59.781"
                                    y1="72.5"
                                    y2="1"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#01CBA7"></stop>
                                    <stop offset="1" stopColor="#01CBA7" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_1483_7122"
                                    x1="58.219"
                                    x2="58.219"
                                    y1="0"
                                    y2="63.145"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#42445F"></stop>
                                    <stop offset="1" stopColor="#2F3046"></stop>
                                </linearGradient>
                            </defs>
                        </svg> : <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="64"
                            fill="none"
                            viewBox="0 0 118 64"
                        >
                            <path
                                fill="url(#paint0_linear_1483_7277)"
                                stroke="#4C4D66"
                                strokeWidth="0.6"
                                d="M116.904 1.523a.2.2 0 01.296.175V63a.7.7 0 01-.7.7H4.019c-.207 0-.278-.276-.096-.375L116.904 1.523z"
                            ></path>
                            <path
                                fill="url(#paint1_linear_1483_7277)"
                                stroke="#4C4D66"
                                strokeWidth="0.6"
                                d="M1.096 62.477a.2.2 0 01-.296-.175V1a.7.7 0 01.7-.7h112.481c.207 0 .278.276.096.375l.144.264-.144-.264L1.096 62.477z"
                            ></path>
                            <path
                                fill="#fff"
                                d="M11.262 15.165a3.953 3.953 0 01-1.59-.308 3.017 3.017 0 01-1.16-.891c-.3-.389-.491-.85-.572-1.386l1.562-.231c.11.455.337.805.682 1.05.345.246.737.369 1.177.369.246 0 .484-.039.715-.116.231-.076.42-.19.566-.34a.755.755 0 00.226-.556.693.693 0 00-.039-.231.584.584 0 00-.115-.215.86.86 0 00-.237-.187 1.79 1.79 0 00-.379-.159l-2.057-.605a6.044 6.044 0 01-.539-.187 2.382 2.382 0 01-.588-.347c-.191-.15-.35-.348-.479-.593-.125-.25-.187-.563-.187-.941 0-.532.134-.973.402-1.326a2.394 2.394 0 011.072-.786 4.023 4.023 0 011.485-.253c.546.007 1.034.1 1.463.28.429.18.788.442 1.078.787.29.341.499.759.627 1.254l-1.617.275a1.43 1.43 0 00-.324-.649 1.553 1.553 0 00-.567-.401 1.881 1.881 0 00-.682-.149 1.821 1.821 0 00-.665.099c-.206.07-.374.172-.506.308a.68.68 0 00-.193.484c0 .172.053.313.16.423.106.107.24.193.401.259.161.066.326.121.495.165l1.375.374c.205.055.433.128.682.22.25.088.488.213.715.374.231.158.42.367.567.627.15.26.225.59.225.99 0 .425-.09.797-.27 1.116a2.33 2.33 0 01-.714.787c-.301.205-.642.36-1.024.462a4.445 4.445 0 01-1.171.154zm7.72 0c-.637 0-1.198-.128-1.682-.385a2.83 2.83 0 01-1.133-1.095c-.272-.469-.407-1.02-.407-1.655V7.091l1.518-.011v4.939c0 .26.044.497.132.71.088.212.209.396.363.55.157.153.339.273.544.357.21.08.431.121.666.121.242 0 .465-.042.67-.127.21-.084.391-.203.545-.357.154-.154.273-.337.358-.55.088-.213.132-.447.132-.704V7.08h1.518v4.95c0 .634-.136 1.186-.407 1.655-.271.47-.65.835-1.133 1.095-.484.257-1.045.385-1.683.385zm4.87-.165V7.08h3.343c.077 0 .18.004.308.011.132.004.25.015.352.033.473.073.86.23 1.16.468.305.238.529.538.672.901.143.36.214.761.214 1.205 0 .444-.073.847-.22 1.21a2.11 2.11 0 01-.67.897c-.301.238-.686.394-1.156.467a5.96 5.96 0 01-.66.044h-1.848V15h-1.496zm1.495-4.081h1.782c.077 0 .162-.004.253-.011.092-.007.176-.022.253-.044a.912.912 0 00.468-.275c.11-.132.185-.277.225-.434.044-.162.066-.314.066-.457 0-.143-.022-.293-.066-.451a1.05 1.05 0 00-.225-.434.894.894 0 00-.468-.281 1.297 1.297 0 00-.253-.044 3.19 3.19 0 00-.253-.011h-1.782v2.442zM31.116 15V7.08h5.17v1.397h-3.674v1.694h3.014v1.397h-3.014v2.035h3.674V15h-5.17zm6.598 0V7.08h3.344c.077 0 .18.004.308.011.132.004.25.015.352.033.473.073.86.23 1.16.468.305.238.528.538.671.901.143.36.215.761.215 1.205 0 .664-.165 1.232-.495 1.705-.33.47-.847.759-1.551.869l-.66.044H39.21V15h-1.496zm4.466 0l-1.562-3.223 1.54-.297L43.874 15H42.18zm-2.97-4.081h1.782c.077 0 .161-.004.253-.011.092-.007.176-.022.253-.044a.912.912 0 00.467-.275c.11-.132.186-.277.226-.434.044-.162.066-.314.066-.457 0-.143-.022-.293-.066-.451a1.05 1.05 0 00-.226-.434.894.894 0 00-.467-.281 1.297 1.297 0 00-.253-.044 3.193 3.193 0 00-.253-.011H39.21v2.442zM9.93 28L7.61 20.08h1.573l1.485 5.445 1.485-5.434 1.573-.011 1.485 5.445 1.485-5.445h1.573L15.948 28h-1.474l-1.534-5.346L11.405 28H9.931zm9.44 0v-7.92h1.497V28h-1.496zm3.366 0v-7.92h1.496v6.523h3.41V28h-4.906zm5.95 0v-7.92h2.564l.385.006c.194.003.381.016.56.038.639.077 1.18.299 1.623.666.444.366.781.832 1.012 1.396a4.85 4.85 0 01.347 1.854 4.85 4.85 0 01-.347 1.854 3.493 3.493 0 01-1.012 1.397c-.443.366-.984.588-1.622.665-.18.022-.367.035-.561.038a25.44 25.44 0 01-.385.006h-2.563zm1.519-1.408h1.045c.099 0 .233-.002.401-.005.17-.008.321-.024.457-.05a1.45 1.45 0 00.841-.484c.22-.253.382-.557.484-.913a3.82 3.82 0 00.16-1.1c0-.396-.055-.772-.165-1.127a2.33 2.33 0 00-.49-.902 1.465 1.465 0 00-.83-.468 2.422 2.422 0 00-.457-.05 19.248 19.248 0 00-.401-.005h-1.045v5.104zM96.43 57v-6.523h-2.497V49.08h6.49v1.397h-2.497V57H96.43zm5.097 0v-7.92h1.496V57h-1.496zm3.255 0v-7.92h5.17v1.397h-3.674v1.694h3.014v1.397h-3.014v2.035h3.674V57h-5.17z"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1483_7277"
                                    x1="59.782"
                                    x2="59.782"
                                    y1="0.855"
                                    y2="64"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#42445F"></stop>
                                    <stop offset="1" stopColor="#2F3046"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_1483_7277"
                                    x1="58.219"
                                    x2="58.219"
                                    y1="0"
                                    y2="63.145"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#42445F"></stop>
                                    <stop offset="1" stopColor="#2F3046"></stop>
                                </linearGradient>
                            </defs>
                        </svg>}
                        <div
                            className="badge-win"
                            style={{
                                display:
                                    winner == "superwild" ?
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
                                height: "100%",
                                width: `${dimensions.width}px`,
                                background: "rgba(255, 255, 255, 0)",
                                left: "40%",
                                top: "40%",
                                transform: "scale(1.25)",
                                position: "absolute"

                            }}
                        >
                            <RenderCardV2 value={slotCardWild} visible={true} submit={true} />
                        </div>
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
                            <Label
                                value={`${tigerNumber}`}
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
                                    width: `${dimensions2.width}px`,
                                    background: "rgba(255, 255, 255, 0)",
                                    transform: "scale(1.25)",
                                    marginLeft: "0.5rem",
                                    marginTop: "-0.5rem",

                                }}
                            >
                                <RenderCardV2 value={slotCardTiger} visible={true} submit={true} />
                            </div>

                        </div>
                    </div>
                </div>
                <div
                    className="table-history-container"
                    style={{ width: "100%", alignItems: "center" }}
                >
                    <table className="history-table">
                        <colgroup>
                            <col style={{ width: "40%" }} />
                            <col style={{ width: "25%" }} />
                            <col style={{ width: "5%" }} />
                            <col style={{ width: "30%" }} />
                        </colgroup>
                        <thead style={{ textAlign: "center", backgroundColor: "rgb(44, 45, 63)" }}>
                            <tr>
                                <th />
                                <th>TARUHAN</th>
                                <th>(X)</th>
                                <th>X MENANG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((det) => {

                                    return <tr
                                        style={{
                                            backgroundColor: det.status != "Lose" ? "rgba(59, 232, 0, 0.16)" : "",


                                        }}
                                    >
                                        <td
                                            style={{
                                                textAlign: "left",
                                                paddingLeft: 10,
                                                paddingRight: 0,
                                                fontFamily: "Manrope",
                                                fontSize: 12,
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                letterSpacing: "0.5px"
                                            }}
                                        >
                                            {det.tebak}
                                        </td>
                                        <td> {det.taruhan}</td>
                                        <td style={{ paddingLeft: 3, paddingRight: 3 }}>9</td>
                                        <td style={!Number(det.win_amount)? {
                                            color: "#4c4d66"
                                        } : {}}> {det.win_amount}</td>
                                    </tr>
                                })
                            }


                            <tr>
                                <td
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: 10,
                                        paddingRight: 0,
                                        fontFamily: "Manrope",
                                        fontSize: 12,
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        letterSpacing: "0.5px"
                                    }}
                                >
                                    TOTAL
                                </td>
                                <td> {betAmount}</td>
                                <td style={{ paddingLeft: 3, paddingRight: 3 }} />
                                <td
                                style={{color: "rgb(59, 232, 0)"}}
                                > {winAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div> : <></>}
        </button>
    );
};

interface IProps {
    isLandscape: boolean
    date: null | string
    tab: "today"|"before"
    data: Transaction[]
}

function getCurrentDateFormatted() {
    const t = new Date
        , n = t.getFullYear()
        , r = (t.getMonth() + 1).toString().padStart(2, "0")
        , i = t.getDate().toString().padStart(2, "0");
    return `${n}-${r}-${i}`
}


function getHistoryDateTitle(t: string) {
    const n = new Date(t)
        , r: any = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit"
        };
    return n.toLocaleDateString("id-ID", r);
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

export function MenuHistoryList(props: IProps) {
    const { isLandscape, date, data: transaction } = props;

 

    const [open, setOpen] = useState(null);

    return (
        <div
            className={`${isLandscape ? "customscrollbar" : ""} bg-bg-menu`}
            style={{

                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxSizing: "border-box",
                width: "100%",
                justifyContent: "flex-start",
                // alignItems: "flex-end",
                gap: "6px",
                flex: "6",
                padding: "12px 12px 32px 12px",
                overflow: "hidden scroll",
                height: "50%",
            }}
        >
            {date && <p
                className="bg-bg-menu"
                style={{
                    color: "rgb(255, 255, 255)",
                    fontFamily: "Manrope",
                    fontSize: 15,
                    fontStyle: "normal",
                    fontWeight: 800,
                    lineHeight: 2,
                    letterSpacing: "0.28px",
                    paddingLeft: 12,
                    margin: "0px 0px 12px"
                }}
            >
                {
                    getHistoryDateTitle(date!)
                }
            </p>}
            <div
                style={{
                    borderRadius: "8px",
                    border: "1px solid #343547",
                    background: "#2C2D3F",
                    width: "100%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                {transaction == null ? (
                    <></>
                ) : (
                    <>


                        {transaction.map && transaction.map((trans, index) => trans.detail_betting.length ? (
                            <HistoryItem
                                key={index.toString().concat("history-trans-item")}
                                id={"#" + trans.periode}
                                dateTime={StringUtility.stringToDateTime(trans.tglbel)}
                                title="Europe DragonTiger Wild"
                                dragonNumber={Number(isNaN(Number(trans.detail_result.dragon[0])) ? getValueOfLeterCard(trans.detail_result.dragon[0]) : trans.detail_result.dragon[0])}
                                tigerNumber={Number(isNaN(Number(trans.detail_result.tiger[0])) ? getValueOfLeterCard(trans.detail_result.tiger[0]) : trans.detail_result.tiger[0])}
                                winAmount={trans.total_transaction}
                                betAmount={trans.total_debit}
                                index={index}
                                details={trans.detail_betting}
                                // isEven={false}
                                // isBottom={index == transaction.length - 1}
                                //@ts-ignore
                                setOpen={(idx) => setOpen(idx)}
                                open={open}
                                winner={trans.detail_result.result}
                                slotCardDragon={trans.detail_result.dragon}
                                slotCardTiger={trans.detail_result.tiger}
                                slotCardWild={trans.detail_result.wild}
                            />
                        ) : null)}
                    </>
                )}
                {/* <HistoryItem
          id="#12222"
          dateTime="2/4/24 15:12:45"
          title="Europe Baccarat"
          bankerNumber={6}
          playerNumber={9}
          winAmount={430000}
          betAmount={150000}
          index={0}
          isEven={true}
          isBottom={false}
          winner="player"
          slotCardP="3d-6h-x"
          slotCardB="5d-7h-x"
        />
        <HistoryItem
          id="#12222"
          dateTime="2/4/24 15:12:45"
          title="Europe Baccarat"
          bankerNumber={9}
          playerNumber={5}
          winAmount={430000}
          betAmount={150000}
          index={1}
          isEven={false}
          isBottom={false}
          winner="banker"
        />
        <HistoryItem
          id="#12222"
          dateTime="2/4/24 15:12:45"
          title="Europe Baccarat"
          bankerNumber={4}
          playerNumber={2}
          winAmount={430000}
          betAmount={150000}
          index={1}
          isEven={false}
          isBottom={false}
          winner=""
        />
        <HistoryItem
          id="#12222"
          dateTime="2/4/24 15:12:45"
          title="Europe Baccarat"
          bankerNumber={9}
          playerNumber={5}
          winAmount={430000}
          betAmount={150000}
          index={1}
          isEven={false}
          isBottom={false}
          winner="banker"
        />
        <HistoryItem
          id="#12222"
          dateTime="2/4/24 15:12:45"
          title="Europe Baccarat"
          bankerNumber={4}
          playerNumber={5}
          winAmount={430000}
          betAmount={150000}
          index={1}
          isEven={false}
          isBottom={true}
        /> */}
            </div>
        </div>
    );
}

export function MenuHistoryTabSelection(props: { setDate: (date: string | null) => void }) {

    const [isTodaySelected, setToday] = useState(true);
    function getBefore() {
        const t = new Date
            , n = t.getFullYear()
            , r = (t.getMonth() + 1).toString().padStart(2, "0")
            , i = t.getDate().toString().padStart(2, "0");
        return `${n}-${r}-${Number(i) - 1}`
    }
    return (
        <>
            <button
                style={{
                    flex: "1",
                    background: "none",
                    border: "none",
                    padding: "8px 8px 14px 8px",
                    borderBottom: isTodaySelected ? "1px solid #00C3D8" : "1px solid #2B2C3D"
                }}
                onClick={() => {
                    setToday(true)
                    props.setDate(null)
                }}
            >
                <Label
                    style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Manrope",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "normal",
                    }}
                    value="Hari ini"
                />
            </button>
            <button
                style={{
                    flex: "1",
                    background: "none",
                    border: "none",
                    padding: "8px 8px 14px 8px",
                    borderBottom: !isTodaySelected ? "1px solid #00C3D8" : "1px solid #2B2C3D"
                }}
                onClick={() => {
                    setToday(false)
                    props.setDate(getBefore())
                }}
            >
                <Label
                    style={{
                        padding: "0px",
                        margin: "0px",
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Manrope",
                        fontSize: "15px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "normal",
                    }}
                    value="Sebelumnya"
                />
            </button>
        </>
    );
}



const dataDummy = {
    "data": [
        {
            "tglbel": "2024-07-23T09:02:24.000Z",
            "periode": "25635",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 5000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 64,
                    "win_amount": 320000,
                    "status": "Win"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 5000,
                    "prize": 2,
                    "win_amount": 10000,
                    "status": "Win"
                }
            ],
            "detail_result": {
                "idnomor": 25635,
                "tanggal": "2024-07-23T09:02:35.000Z",
                "periode": 13,
                "hitung": "1",
                "dragon": "8c",
                "tiger": "8d",
                "wild": "8h",
                "result": "tie",
                "gamekey": "1328",
                "value": 8
            },
            "total_debit": 35000,
            "total_credit": 330000,
            "total_transaction": 295000
        },
        {
            "tglbel": "2024-07-23T09:00:28.000Z",
            "periode": "25634",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 56,
                    "win_amount": 280000,
                    "status": "Win"
                },
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 5000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 5000,
                    "prize": 2,
                    "win_amount": 10000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25634,
                "tanggal": "2024-07-23T09:00:54.000Z",
                "periode": 13,
                "hitung": "1",
                "dragon": "7c",
                "tiger": "7d",
                "wild": "7h",
                "result": "tie",
                "gamekey": "1328",
                "value": 7
            },
            "total_debit": 35000,
            "total_credit": 290000,
            "total_transaction": 255000
        },
        {
            "tglbel": "2024-07-22T07:07:08.000Z",
            "periode": "25577",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 80,
                    "win_amount": 400000,
                    "status": "Win"
                },
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 10000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 20000,
                    "prize": 2,
                    "win_amount": 40000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25577,
                "tanggal": "2024-07-22T07:08:04.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "Ts",
                "tiger": "Th",
                "wild": "Td",
                "result": "tie",
                "gamekey": "1324",
                "value": 10
            },
            "total_debit": 55000,
            "total_credit": 440000,
            "total_transaction": 385000
        },
        {
            "tglbel": "2024-07-22T07:05:11.000Z",
            "periode": "25576",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 60000,
                    "status": "Win"
                },
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 10000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 20000,
                    "prize": 2,
                    "win_amount": 40000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25576,
                "tanggal": "2024-07-22T07:05:50.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "7s",
                "tiger": "7h",
                "wild": "6c",
                "result": "tie",
                "gamekey": "1324",
                "value": 7
            },
            "total_debit": 55000,
            "total_credit": 100000,
            "total_transaction": 45000
        },
        {
            "tglbel": "2024-07-22T06:59:05.000Z",
            "periode": "25575",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 10000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 20000,
                    "prize": 7.25,
                    "win_amount": 145000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25575,
                "tanggal": "2024-07-22T06:59:37.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "Ts",
                "tiger": "9h",
                "wild": "Td",
                "result": "dragon",
                "gamekey": "1324",
                "value": 10
            },
            "total_debit": 55000,
            "total_credit": 145000,
            "total_transaction": 90000
        },
        {
            "tglbel": "2024-07-22T06:49:16.000Z",
            "periode": "25573",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 10000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 20000,
                    "prize": 2,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25573,
                "tanggal": "2024-07-22T06:55:41.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "8s",
                "tiger": "9h",
                "wild": "9d",
                "result": "tiger",
                "gamekey": "1324",
                "value": 9
            },
            "total_debit": 55000,
            "total_credit": 0,
            "total_transaction": -55000
        },
        {
            "tglbel": "2024-07-22T06:48:21.000Z",
            "periode": "25572",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 5000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "superwild",
                    "type": "superwild",
                    "taruhan": 10000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragon",
                    "type": "dragon",
                    "taruhan": 20000,
                    "prize": 7.25,
                    "win_amount": 145000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 5000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25572,
                "tanggal": "2024-07-22T06:48:49.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "Ts",
                "tiger": "8h",
                "wild": "Td",
                "result": "dragon",
                "gamekey": "1324",
                "value": 10
            },
            "total_debit": 55000,
            "total_credit": 145000,
            "total_transaction": 90000
        },
        {
            "tglbel": "2024-07-22T06:19:06.000Z",
            "periode": "25566",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tiger",
                    "type": "tiger",
                    "taruhan": 5000,
                    "prize": 5.8,
                    "win_amount": 29000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 1000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 1000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "Super Wild",
                    "type": "superwild",
                    "taruhan": 2000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25566,
                "tanggal": "2024-07-22T06:19:39.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "6s",
                "tiger": "8h",
                "wild": "8d",
                "result": "tiger",
                "gamekey": "1324",
                "value": 8
            },
            "total_debit": 12000,
            "total_credit": 29000,
            "total_transaction": 17000
        },
        {
            "tglbel": "2024-07-22T06:16:08.000Z",
            "periode": "25565",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tiger",
                    "type": "tiger",
                    "taruhan": 5000,
                    "prize": 2,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 1000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 1000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "Super Wild",
                    "type": "superwild",
                    "taruhan": 2000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                }
            ],
            "detail_result": {
                "idnomor": 25565,
                "tanggal": "2024-07-22T06:16:31.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "9s",
                "tiger": "8h",
                "wild": "9d",
                "result": "dragon",
                "gamekey": "1324",
                "value": 9
            },
            "total_debit": 12000,
            "total_credit": 0,
            "total_transaction": -12000
        },
        {
            "tglbel": "2024-07-22T06:15:21.000Z",
            "periode": "25564",
            "pcode": "m23b",
            "detail_betting": [
                {
                    "tebak": "tiger",
                    "type": "tiger",
                    "taruhan": 5000,
                    "prize": 2,
                    "win_amount": 10000,
                    "status": "Win"
                },
                {
                    "tebak": "dragonpair",
                    "type": "pair",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerpair",
                    "type": "pair",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tigerwild",
                    "type": "wild",
                    "taruhan": 1000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "dragonwild",
                    "type": "wild",
                    "taruhan": 1000,
                    "prize": 25,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "Super Wild",
                    "type": "superwild",
                    "taruhan": 2000,
                    "prize": 128,
                    "win_amount": 0,
                    "status": "Lose"
                },
                {
                    "tebak": "tie",
                    "type": "tie",
                    "taruhan": 1000,
                    "prize": 12,
                    "win_amount": 12000,
                    "status": "Win"
                }
            ],
            "detail_result": {
                "idnomor": 25564,
                "tanggal": "2024-07-22T06:15:36.000Z",
                "periode": 7,
                "hitung": "1",
                "dragon": "9s",
                "tiger": "9h",
                "wild": "8d",
                "result": "tie",
                "gamekey": "1324",
                "value": 9
            },
            "total_debit": 12000,
            "total_credit": 22000,
            "total_transaction": 10000
        }
    ],
    "pagination": {
        "total_datas": 113,
        "current_page": 1,
        "total_pages": 12
    }
}

