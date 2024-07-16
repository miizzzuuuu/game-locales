import { useDispatch } from "react-redux";
import { Panel } from "../base/panel";
import { SVGStatistic } from "../base/svgstatistic";
import { NavigationButton } from "./navbutton";
import { SVGMenuBar } from "../base/svgmenubar";

export function OtherMenu() {
  //const selectedBetState = useSelector((state: StateBetSelection) => state);
  const dispatchBetAction = useDispatch();
  return (
    <Panel className="othermenu-panel-landscape">
      <NavigationButton
        overrideclass={true}
        onClick={() => {
          dispatchBetAction({
            type: "setActiveRoadmap",
            showRoadmap: true,
          });
        }}
        className="btn-nav"
        title="%roadmap%"
        width="34px"
        height="34px"
        disabled={false}
        svgicon={<SVGStatistic />}
      />
      <NavigationButton
        overrideclass={true}
        onClick={() => {
          dispatchBetAction({
            type: "setActiveMenu",
            onShow: true,
          });
        }}
        className="btn-nav"
        title="%menu%"
        width="34px"
        height="34px"
        disabled={false}
        svgicon={<SVGMenuBar />}
      />
    </Panel>
  );
}
