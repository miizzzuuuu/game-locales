import { ReactNode } from "react";
import { SVGRenderer } from "./svg";

export class SVGMenuBar extends SVGRenderer {
  public render(): ReactNode {
    return (
      <svg width="60%" height="60%" viewBox="0 0 20 20" fill="none">
        <path
          d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
          stroke="white"
          stroke-width="1.875"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
