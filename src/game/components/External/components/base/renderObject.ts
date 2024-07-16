import React from "react";

export class RenderObject<T> extends React.Component<T> {
  protected cacheElement: any;
  constructor(props: any) {
    super(props);
  }
  public render(): React.ReactNode {
    this.cacheElement = React.createElement("div", this.props, null);
    return this.cacheElement;
  }
}
