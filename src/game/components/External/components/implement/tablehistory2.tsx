import { Panel } from "../base/panel";
import RoadMap from "./RoadMap/RoadMap";

export function PanelHistory2() {
  return (
    <Panel
      className="customscrollbar"
      style={{
        width: "100%",
        flexShrink: "0",
        padding: "0px 13px 0px 13px",
        margin: "0px",
        position: "relative",
        overflowX: "visible",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        boxSizing: "border-box",
      }}
      children={[<RoadMap isLandscape={false} />]}
    />
  );
}
