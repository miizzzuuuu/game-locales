import React from "react";
import { SVGIconParams } from "../../model/svgiconparams";

export const SVGIconChevronDown: React.FC<SVGIconParams> = ({
  className,
  style,
  color = "white",
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      style={style}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color}
        stroke-width="1.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
