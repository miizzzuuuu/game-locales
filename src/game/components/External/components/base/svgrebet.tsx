import { ReactNode } from "react";
import { SVGRenderer } from "./svg";

export class SVGRebet extends SVGRenderer {
  public render(): ReactNode {
    return (
      <svg width="60%" height="60%" viewBox="0 0 21 20" fill="none">
        <path
          d="M7.95498 16.4733C9.95426 17.3603 12.3355 17.3121 14.3746 16.1348C17.7625 14.1788 18.9233 9.84667 16.9673 6.45876L16.759 6.09792M4.69823 13.5422C2.74222 10.1543 3.903 5.82219 7.29091 3.86618C9.33006 2.68888 11.7113 2.64071 13.7106 3.52768M2.91064 13.6119L5.18735 14.2219L5.7974 11.9452M15.8683 8.05528L16.4784 5.77857L18.7551 6.38861"
          stroke="white"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
}
