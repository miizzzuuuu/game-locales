import React from "react";
import { SVGRenderer } from "./svg";

export class SVGPlayerBonusTitle extends SVGRenderer {
  public render(): React.ReactNode {
    return (
      <svg
        width="100%"
        height="30px"
        viewBox="0 0 115 28"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M114.45 16.9985V17V26C114.45 26.8284 113.778 27.5 112.95 27.5H2C1.17157 27.5 0.5 26.8284 0.5 26V6C0.5 2.96243 2.96243 0.5 6 0.5H97.9999C107.104 0.5 114.477 7.89454 114.45 16.9985Z"
          fill="url(#paint0_linear_570_7976)"
        />
        <path
          d="M114.45 16.9985V17V26C114.45 26.8284 113.778 27.5 112.95 27.5H2C1.17157 27.5 0.5 26.8284 0.5 26V6C0.5 2.96243 2.96243 0.5 6 0.5H97.9999C107.104 0.5 114.477 7.89454 114.45 16.9985Z"
          fill="url(#paint1_linear_570_7976)"
        />
        <path
          d="M114.45 16.9985V17V26C114.45 26.8284 113.778 27.5 112.95 27.5H2C1.17157 27.5 0.5 26.8284 0.5 26V6C0.5 2.96243 2.96243 0.5 6 0.5H97.9999C107.104 0.5 114.477 7.89454 114.45 16.9985Z"
          stroke="#0189DE"
        />
        <defs>
          <linearGradient
            id="paint0_linear_570_7976"
            x1="139.816"
            y1="14.0797"
            x2="-24.8158"
            y2="14.0797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#04A7CA" />
            <stop offset="1" stop-color="#001E87" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_570_7976"
            x1="139.816"
            y1="14.0797"
            x2="-24.8158"
            y2="14.0797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#009DF5" />
            <stop offset="1" stop-color="#012468" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}
