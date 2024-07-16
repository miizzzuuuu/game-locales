import React from "react";
import { SVGIconParams } from "../../model/svgiconparams";

export const SVGIconVideo: React.FC<SVGIconParams> = ({ className, style }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      style={style}
    >
      <g clip-path="url(#clip0_240_31898)">
        <path
          d="M11.3129 4.12402H2.18814C0.984637 4.12402 -4.57764e-05 5.10871 -4.57764e-05 6.31221V13.6864C-4.57764e-05 14.8899 0.984637 15.8746 2.18814 15.8746H11.3129C12.5164 15.8746 13.501 14.8899 13.501 13.6864V6.31221C13.501 5.08682 12.5164 4.12402 11.3129 4.12402Z"
          fill="#5E5F73"
        />
        <path
          d="M18.381 5.32821C18.2497 5.3501 18.1185 5.41574 18.009 5.48139L14.5955 7.45075V12.5273L18.0309 14.4967C18.6655 14.8687 19.4532 14.6499 19.8252 14.0153C19.9346 13.8184 20.0003 13.5995 20.0003 13.3588V6.59736C20.0003 5.78773 19.2344 5.13128 18.381 5.32821Z"
          fill="#5E5F73"
        />
      </g>
      <defs>
        <clipPath id="clip0_240_31898">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
