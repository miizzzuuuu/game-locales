import React from "react";
import { SVGRenderer } from "./svg";

export class SVGBankBonusTitle extends SVGRenderer {
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
          d="M0.5 17C0.5 7.8873 7.8873 0.5 17 0.5H109C112.038 0.5 114.5 2.96243 114.5 6V17V26C114.5 26.8284 113.828 27.5 113 27.5H2C1.17157 27.5 0.5 26.8284 0.5 26V17Z"
          fill="url(#paint0_linear_570_8006)"
        />
        <path
          d="M0.5 17C0.5 7.8873 7.8873 0.5 17 0.5H109C112.038 0.5 114.5 2.96243 114.5 6V17V26C114.5 26.8284 113.828 27.5 113 27.5H2C1.17157 27.5 0.5 26.8284 0.5 26V17Z"
          fill="url(#paint1_linear_570_8006)"
        />
        <path
          d="M0.5 17C0.5 7.8873 7.8873 0.5 17 0.5H109C112.038 0.5 114.5 2.96243 114.5 6V17V26C114.5 26.8284 113.828 27.5 113 27.5H2C1.17157 27.5 0.5 26.8284 0.5 26V17Z"
          stroke="#F30049"
        />
        <defs>
          <linearGradient
            id="paint0_linear_570_8006"
            x1="100.653"
            y1="14.0797"
            x2="-0.718945"
            y2="14.0797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2F0003" />
            <stop offset="1" stop-color="#C00000" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_570_8006"
            x1="115.827"
            y1="14.0797"
            x2="-0.827329"
            y2="14.0797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#59001B" />
            <stop offset="1" stop-color="#F30049" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}
