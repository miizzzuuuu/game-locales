import { ReactNode } from "react";
import { SVGRenderer } from "./svg";

export class SVGRandCircleOutline extends SVGRenderer {
  public render(): ReactNode {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle
            cx="4.091"
            cy="4.00018"
            r="2.70455"
            stroke="#0180D3"
            stroke-width="0.954546"
          />
        </svg>
      </>
    );
  }
}
