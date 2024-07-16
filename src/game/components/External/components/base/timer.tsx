import { useSelector } from "react-redux";
import { Label } from "./label";
import { StateMainPage } from "../../model/betselection";

export function Timer(props: any) {
  const isLandscape = useSelector((state: StateMainPage) => state.landscape);
  const maxValue = props.maxValue;
  const currentValue = props.value;
  const resultRender = 630 - (currentValue / maxValue) * 630;
  return (
    <div
      className={`idtimer ${props.visible == true ? "" : "disappear"}`}
      style={
        !isLandscape
          ? {
              position: "absolute",
              width: "66px",
              height: "66px",
              top: "32%",
              left: "50%",
              zIndex: "3",
              transform: "translate(-50%, -50%)",
            }
          : {
              position: "absolute",
              width: "62px",
              height: "62px",
              top: "40px",
              left: "40px",
              zIndex: "3",
            }
      }
    >
      <div className="circle-timer">
        <div className="dots time_dot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 54 54"
            fill="none"
            style={{
              position: "absolute",
            }}
          >
            <g filter="url(#filter0_b_2397_2992)">
              <path
                d="M52 27C52 40.8071 40.8071 52 27 52C13.1929 52 2 40.8071 2 27C2 13.1929 13.1929 2 27 2C40.8071 2 52 13.1929 52 27Z"
                fill="black"
                fill-opacity="0.5"
              />
              <path
                d="M27 53C41.3594 53 53 41.3594 53 27C53 12.6406 41.3594 1 27 1C12.6406 1 1 12.6406 1 27C1 41.3594 12.6406 53 27 53Z"
                stroke="black"
                stroke-opacity="0.5"
                stroke-width="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2397_2992"
                x="-8"
                y="-8"
                width="70"
                height="70"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2397_2992"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2397_2992"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 250 250"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              transform: "rotate(-90deg)",
            }}
          >
            <circle
              r="90"
              cx="125"
              cy="125"
              fill="transparent"
              stroke="#e0e0e000"
              stroke-width="16px"
              stroke-dasharray="565.48px"
              stroke-dashoffset="0"
            ></circle>
            <circle
              r="100"
              cx="125"
              cy="125"
              stroke="yellow"
              stroke-width="30px"
              stroke-dashoffset={`${resultRender}px`}
              fill="transparent"
              stroke-dasharray="630px"
              style={{
                filter: "drop-shadow(0px 0px 6.667px rgba(84, 252, 21, 0.75))",
              }}
            ></circle>
          </svg>
          <div
            style={{
              position: "absolute",
              width: "80%",
              height: "80%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <Label
              style={{
                position: "absolute",
                top: "15%",
                left: "0px",
                width: "100%",
                transform: "translate(0px, 0px)",
                margin: "auto",
                color: "#FFF",
                textShadow: "0.626px 0px 1.252px rgba(0, 0, 0, 0.50)",
                fontFamily: "ManropeCustom",
                fontSize: "24.444px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                letterSpacing: "-0.733px",
                textTransform: "uppercase",
              }}
              value={`${Math.round(currentValue)}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
