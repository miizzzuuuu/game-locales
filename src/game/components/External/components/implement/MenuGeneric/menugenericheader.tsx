import React from "react";
import { useDispatch } from "react-redux";
import { Label } from "../../base/label";
import { SVGIconChevronDown } from "../../base/svgiconchevrondown";
import { SVGMenuClose } from "../../base/svgmenuclose";

interface MenuHeaderParam {
  title?: string;
  children?: React.ReactNode | null | undefined;
  stateMenu?: string;
}

export const MenuGenericTitleContainer: React.FC<MenuHeaderParam> = ({
  title = "",
  children = null,
  stateMenu = "",
}) => {
  const dispatchBetAction = useDispatch();
  return (
    <>
      <Label
        style={{
          color: "#FFF",
          textAlign: "center",
          fontFamily: "ManropeCustom",
          fontSize: "1.6rem",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          margin: "0",
        }}
        value={title}
      />
      <button
        className="rbutton"
        style={{
          position: "absolute",
          left: "0.8rem",
          top: "0.8rem",
          border: "none",
          width: "2.4rem",
          height: "2.4rem",
          padding: "0",
          background: "rgba(0, 0, 0, 0)",
          transform: "rotateZ(90deg)",
        }}
        onClick={() => {
          dispatchBetAction({
            type: stateMenu,
            onShow: false,
          });
        }}
      >
        <SVGIconChevronDown
          style={{
            width: "100%",
            height: "100%",
          }}
          color="#6B6C80"
        />
      </button>
      <button
        className="rbutton"
        style={{
          position: "absolute",
          right: "0.8rem",
          top: "0.8rem",
          border: "none",
          width: "2.4rem",
          height: "2.4rem",
          padding: "0",
          background: "rgba(0, 0, 0, 0)",
        }}
        onClick={() => {
          dispatchBetAction({
            type: stateMenu,
            onShow: false,
          });
          dispatchBetAction({
            type: "setActiveMenu",
            onShow: false,
          });
        }}
      >
        <SVGMenuClose
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </button>
      {children}
    </>
  );
};

export const MenuGenericHeader: React.FC<MenuHeaderParam> = ({
  title = "",
  children = null,
  stateMenu = "",
}) => {
  return (
    <div
      className="menu-options-container"
      style={{
        flexShrink: "0",
        zIndex: "1",
        borderBottom: "0.1rem solid #2B2C3D",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "1.2rem",
          padding: "0",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
          flexShrink: "0",
          backgroundColor: "#222334",
        }}
      >
        <div
          style={{
            width: "3.2rem",
            height: "0.3rem",
            flexShrink: "0",
            borderRadius: "0.2rem",
            background: "#343547",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          boxSizing: "border-box",
          width: "100%",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexShrink: "0",
          backgroundColor: "#222334",
        }}
      >
        <MenuGenericTitleContainer title={title} stateMenu={stateMenu} />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          boxSizing: "border-box",
          width: "100%",
          padding: "0",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
          flexShrink: "0",
          backgroundColor: "#222334",
        }}
      >
        {children}
      </div>
    </div>
  );
};
