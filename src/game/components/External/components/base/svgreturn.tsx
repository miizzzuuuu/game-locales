import { ReactNode } from "react";
import { SVGRenderer } from "./svg";

export class SVGReturn extends SVGRenderer {
  public render(): ReactNode {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60%"
        height="60%"
        viewBox="0 0 21 20"
        fill="none"
      >
        <path
          d="M3 7.50033H14.25C16.3211 7.50033 18 9.17926 18 11.2503C18 13.3214 16.3211 15.0003 14.25 15.0003H10.5M3 7.50033L6.33333 4.16699M3 7.50033L6.33333 10.8337"
          stroke="white"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
