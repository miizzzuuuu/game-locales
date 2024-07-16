import React from "react";
import { SVGIconParams } from "../../model/svgiconparams";

export const SVGIconStop: React.FC<SVGIconParams> = ({
  className = "",
  style,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 35 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g filter="url(#filter0_b_2844_5393)">
        <rect
          x="0.5"
          width="34"
          height="34"
          rx="17"
          fill="#FF004D"
          fill-opacity="0.2"
        />
        <rect x="1" y="0.5" width="33" height="33" rx="16.5" stroke="#FF004D" />
        <rect x="11" y="10.5" width="13" height="13" rx="3" fill="#FF004D" />
      </g>
      <defs>
        <filter
          id="filter0_b_2844_5393"
          x="-3.5"
          y="-4"
          width="42"
          height="42"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2844_5393"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2844_5393"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
