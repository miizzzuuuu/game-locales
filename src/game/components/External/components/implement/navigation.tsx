import { useDispatch, useSelector } from "react-redux";
import { SVGMenuBar } from "../base/svgmenubar";
import { SVGMultiply } from "../base/svgmultiply";
import { SVGRebet } from "../base/svgrebet";
import { SVGReturn } from "../base/svgreturn";
import { BetNavigation } from "./betnavigation";
import { NavigationButton } from "./navbutton";
import { StateMainPage } from "../../model/betselection";
import { NavigationToggleButton } from "./navtogglebutton";
import { SVGIconStop } from "../base/svgiconstop";
import { APICommand } from "../../managers/APICommand";

export function NavigationPanel() {
  const selectedBetState = useSelector((state: StateMainPage) => state);
  const dispatchBetAction = useDispatch();
  if (selectedBetState.landscape) {
    return (
      <div className="navbet-panel-landscape">
        <NavigationButton
          overrideclass={true}
          className="btn-nav"
          title="%back%"
          width="34px"
          height="34px"
          disabled={!selectedBetState.panelInteractable}
          svgicon={<SVGReturn />}
          onClick={() => {
            dispatchBetAction({
              type: "returnBet",
            });
          }}
        />
        <NavigationToggleButton
          overrideclass={true}
          className="btn-nav"
          title="%rebet%"
          titleOn="%stop%"
          width="34px"
          height="34px"
          disabled={APICommand.isRebetDisabled(selectedBetState)}
          svgicon={<SVGRebet />}
          svgiconOn={
            <SVGIconStop
              style={{ position: "absolute", width: "100%", height: "100%" }}
            />
          }
          onClick={() => {
            if (!selectedBetState.settings.itemRebetAuto.enable) {
              dispatchBetAction({
                type: "copyGroup",
              });
            } else {
              dispatchBetAction({
                type: "setSettingAutoRebet",
                setting: {
                  enable: !selectedBetState.settings.itemRebetAuto.enable,
                  value: selectedBetState.settings.itemRebetAuto.value,
                },
              });
            }
          }}
          state={selectedBetState.settings.itemRebetAuto.enable}
        />
        <BetNavigation />
        <NavigationButton
          overrideclass={true}
          className="btn-nav"
          title="%double%"
          width="34px"
          height="34px"
          disabled={APICommand.isDoubleDisabled(selectedBetState)}
          svgicon={<SVGMultiply />}
          onClick={() => {
            dispatchBetAction({
              type: "setDouble",
            });
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flex: "0",
        width: "100%",
        padding: "0px 13px",
        justifyContent: "space-between",
        alignItems: "flex-start",
        boxSizing: "border-box",
        position: "relative",
        marginBottom: "2.2rem",
        marginTop: "1.2rem",
      }}
    >
      <NavigationButton
        overrideclass={false}
        title="%menu%"
        width="100%"
        height="100%"
        svgicon={<SVGMenuBar />}
        onClick={() => {
          dispatchBetAction({
            type: "setActiveMenu",
            onShow: !selectedBetState.showMainMenu,
          });
        }}
      />
      <NavigationButton
        overrideclass={false}
        title="%back%"
        width="100%"
        height="100%"
        disabled={!selectedBetState.panelInteractable}
        svgicon={<SVGReturn />}
        onClick={() => {
          dispatchBetAction({
            type: "returnBet",
          });
        }}
      />
      <BetNavigation />
      <NavigationToggleButton
        overrideclass={false}
        title="%rebet%"
        titleOn="%stop%"
        width="100%"
        height="100%"
        disabled={APICommand.isRebetDisabled(selectedBetState)}
        svgicon={<SVGRebet />}
        svgiconOn={
          <SVGIconStop
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        }
        state={selectedBetState.settings.itemRebetAuto.enable}
        onClick={() => {
          if (!selectedBetState.settings.itemRebetAuto.enable) {
            dispatchBetAction({
              type: "copyGroup",
            });
          } else {
            dispatchBetAction({
              type: "setSettingAutoRebet",
              setting: {
                enable: !selectedBetState.settings.itemRebetAuto.enable,
                value: selectedBetState.settings.itemRebetAuto.value,
              },
            });
          }
        }}
      />
      <NavigationButton
        overrideclass={false}
        title="%double%"
        width="100%"
        height="100%"
        disabled={APICommand.isDoubleDisabled(selectedBetState)}
        svgicon={<SVGMultiply />}
        onClick={() => {
          dispatchBetAction({
            type: "setDouble",
          });
        }}
      />
    </div>
  );
}
