import React, { useEffect, useState } from "react";
import { MenuFooterContainer } from "./menupage";
import { StateMainPage } from "../../model/betselection";

import data from "../../../assets/json/ext-paylimit.json";
import LocalizationManager, {
  RootLocal,
} from "../../managers/LocalizationManager";
import { SVGEmptyContent } from "../base/svgemptycontent";
import { MenuGenericHeader } from "./MenuGeneric/menugenericheader";
import { useSelector } from "react-redux";

interface MenuPayLimitParams {
  show: boolean;
}

function MenuPayRuleList() {
  const currentLang = useSelector((state: StateMainPage) => state.currentLang);
  const [loadLocal, setLoadLocal] = useState<RootLocal | null | undefined>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataService = LocalizationManager.getInstance();
        const data = await dataService.getData();
        setLoadLocal(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {}, [loadLocal]);
  return (
    <div
      className="customscrollbar"
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-end",
        gap: "6px",
        flex: "6",
        padding: "12px 12px 32px 12px",
        overflow: "hidden scroll",
        height: "100%",
      }}
    >
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
        <table className="paylimit-table">
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "45%" }} />
            <col style={{ width: "25%" }} />
          </colgroup>
          <thead style={{ background: "#2C2D3F" }}>
            <tr
              style={{
                color: "#FFF",
                fontFamily: "ManropeCustom",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "16px",
                letterSpacing: "0.2px",
                textTransform: "uppercase",
              }}
            >
              <th
                style={{
                  textAlign: "left",
                  paddingLeft: "8px",
                }}
              >
                {data.header.taruhan.find((x) => x.key == currentLang)?.value}
              </th>
              <th>
                {data.header.batas.find((x) => x.key == currentLang)?.value}
              </th>
              <th>
                {
                  data.header.pembayaran.find((x) => x.key == currentLang)
                    ?.value
                }
              </th>
            </tr>
          </thead>
          <tbody
            style={{
              color: "#FFF",
              fontFamily: "ManropeCustom",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              letterSpacing: "0.2px",
            }}
          >
            {data?.body.map((entity) => (
              <tr
                style={
                  entity.backgroundColor == ""
                    ? {}
                    : { background: entity.backgroundColor }
                }
              >
                <td style={{ textAlign: "left", paddingLeft: "8px" }}>
                  {entity.indent == true ? "\u00A0\u2022\u00A0" : ""}
                  {LocalizationManager.localizeValue(
                    entity.taruhan,
                    currentLang,
                    loadLocal
                  )}
                </td>
                <td style={{ textAlign: "center", color: "#00C3D8" }}>
                  {LocalizationManager.localizeValue(
                    entity.limit,
                    currentLang,
                    loadLocal
                  )}
                </td>
                <td
                  style={
                    entity.payment == "empty"
                      ? { position: "relative" }
                      : { textAlign: "center" }
                  }
                >
                  {entity.payment == "empty" ? (
                    <SVGEmptyContent
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        overflow: "hidden hidden",
                      }}
                    />
                  ) : (
                    entity.payment
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const MenuPayLimit: React.FC<MenuPayLimitParams> = ({ show }) => {
  const isLandscape = useSelector((state: StateMainPage) => state.landscape);
  const [hiddenUI, setVisibleUI] = useState(true);
  const handleAnimationStart = (
    event: React.AnimationEvent<HTMLDivElement>
  ) => {
    const animationName = event.animationName;
    if (
      animationName == "generalmenu-slideup" ||
      animationName == "generalmenu-slideleft"
    ) {
      setVisibleUI(false);
    }
  };
  const handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    const animationName = event.animationName;
    if (
      animationName == "generalmenu-slidedown" ||
      animationName == "generalmenu-slideright"
    ) {
      setVisibleUI(true);
    }
  };

  if (hiddenUI && show == false) return <></>;

  return (
    <div
      className={`${
        isLandscape == true ? "landscape-" : ""
      }menu-general-mainframe${show == true ? "" : " disappear"}`}
      style={{
        height: isLandscape ? "100%" : "90%",
      }}
      onAnimationEnd={handleAnimationEnd}
      onAnimationStart={handleAnimationStart}
    >
      <MenuGenericHeader
        title="%paylimit%"
        stateMenu="setActivePayRule"
      ></MenuGenericHeader>
      <MenuPayRuleList />
      <MenuFooterContainer />
    </div>
  );
};
