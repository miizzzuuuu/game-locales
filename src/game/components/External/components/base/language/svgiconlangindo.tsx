import React from "react";
import { SVGIconParams } from "../../../model/svgiconparams";

export const SVGIconLangIndo: React.FC<SVGIconParams> = ({
  className,
  style,
}) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <g clip-path="url(#clip0_240_33070)">
        <path
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
          fill="#F0F0F0"
        />
        <path
          d="M0 8C0 3.58222 3.58222 0 8 0C12.4178 0 16 3.58222 16 8"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="clip0_240_33070">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
