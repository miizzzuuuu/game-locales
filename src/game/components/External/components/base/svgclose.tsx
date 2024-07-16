import { ReactNode } from "react";
import { SVGRenderer } from "./svg";

export class SVGClose extends SVGRenderer {
  public render(): ReactNode {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 7L7 21M7 7L21 21"
          stroke="#F10149"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
