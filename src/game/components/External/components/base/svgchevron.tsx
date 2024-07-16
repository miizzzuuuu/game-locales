import React from "react";
import { SVGRenderer } from "./svg";

export class Chevron extends SVGRenderer {
  public render(): React.ReactNode {
    return !this.props.reverse ? (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 11.3332L7.33333 7.99984L4 4.6665"
          stroke="#FFC700"
          stroke-opacity="0.4"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.6665 11.3332L11.9998 7.99984L8.6665 4.6665"
          stroke="#FFC700"
          stroke-opacity="0.4"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M12 4.66683L8.66667 8.00016L12 11.3335"
          stroke="#FFC700"
          stroke-opacity="0.4"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.33325 4.66683L3.99992 8.00016L7.33325 11.3335"
          stroke="#FFC700"
          stroke-opacity="0.4"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
