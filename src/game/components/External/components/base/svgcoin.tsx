import { useSelector } from "react-redux";
import { StateMainPage } from "../../model/betselection";

export function SVGCoin(props: any) {
  const selectedBetState = useSelector((state: StateMainPage) => state);
  const disabledPass = props.disabled == undefined ? false : props.disabled;
  return (
    <div
      className={`coin-item ${selectedBetState.landscape == true ? "" : ""}`}
      style={
        selectedBetState.landscape == true
          ? {
              position: "relative",
              width: "100%",
              flex: "0 0 36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : {
              position: "relative",
              flex: "1 0 36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
      }
    >
      <button
        disabled={disabledPass}
        onClick={props.onClick}
        style={{
          flex: "1",
          position: "relative",
          border: "none",
          backgroundColor: "rgba(0, 0, 0, 0)",
          padding: "0px" /* Remove default padding */,
          margin: "0px" /* Remove default margin */,
          boxSizing: "border-box",
        }}
      >
        <div
          className={`coin-container-render${
            selectedBetState.landscape ? "l" : ""
          } ${props.pressed ? "selected" : ""}`}
          style={{
            position: "relative",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 58 58"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <g
              className={`coin-core-outline ${props.pressed ? "show" : ""}`}
              filter="url(#filter0_bd_1023_71804)"
            >
              <path
                d="M29.0001 53C42.255 53 53.0001 42.2548 53.0001 29C53.0001 15.7452 42.255 5 29.0001 5C15.7453 5 5.00012 15.7452 5.00012 29C5.00012 42.2548 15.7453 53 29.0001 53Z"
                fill="#00C3D8"
                fillOpacity="0.5"
                shapeRendering="crispEdges"
              />
              <path
                d="M29.0001 53C42.255 53 53.0001 42.2548 53.0001 29C53.0001 15.7452 42.255 5 29.0001 5C15.7453 5 5.00012 15.7452 5.00012 29C5.00012 42.2548 15.7453 53 29.0001 53Z"
                shapeRendering="crispEdges"
                stroke="#00C3D8"
                strokeWidth="2.51472"
              />
            </g>
            <g className="coin-core" clipPath="url(#clip0_1023_71804)">
              <path
                d="M29.0001 49C40.0458 49 49.0001 40.0457 49.0001 29C49.0001 17.9543 40.0458 9 29.0001 9C17.9544 9 9.00012 17.9543 9.00012 29C9.00012 40.0457 17.9544 49 29.0001 49Z"
                fill={props.fillColor}
              />
              <g clipPath="url(#clip1_1023_71804)">
                <path
                  d="M45.1501 26.2399L48.6801 25.5799C48.3401 23.6199 47.7201 21.7599 46.8601 20.0399L43.6501 21.6499C43.1701 20.6999 42.6101 19.7999 41.9601 18.9699L44.8201 16.7899C43.6101 15.2299 42.1801 13.8499 40.5701 12.6999L38.4201 15.5799C35.7501 13.7099 32.5101 12.5999 29.0101 12.5999C28.0701 12.5999 27.1501 12.6999 26.2501 12.8499L25.5901 9.31995C23.6301 9.65995 21.7701 10.2799 20.0501 11.1399L21.6601 14.3499C20.7101 14.8299 19.8101 15.3899 18.9801 16.0399L16.8001 13.1799C15.2401 14.3899 13.8601 15.8199 12.7101 17.4299L15.5901 19.5799C13.7201 22.2499 12.6101 25.4899 12.6101 28.9899C12.6101 29.9299 12.7101 30.8499 12.8601 31.7499L9.33008 32.4099C9.67008 34.3699 10.2901 36.2299 11.1501 37.9499L14.3601 36.3399C14.8401 37.2899 15.4001 38.1899 16.0501 39.0199L13.1901 41.1999C14.4001 42.7599 15.8301 44.1399 17.4401 45.2899L19.5901 42.4099C22.2601 44.2799 25.5001 45.3899 29.0001 45.3899C29.9401 45.3899 30.8601 45.2899 31.7601 45.1399L32.4201 48.6699C34.3801 48.3299 36.2401 47.7099 37.9601 46.8499L36.3501 43.6399C37.3001 43.1599 38.2001 42.5999 39.0301 41.9499L41.2101 44.8099C42.7701 43.5999 44.1501 42.1699 45.3001 40.5599L42.4201 38.4099C44.2901 35.7399 45.4001 32.4999 45.4001 28.9999C45.4001 28.0599 45.3001 27.1399 45.1501 26.2399Z"
                  fill="url(#paint0_radial_1023_71804)"
                />
              </g>
              <path
                d="M29.0002 42.72C36.5775 42.72 42.7202 36.5774 42.7202 29C42.7202 21.4227 36.5775 15.28 29.0002 15.28C21.4228 15.28 15.2802 21.4227 15.2802 29C15.2802 36.5774 21.4228 42.72 29.0002 42.72Z"
                fill={props.fillColor}
              />
              <path
                d="M29 14.4C20.94 14.4 14.4 20.94 14.4 29C14.4 37.06 20.94 43.6 29 43.6C37.06 43.6 43.6 37.06 43.6 29C43.6 20.94 37.06 14.4 29 14.4ZM29 42.72C21.42 42.72 15.28 36.58 15.28 29C15.28 21.42 21.42 15.28 29 15.28C36.58 15.28 42.72 21.42 42.72 29C42.72 36.58 36.58 42.72 29 42.72Z"
                fill={props.fillColor}
              />
              <path
                d="M29 14.4C20.94 14.4 14.4 20.94 14.4 29C14.4 37.06 20.94 43.6 29 43.6C37.06 43.6 43.6 37.06 43.6 29C43.6 20.94 37.06 14.4 29 14.4ZM29 42.72C21.42 42.72 15.28 36.58 15.28 29C15.28 21.42 21.42 15.28 29 15.28C36.58 15.28 42.72 21.42 42.72 29C42.72 36.58 36.58 42.72 29 42.72Z"
                fill="url(#paint1_radial_1023_71804)"
                opacity="0.32"
              />
              <path
                clipRule="evenodd"
                d="M29.0001 9.6C18.2858 9.6 9.60012 18.2857 9.60012 29C9.60012 39.7143 18.2858 48.4 29.0001 48.4C39.7144 48.4 48.4001 39.7143 48.4001 29C48.4001 18.2857 39.7144 9.6 29.0001 9.6ZM9.00012 29C9.00012 17.9543 17.9544 9 29.0001 9C40.0458 9 49.0001 17.9543 49.0001 29C49.0001 40.0457 40.0458 49 29.0001 49C17.9544 49 9.00012 40.0457 9.00012 29Z"
                fill="url(#paint2_linear_1023_71804)"
                fillOpacity="0.2"
                fillRule="evenodd"
              />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="61.6912"
                id="filter0_bd_1023_71804"
                width="61.6912"
                x="-1.84547"
                y="-1.84559"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="2.79414"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1023_71804"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1.39707" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.847059 0 0 0 0.75 0"
                />
                <feBlend
                  in2="effect1_backgroundBlur_1023_71804"
                  mode="normal"
                  result="effect2_dropShadow_1023_71804"
                />
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1023_71804"
                  mode="normal"
                  result="shape"
                />
              </filter>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(29.0051 28.9949) rotate(90) scale(20.0051)"
                gradientUnits="userSpaceOnUse"
                id="paint0_radial_1023_71804"
                r="1"
              >
                <stop offset="0.730693" stopColor="white" stopOpacity="0.27" />
                <stop offset="0.751167" stopColor="white" stopOpacity="0.69" />
                <stop offset="0.758071" stopColor="white" />
                <stop offset="0.969734" stopColor="white" />
                <stop offset="0.971947" stopColor="white" stopOpacity="0.8" />
                <stop offset="1" stopColor="white" stopOpacity="0.8" />
              </radialGradient>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(29 29) rotate(90) scale(14.6)"
                gradientUnits="userSpaceOnUse"
                id="paint1_radial_1023_71804"
                r="1"
              >
                <stop offset="0.952277" stopOpacity="0" />
                <stop offset="1" />
              </radialGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_1023_71804"
                x1="29.0001"
                x2="29.0001"
                y1="49"
                y2="9"
              >
                <stop />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint3_linear_1023_71804"
                x1="29.0001"
                x2="29.0001"
                y1="22.45"
                y2="34.45"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
              <clipPath id="clip0_1023_71804">
                <rect
                  fill="white"
                  height="40"
                  transform="translate(9.00012 9)"
                  width="40"
                />
              </clipPath>
              <clipPath id="clip1_1023_71804">
                <rect
                  fill="white"
                  height="40"
                  transform="translate(9.00012 9)"
                  width="40"
                />
              </clipPath>
            </defs>
            <text
              x="49%"
              y="52%"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="none"
              stroke={props.fillColor}
              strokeWidth="1.2"
              style={{
                fontFamily: "InterCustom",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "-0.6px",
                margin: "0",
                padding: "0",
                wordWrap: "break-word",
              }}
            >
              {props.text}
            </text>
            <text
              x="49%"
              y="52%"
              text-anchor="middle"
              dominant-baseline="middle"
              fill="white"
              style={{
                fontFamily: "InterCustom",
                fontWeight: "700",
                fontSize: "14px",
                letterSpacing: "-0.6px",
                margin: "0",
                padding: "0",
                wordWrap: "break-word",
              }}
            >
              {props.text}
            </text>
          </svg>
        </div>
      </button>
    </div>
  );
}
