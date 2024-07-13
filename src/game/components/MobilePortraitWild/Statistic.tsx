import M23 from "./../RoadMap/M23";
// import { useAppSelector } from "../../../store/hooks";
import { dummyM22history } from "../RoadMap";
import { pcode } from "../RoadMap/BaccaratRoadmaps";

interface IProps {
  tableSection?: "less" | "more"
  isLandscape?: boolean
}

function ShoeStat(props: IProps) {
  const darkMode = true;
  const historyBlink = false;
  const data = dummyM22history.m23.history;

  // useAppSelector((state) => state.history.history);
  const { isLandscape } = props;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      width: "100%",
      paddingBlock: "1%"
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        fill="none"
        viewBox="0 0 150 12"
      >
         <text
          x={0 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">#10</text>

        <rect width="12" height="12" x="30" fill="#F10149" rx="6"></rect>
        <text
          x={30 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">D</text>

        <text
          x={30 + 15} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">{10}</text>
        <rect width="12" height="12" x="61" fill="#D3942A" rx="6"></rect>
        <text
          x={61 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">T</text>

        <text
          x={61 + 15} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">{10}</text>
        <rect width="12" height="12" x="94" fill="#01C995" rx="6"></rect>
        <text
          x={94 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">T</text>

        <text
          x={94 + 15} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">{10}</text>
      </svg>
      <M23
        darkMode={darkMode}
        historyBlink={historyBlink}
        pcode={pcode}
        history={data}
        full={""}
        isLandscape={isLandscape}
        onClick={() => console.log("")}
        type="predictions" />
    </div>
  );
}

export default ShoeStat;
