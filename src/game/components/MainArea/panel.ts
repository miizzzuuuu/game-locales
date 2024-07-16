import React from "react";
import { RenderObject } from "./renderObject";

export class Panel extends RenderObject<any> {
  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactNode {
    this.cacheElement = React.createElement(
      "div",
      this.props,
      this.props.children
    );
    return this.cacheElement;
  }
}
