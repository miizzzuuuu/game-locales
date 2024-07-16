import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateMainPage } from "../../model/betselection";
import { MenuFooterContainer } from "./menupage";
import { Label } from "../base/label";
import { StringUtility } from "../../managers/StringUtility";
import { RenderCardV2 } from "../../prefabs/covercards/rcard-v2";
import { DetailBetting, Transaction } from "../../model/historydata";
import { CardMath } from "../../managers/CardMath";
import { MenuGenericHeader } from "./MenuGeneric/menugenericheader";

interface MenuHistoryParams {
  show: boolean;
}

interface MenuItemParams {
  id: string;
  title: string;
  playerNumber: number;
  bankerNumber: number;
  dateTime: string;
  winAmount: number;
  betAmount: number;
  isEven?: boolean;
  index?: number;
  isBottom?: boolean;
  winner?: string;
  slotCardP?: string;
  slotCardB?: string;
  detailBetting?: Array<DetailBetting>;
}

type HistoryMapDictionary = {
  [key: string]: React.ReactNode[];
};

const HistoryItem: React.FC<MenuItemParams> = ({
  id,
  title,
  playerNumber,
  bankerNumber,
  dateTime,
  winAmount,
  betAmount,
  isEven = false,
  index = 0,
  isBottom = false,
  winner = "",
  slotCardP = "",
  slotCardB = "",
  detailBetting = [],
}) => {
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
  const [ccplayer, setCcPlayer] = useState(0);
  const [ccbanker, setCcBanker] = useState(0);
  const [detailBetArry, setArrayDetailBet] = useState(detailBetting);
  const [isOpen, setOpen] = useState(isEven);

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
    console.log("summary" + (playerNumber + bankerNumber));
    return () => {
      window.removeEventListener("resize", updateDimensions2);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const [arrayOfB, setArrayOfB] = useState(["", "", ""]);
  const [arrayOfP, setArrayOfP] = useState(["", "", ""]);
  useEffect(() => {
    setArrayOfB(StringUtility.formatStringToArray(slotCardB));
    setArrayOfP(StringUtility.formatStringToArray(slotCardP));
  }, [slotCardP, slotCardB]);

  useEffect(() => {
    const banker0 = CardMath.getBaccaratPoint(arrayOfB[0]);
    const banker1 = CardMath.getBaccaratPoint(arrayOfB[1]);
    const banker2 = CardMath.getBaccaratPoint(arrayOfB[2]);
    const totalBanker = banker0 + banker1 + banker2;
    setCcBanker(CardMath.getAdjustment(totalBanker));

    const player0 = CardMath.getBaccaratPoint(arrayOfP[0]);
    const player1 = CardMath.getBaccaratPoint(arrayOfP[1]);
    const player2 = CardMath.getBaccaratPoint(arrayOfP[2]);
    const totalPlayer = player0 + player1 + player2;
    setCcPlayer(CardMath.getAdjustment(totalPlayer));
  }, [arrayOfP, arrayOfB]);

  useEffect(() => {
    let totalBet = 0;
    let totalWin = 0;
    for (let i = 0; i < detailBetArry.length; i++) {
      totalBet += detailBetArry[i].taruhan;
      totalWin += detailBetArry[i].win_amount;
    }

    const getTotalElement = detailBetArry.find((x) => x.type == "TOTAL");
    if (getTotalElement == null) {
      detailBetArry.push({
        tebak: "TOTAL",
        type: "TOTAL",
        taruhan: totalBet,
        prize: 0,
        win_amount: totalWin,
        status: "TOTAL",
      });
    } else {
      getTotalElement.taruhan = totalBet;
      getTotalElement.win_amount = totalWin;
    }
    setArrayDetailBet(detailBetArry);
  }, [detailBetArry]);

  return (
    <button
      className="historyitem"
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        padding: "1.2rem 1.2rem",
        boxSizing: "border-box",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderRadius: borderRadiusStr,
        border: "none",
        background: !isOpen ? "none" : "#1E1F2E",
      }}
      onClick={() => {
        setOpen((current) => (current = !current));
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
          gap: "0.6rem",
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
              fontFamily: "ManropeCustom",
              fontSize: "1.3rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.6rem",
              letterSpacing: "0.026rem",
              padding: "0",
              margin: "0",
            }}
            value={title}
          />
          <Label
            style={{
              color: winAmount >= 0 ? "#3BE800" : "#FF2667",
              fontFamily: "ManropeCustom",
              fontSize: "1.3rem",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "1.6rem",
              letterSpacing: "-0.026rem",
              padding: "0",
              margin: "0",
            }}
            value={`${
              winAmount >= 0 ? "+" : "-"
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
              gap: "0.6rem",
            }}
          >
            <Label
              style={{
                color: "#FFF",
                fontFamily: "ManropeCustom",
                fontSize: "1.1rem",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "1.6rem",
                letterSpacing: "0.022rem",
                padding: "0",
                margin: "0",
              }}
              value={`${id}`}
            />
            <div
              style={{
                strokeWidth: "0.6px",
                background: "rgba(94, 95, 115, 0.32)",
                width: "0.6px",
                alignSelf: "stretch",
              }}
            ></div>
            <Label
              style={{
                color: "#5E5F73",
                fontFamily: "ManropeCustom",
                fontSize: "1.1rem",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                letterSpacing: "-0.022rem",
                padding: "0",
                margin: "0",
              }}
              value={`${dateTime}`}
            />
          </div>
          <Label
            style={{
              color: "#5E5F73",
              fontFamily: "ManropeCustom",
              fontSize: "1.1rem",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              letterSpacing: "-0.022rem",
              padding: "0",
              margin: "0",
            }}
            value={`${StringUtility.formatNumberCurrency(betAmount, "IDR")}`}
          />
        </div>
      </div>
      <div
        className={`detail-history${!isOpen ? " close" : " open"}`}
        style={{
          display: "flex",
          width: "100%",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1rem",
          padding: "1.2rem 0rem",
        }}
        onAnimationEnd={() => {
          updateDimensions();
          updateDimensions2();
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
                winner == "player"
                  ? "0.6px solid #0189DE"
                  : "0.6px solid #4C4D66",
              background:
                winner == "player"
                  ? "linear-gradient(0deg, #0189DE -39.84%, rgba(1, 137, 222, 0.00) 105.47%)"
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
                  value="PLAYER"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                    fontFamily: "ManropeCustom",
                    fontSize: "13px",
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
                    display: winner == "player" ? "flex" : "none",
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
                      fontFamily: "ManropeCustom",
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
                value={`${ccplayer}`}
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                  fontFamily: "ManropeCustom",
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
            <Label
              value="開"
              style={{
                position: "absolute",
                bottom: "5px",
                left: "5px",
                textAlign: "center",
                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                fontFamily: "ManropeCustom",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                padding: "0px",
                margin: "0px",
                WebkitTextStrokeWidth: "0.30588260293006897",
                WebkitTextStrokeColor: "#000",
                background:
                  "linear-gradient(130deg, rgba(0, 0, 0, 0.12) -21.83%, rgba(0, 0, 0, 0.00) 124.09%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "overlay",
              }}
            />
            <div
              ref={cardContainer}
              className="player-cards-board-history"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "3px",
                position: "absolute",
                right: "5px",
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
                  transform: "translateX(-5px) translateY(5px) rotateZ(-90deg)",
                }}
              >
                <RenderCardV2
                  value={arrayOfP[2]}
                  visible={arrayOfP[2] == "" ? false : true}
                  submit={true}
                />
              </div>
              <div
                className="card-container-item"
                style={{
                  height: "100%",
                  width: `${dimensions.width}px`,
                  background: "rgba(255, 255, 255, 0)",
                }}
              >
                <RenderCardV2
                  value={arrayOfP[1]}
                  visible={arrayOfP[1] == "" ? false : true}
                  submit={true}
                />
              </div>
              <div
                className="card-container-item"
                style={{
                  height: "100%",
                  width: `${dimensions.width}px`,
                  background: "rgba(255, 255, 255, 0)",
                }}
              >
                <RenderCardV2
                  value={arrayOfP[0]}
                  visible={arrayOfP[0] == "" ? false : true}
                  submit={true}
                />
              </div>
            </div>
          </div>
          <div
            className="tie-board-history"
            style={{
              position: "relative",
              display: "flex",
              flex: "0",
              padding: "8px 16px 0px 14px",
              justifyContent: "space-between",
              alignItems: "flex-start",
              alignSelf: "stretch",
              borderRadius: "2px",
              border: "0.6px solid #4C4D66",
              background: "linear-gradient(180deg, #42445F 0%, #2F3046 100%)",
            }}
          >
            <Label
              style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "ManropeCustom",
                fontSize: "13px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                letterSpacing: "0.11px",
                textTransform: "uppercase",
                padding: "0px",
                margin: "0px",
              }}
              value="TIE"
            />
            <Label
              value="和"
              style={{
                position: "absolute",
                bottom: "5px",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                fontFamily: "ManropeCustom",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                padding: "0px",
                margin: "0px",
                WebkitTextStrokeWidth: "0.30588260293006897",
                WebkitTextStrokeColor: "#000",
                background:
                  "linear-gradient(130deg, rgba(0, 0, 0, 0.12) -21.83%, rgba(0, 0, 0, 0.00) 124.09%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "overlay",
              }}
            />
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
                winner == "banker"
                  ? "0.6px solid #F30049"
                  : "0.6px solid #4C4D66",
              background:
                winner == "banker"
                  ? "linear-gradient(0deg, #F30049 -39.84%, rgba(243, 0, 73, 0.00) 105.47%)"
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
                    display: winner == "banker" ? "flex" : "none",
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
                      fontFamily: "ManropeCustom",
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
                  value="BANKER"
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                    fontFamily: "ManropeCustom",
                    fontSize: "13px",
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
                value={`${ccbanker}`}
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                  fontFamily: "ManropeCustom",
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
            <Label
              value="庄"
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                textAlign: "center",
                textShadow: "0px 1px 2px rgba(0, 0, 0, 0.20)",
                fontFamily: "ManropeCustom",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                padding: "0px",
                margin: "0px",
                WebkitTextStrokeWidth: "0.30588260293006897",
                WebkitTextStrokeColor: "#000",
                background:
                  "linear-gradient(130deg, rgba(0, 0, 0, 0.12) -21.83%, rgba(0, 0, 0, 0.00) 124.09%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mixBlendMode: "overlay",
              }}
            />
            <div
              ref={cardContainer2}
              className="banker-cards-board-history"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "3px",
                position: "absolute",
                left: "5px",
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
                }}
              >
                <RenderCardV2
                  value={arrayOfB[0]}
                  visible={arrayOfB[0] == "" ? false : true}
                  submit={true}
                />
              </div>
              <div
                className="card-container-item"
                style={{
                  height: "100%",
                  width: `${dimensions2.width}px`,
                  background: "rgba(255, 255, 255, 0)",
                }}
              >
                <RenderCardV2
                  value={arrayOfB[1]}
                  visible={arrayOfB[1] == "" ? false : true}
                  submit={true}
                />
              </div>
              <div
                className="card-container-item"
                style={{
                  height: "100%",
                  width: `${dimensions2.width}px`,
                  background: "rgba(255, 255, 255, 0)",
                  transform: "translateX(5px) translateY(5px) rotateZ(-90deg)",
                }}
              >
                <RenderCardV2
                  value={arrayOfB[2]}
                  visible={arrayOfB[2] == "" ? false : true}
                  submit={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="table-history-container"
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <table className="history-table">
            <colgroup>
              <col style={{ width: "40%" }} />
              <col style={{ width: "25%" }} />
              <col style={{ width: "5%" }} />
              <col style={{ width: "30%" }} />
            </colgroup>
            <thead
              style={{
                textAlign: "center",
                backgroundColor: "#2C2D3F",
              }}
            >
              <tr>
                <th></th>
                <th>TARUHAN</th>
                <th>(X)</th>
                <th>X MENANG</th>
              </tr>
            </thead>
            <tbody>
              {detailBetArry?.map((detail) => (
                <tr>
                  <td
                    style={{
                      textAlign: "left",
                      paddingLeft: "10px",
                      paddingRight: "0px",
                      fontFamily: "ManropeCustom",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {`${StringUtility.getDetailBetTitle(detail.type)}`}
                  </td>
                  <td>{`${StringUtility.formatNumberCurrency(
                    detail.taruhan,
                    ""
                  )}`}</td>
                  {detail.type == "TOTAL" ? (
                    <td
                      style={{
                        paddingLeft: "3px",
                        paddingRight: "3px",
                      }}
                    ></td>
                  ) : (
                    <td
                      style={{
                        paddingLeft: "3px",
                        paddingRight: "3px",
                      }}
                    >
                      {`${detail.prize}`}
                    </td>
                  )}
                  <td
                    style={{
                      color:
                        detail.win_amount > 0
                          ? detail.type != "TOTAL"
                            ? "#FFF"
                            : "#3BE800"
                          : "#4C4D66",
                    }}
                  >{`${StringUtility.formatNumberCurrency(
                    detail.win_amount,
                    ""
                  )}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </button>
  );
};

