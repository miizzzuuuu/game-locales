import React from "react";
import { SVGRenderer } from "./svg";

export class SVGUserIcon extends SVGRenderer {
  public render(): React.ReactNode {
    return (
      <div
        style={{
          display: "flex",
          width: "8px",
          height: "8px",
          padding: "0px 0.364px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.364px",
        }}
      >
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none">
          <path
            d="M1.99991 0.0795898C1.15401 0.0795898 0.46582 0.767783 0.46582 1.61368C0.46582 2.45958 1.15401 3.14777 1.99991 3.14777C2.84581 3.14777 3.534 2.45958 3.534 1.61368C3.534 0.767783 2.84581 0.0795898 1.99991 0.0795898Z"
            fill={this.props.fillColor}
          />
        </svg>
        <svg width="6" height="3" viewBox="0 0 6 3" fill="none">
          <path
            d="M4.90888 1.17254C4.48888 0.746083 3.9321 0.51123 3.34109 0.51123H2.65927C2.06827 0.51123 1.51147 0.746083 1.09147 1.17254C0.67353 1.5969 0.443359 2.15706 0.443359 2.74987C0.443359 2.844 0.519678 2.92032 0.613814 2.92032H5.38654C5.48068 2.92032 5.557 2.844 5.557 2.74987C5.557 2.15706 5.32683 1.5969 4.90888 1.17254Z"
            fill={this.props.fillColor}
          />
        </svg>
      </div>
    );
  }
}
