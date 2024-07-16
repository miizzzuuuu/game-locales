import React from "react";
import { RenderObject } from "./renderObject";

export class Button extends RenderObject<any> {
  public render(): React.ReactNode {
    const disabledPass =
      this.props.disabled == undefined ? false : this.props.disabled;
    return (
      <button
        className={this.props.className}
        style={this.props.style}
        onClick={this.props.onClick}
        disabled={disabledPass}
      >
        {this.props.text}
        {this.props.children}
      </button>
    );
  }
}