function MenuHistoryList() {
  const isLandscape = useSelector((state: StateMainPage) => state.landscape);
  const lookForToday = useSelector(
    (state: StateMainPage) => state.isHistoryToday
  );
  const [transaction, setTransData] = useState(new Array<Transaction>());
  const [groupedReact, setGroupReact] = useState<HistoryMapDictionary>({});
  async function callTransactions() {
    const queryDate: string = lookForToday
      ? `&date=${StringUtility.getCurrentDateFormatted()}`
      : "";
    const call = await fetch(
      `${import.meta.env.VITE_URL_REST}${
        import.meta.env.VITE_HISTORY_PATH
      }?game=${import.meta.env.VITE_GAME_CODE}&page=${1}${queryDate}`,
      {
        method: "GET",
        headers: {},
        body: null,
      }
    );
    if (!call.ok) {
      throw new Error("Error can't reach the server");
    }
    const data = await call.json();
    setTransData(data.transaction);
  }

  useEffect(() => {
    callTransactions();
  }, [lookForToday]);

  useEffect(() => {
    const tmpGroupedData: { [key: string]: Transaction[] } = {};
    const tmpGroupedReact: HistoryMapDictionary = {};
    transaction.forEach((item) => {
      const dateOnly = item.tglbel.split("T")[0];
      if (!tmpGroupedData[dateOnly]) {
        tmpGroupedData[dateOnly] = [];
      }
      tmpGroupedData[dateOnly].push(item);
    });
    for (const date in tmpGroupedData) {
      if (tmpGroupedData.hasOwnProperty(date)) {
        console.log(`Date: ${date}`);
        const tmpRenderItem: Array<React.ReactNode> = [];
        if (!tmpGroupedReact[date]) {
          tmpGroupedReact[date] = [];
        }
        const group = tmpGroupedData[date];
        group.map((trans, index) =>
          tmpRenderItem.push(
            <HistoryItem
              id={"#" + trans.periode}
              dateTime={StringUtility.stringToDateTime(trans.tglbel)}
              title="Europe Baccarat"
              bankerNumber={6}
              playerNumber={9}
              winAmount={trans.total_transaction}
              betAmount={trans.total_debit}
              index={index}
              isBottom={index == transaction.length - 1}
              winner={
                trans.detail_result == null ? "" : trans.detail_result.result
              }
              slotCardP={
                trans.detail_result == null
                  ? "x-x-x"
                  : trans.detail_result.player
              }
              slotCardB={
                trans.detail_result == null
                  ? "x-x-x"
                  : trans.detail_result.banker
              }
              detailBetting={trans.detail_betting}
            />
          )
        );
        tmpGroupedReact[date] = tmpRenderItem;
      }
    }

    setGroupReact(tmpGroupedReact);
  }, [transaction]);

  return (
    <div
      className={`${isLandscape ? "customscrollbar" : ""}`}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: "0.6rem",
        flex: "6",
        padding: "1.2rem 1.2rem 3.2rem 1.2rem",
        marginTop: "0.5rem",
        overflow: "hidden scroll",
        zIndex: "-1",
      }}
    >
      {Object.keys(groupedReact).map((key) => (
        <div
          style={{
            width: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          {!lookForToday ? (
            <p
              style={{
                color: "#FFF",
                fontFamily: "ManropeCustom",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "17px",
                letterSpacing: "0.28px",
                paddingLeft: "12px",
                margin: "0px 0px 12px 0px",
              }}
            >
              {StringUtility.getHistoryDateTitle(key)}
            </p>
          ) : (
            <></>
          )}
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
              position: "relative",
            }}
          >
            {groupedReact[key].map((trans) => trans)}
          </div>
        </div>
      ))}
    </div>
  );
}

