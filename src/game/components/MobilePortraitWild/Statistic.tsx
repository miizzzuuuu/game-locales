import M23 from "./../RoadMap/M23";
import { dummyM22history } from "../RoadMap";
import { pcode } from "../RoadMap/BaccaratRoadmaps";
import { useAppSelector } from "../../../store/hooks";

interface IProps {
  tableSection?: "less" | "more"
  isLandscape?: boolean
}

function ShoeStat(props: IProps) {
  const darkMode = true;
  const historyBlink = false;
  const data = dummyM22history.m23.history;
  const periode = 1000 || useAppSelector((state) => state.result.periode);

  // useAppSelector((state) => state.history.history);
  const { isLandscape } = props;
  const a = periode?.toString().length
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
        width="180"
        fill="none"
        viewBox="0 0 180 12"
      >
         <text
          x={0 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">#{periode }</text>

        <rect width="12" height="12" x={a * 10 } fill="#F10149" rx="6"></rect>
        <text
          x={a * 10 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">D</text>

        <text
          x={a * 10 + 15} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">{data.filter(({win})=>win=="dragon").length}</text>
        <rect width="12" height="12" x={a * 10 + 31} fill="#D3942A" rx="6"></rect>
        <text
          x={a * 10+31 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">T</text>

        <text
          x={a * 10+31 + 15} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">{data.filter(({win})=>win=="tiger").length}</text>
        <rect width="12" height="12" x={a * 10 + 64} fill="#01C995" rx="6"></rect>
        <text
          x={a * 10 + 64 + 6 / 2} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">T</text>

        <text
          x={a * 10+64 + 15} y={6 + 6 * 0.65}
          style={{ fontFamily: "Manrope", fontWeight: "500", fontSize: 10 }}
          fill="white">{data.filter(({win})=>win=="tie").length}</text>
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
