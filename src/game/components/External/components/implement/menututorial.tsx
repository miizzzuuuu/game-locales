import React, { useEffect, useState } from "react";
import { StateMainPage } from "../../model/betselection";
import { useSelector } from "react-redux";
import { MenuFooterContainer } from "./menupage";
import { Label } from "../base/label";
import { SVGIconChevronDown } from "../base/svgiconchevrondown";
import { MenuGenericHeader } from "./MenuGeneric/menugenericheader";

interface MenuTutorialParams {
  show: boolean;
}

interface TutorialItemParams {
  index: number;
  isBottom?: boolean;
  title?: string;
  content?: string;
  children?: React.ReactNode | null;
}

const TutorialItem: React.FC<TutorialItemParams> = ({
  index,
  isBottom = false,
  title = "",
  content = "",
  children = null,
}) => {
  const [isOpen, setOpen] = useState(false);
  let borderRadiusStr = "0px";
  if (index == 0) {
    borderRadiusStr = "8px 8px 0px 0px";
    if (isBottom) {
      borderRadiusStr = "8px";
    }
  } else {
    if (isBottom) borderRadiusStr = "0px 0px 8px 8px";
  }
  return (
    <button
      className="tutorial-item"
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
        background: !isOpen ? "none" : "#1E1F2E",
      }}
      onClick={() => {
        setOpen((current) => (current = !current));
      }}
    >
      <div
        className="tutorial-header-item"
        style={{
          flex: "0",
          color: "#FFF",
          fontFamily: "ManropeCustom",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "16px",
          letterSpacing: "0.28px",
          textTransform: "uppercase",
          margin: "0px",
          padding: "0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Label value={title} style={{ margin: "0px", padding: "8px 0px" }} />
        <div
          className={`accordion-icon-content${isOpen ? " open" : " close"}`}
          style={{
            width: "22px",
            height: "22px",
          }}
        >
          <SVGIconChevronDown
            color={isOpen ? "white" : "#6B6C80"}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div
        className={`tutorial-content-item accordion-content${
          isOpen ? " open" : " close"
        }`}
        style={{
          color: "#C8C9DB",
          fontFamily: "ManropeCustom",
          fontSize: "11px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "16px",
          letterSpacing: "0.22px",
        }}
      >
        <Label
          value={content}
          style={{ margin: "0px", padding: "6px 0px", textAlign: "left" }}
        />
        {children}
      </div>
    </button>
  );
};

function MenuTutorialList() {
  useEffect(() => {}, []);
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
        <TutorialItem
          index={0}
          isBottom={true}
          title="%game-goal%"
          content="%game-goal-content%"
        ></TutorialItem>
      </div>
    </div>
  );
}

export const MenuTutorialPage: React.FC<MenuTutorialParams> = ({ show }) => {
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
        title="%how-to-play%"
        stateMenu="setActiveTutorial"
      ></MenuGenericHeader>
      <MenuTutorialList />
      <MenuFooterContainer />
    </div>
  );
};