function MenuHistoryTabSelection() {
  const isTodaySelected = useSelector(
    (state: StateMainPage) => state.isHistoryToday
  );
  const dispatchBetAction = useDispatch();
  return (
    <>
      <button
        style={{
          flex: "1",
          background: "none",
          border: "none",
          padding: "8px 8px 14px 8px",
          borderBottom: isTodaySelected
            ? "1px solid #00C3D8"
            : "1px solid #2B2C3D",
        }}
        onClick={() => {
          dispatchBetAction({
            type: "setActiveHistoryToday",
            isHistoryToday: true,
          });
        }}
      >
        <Label
          style={{
            padding: "0px",
            margin: "0px",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "ManropeCustom",
            fontSize: "1.2rem",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "normal",
          }}
          value="%today%"
        />
      </button>
      <button
        style={{
          flex: "1",
          background: "none",
          border: "none",
          padding: "8px 8px 14px 8px",
          borderBottom: !isTodaySelected
            ? "1px solid #00C3D8"
            : "1px solid #2B2C3D",
        }}
        onClick={() => {
          dispatchBetAction({
            type: "setActiveHistoryToday",
            isHistoryToday: false,
          });
        }}
      >
        <Label
          style={{
            padding: "0px",
            margin: "0px",
            color: "#FFF",
            textAlign: "center",
            fontFamily: "ManropeCustom",
            fontSize: "1.2rem",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "normal",
          }}
          value="%previous%"
        />
      </button>
    </>
  );
}

export const MenuHistoryPage: React.FC<MenuHistoryParams> = ({ show }) => {
  const isLandscape = useSelector((state: StateMainPage) => state.landscape);
  const [hiddenUI, setVisibleUI] = useState(true);
  const handleAnimationStart = (
    event: React.AnimationEvent<HTMLDivElement>
  ) => {
    const animationName = event.animationName;
    if (
      animationName == "settingsmenu-slideup" ||
      animationName == "settingsmenu-slideleft"
    ) {
      setVisibleUI(false);
    }
  };
  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    const animationName = event.animationName;
    if (
      animationName == "settingsmenu-slidedown" ||
      animationName == "settingsmenu-slideright"
    ) {
      setVisibleUI(true);
    }
  };
  if (hiddenUI && show == false) return <></>;

  return (
    <div
      className={`${
        isLandscape == true ? "landscape-" : ""
      }menu-history-mainframe${show == true ? "" : " disappear"}`}
      style={{
        height: isLandscape ? "100%" : "90%",
      }}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
    >
      <MenuGenericHeader title="%history%" stateMenu="setActiveHistory">
        <MenuHistoryTabSelection />
      </MenuGenericHeader>
      <MenuHistoryList />
      <MenuFooterContainer />
    </div>
  );
};
