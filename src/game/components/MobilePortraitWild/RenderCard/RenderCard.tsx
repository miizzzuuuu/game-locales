import { RenderSymbol } from "../cardsymbol";
import { StringUtility } from "./StringUtility";
// import { RenderSymbol } from "./cardsymbol";
import "./style.css"
export function RenderCard(props: any) {
  let displayValue = StringUtility.splitCharStringToArray(props.value);
  if (displayValue.length < 2) {
    displayValue = ["", ""];
  }
  const displayColor =
    displayValue[1] == "d" || displayValue[1] == "h" ? "#FF0415" : "#121524";
  return (
    <div
      style={{
        position: "absolute",
        top: `${props.top}`,
        opacity: `${props.opacity}`,
        left: `${props.left}`,
        right: `${props.right}`,
        transform: `perspective(1000px) translate(${props.position.x}, ${props.position.y})`,
        width: "24px",
        height: "31.68px",
      }}
    >
      <div
        className={`card-slot ${props.visible == true ? "" : "disappear"}`}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className={`card-core ${props.submit == true ? "flipup" : ""}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            transform: `perspective(1000px)`,
          }}
        >
          <div
            className={`card-core-detail`}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: `perspective(1000px) rotateZ(${props.rotation.z}) `,
            }}
          >
            <div
              className="card-cover"
              style={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 132"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={100} height={132} rx={14} fill="white" />
                <rect
                  x={10}
                  y={10}
                  width={80}
                  height={112}
                  rx={8}
                  fill="url(#paint0_radial_1_3949)"
                />
                <g filter="url(#filter0_d_1_3949)">
                  <path
                    d="M33.7707 43.9477C32.681 44.5833 32 45.741 32 46.9896V49.9407C32 49.9407 32 49.8953 32.0227 49.8726C32.5675 48.1927 36.0635 49.8726 37.6298 50.6898L38.379 51.0984L64.2579 66.0356C65.8016 65.1503 69.0251 63.0618 67.8901 61.7225C67.8447 61.6543 67.7766 61.5862 67.7312 61.5408L40.649 45.9226L37.2666 43.9704C36.7218 43.6526 36.1089 43.4937 35.5186 43.4937C34.9284 43.4937 34.3155 43.6526 33.7707 43.9704"
                    fill="url(#paint1_linear_1_3949)"
                  />
                  <path
                    d="M67.8911 61.7002C69.0262 63.0395 65.8027 65.128 64.259 66.0134L63.4872 66.4674L37.6309 81.4045C37.6309 83.0617 37.8579 86.9663 39.5151 86.8301L66.688 71.1438L70.252 69.078C71.3417 68.4424 72 67.2846 72 66.0361C72 64.7875 71.319 63.6298 70.252 62.9941L67.7322 61.5413C67.7322 61.5413 67.8457 61.6548 67.8911 61.7229"
                    fill="url(#paint2_linear_1_3949)"
                  />
                  <path
                    d="M32.0227 49.851C32.0227 49.851 32.0227 49.8964 32 49.9191V85.0373C32 86.9896 33.5664 88.556 35.5186 88.556C36.2451 88.556 36.9261 88.3289 37.4936 87.9657L39.5367 86.7853C37.8795 86.9215 37.6752 83.0169 37.6525 81.3598V50.6682C36.5856 50.1007 34.5879 49.1245 33.2713 49.1245C32.681 49.1245 32.227 49.3288 32.0454 49.851"
                    fill="url(#paint3_linear_1_3949)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_3949"
                    x={28}
                    y="41.4937"
                    width={48}
                    height="53.0623"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation={2} />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_3949"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3949"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_1_3949"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(50 12.0741) rotate(90) scale(132.741 379.898)"
                  >
                    <stop stopColor="#4C5378" />
                    <stop offset={1} stopColor="#121524" />
                  </radialGradient>
                  <linearGradient
                    id="paint1_linear_1_3949"
                    x1={32}
                    y1="54.7533"
                    x2="68.1171"
                    y2="54.7533"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#15B586" />
                    <stop offset={1} stopColor="#009FD1" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_3949"
                    x1="37.6309"
                    y1="74.163"
                    x2={72}
                    y2="74.163"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0367DC" />
                    <stop offset={1} stopColor="#894B92" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_3949"
                    x1="35.7683"
                    y1="49.1472"
                    x2="35.7683"
                    y2="88.5787"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0C4B92" />
                    <stop offset={1} stopColor="#0395DE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className="card-value"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",

              }}
            >
              <svg
                width="100%"
                // height="100%"
                viewBox="0 0 100 132"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="132" rx="14" fill="white" />
                {/* @ts-ignore */}
                <RenderSymbol symbol={displayValue[1]} />

              </svg>
              <p
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  margin: "-2px 0px 0px 2px",
                  fontFamily: "Manrope",
                  fontSize: "14.4px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  color: displayColor,
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
