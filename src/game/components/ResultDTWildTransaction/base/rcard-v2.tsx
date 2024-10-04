import { StringUtility } from "../../TableBet/RenderCard/StringUtility";


export function RenderCardV2(props: any) {
  let displayValue = StringUtility.splitCharStringToArray(props.value);
  if (displayValue.length < 2) {
    displayValue = ["", ""];
  }
  const displayColor =
    displayValue[1] == "d" || displayValue[1] == "h" ? "#FF0415" : "#121524";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className={`card-slot-v2`}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`card-core-v2`}
          style={{
            position: "absolute",
            width: "100%",
            height: "fit-content",
          }}
        >
          <div
            className={`card-core-detail-v2`}
            style={{
              position: "absolute",
              width: "100%",
              height: "fit-content",
            }}
          >
            <div
              className="card-value-v2"
              style={{
                position: "absolute",
                width: "100%",
                height: "fit-content",
              }}
            >
              <svg
                width="5vw"
                // height="100%"
                viewBox="0 0 100 132"
                fill="none"
                // style={{marginTop: "-50%"}}
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="132" rx="14" fill="white" />
                {/* The Symbol */}
                {/* @ts-ignore */}
                <RenderSymbol symbol={displayValue[1]} />
                {/* The Value */}
                {/* <path
                  d="M9.57305 55L23.193 11.8H33.783L47.4031 55H39.963L27.603 16.24H29.223L17.013 55H9.57305ZM17.163 45.64V38.89H39.843V45.64H17.163Z"
                  fill="#121524"
                /> */}
              </svg>
              <p
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  margin: "-2px 0px 0px 2px",
                  fontFamily: "Manrope",
                  fontSize: "1.4rem",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  color: displayColor,
                  whiteSpace: "nowrap"
                }}
              >
                {displayValue[0] == "T" ? "10" : displayValue[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
