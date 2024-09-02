import React from "react";
import { RenderObject } from "../../MainArea/renderObject";

export class Label extends RenderObject<any> {
  public render(): React.ReactNode {
    return (
      <p className={this.props.className} style={this.props.style}>
        {this.props.value}
      </p>
    );
  }
}
