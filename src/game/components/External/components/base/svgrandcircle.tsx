import { ReactNode } from "react";
import { SVGRenderer } from "./svg";

export class SVGRandCircleFilled extends SVGRenderer {
  public render(): ReactNode {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="3.95477" cy="4.00018" r="3.18182" fill="#F10149" />
        </svg>
      </>
    );
  }
}
