import React from "react";

interface PanelParameter {
  ref?: React.LegacyRef<HTMLDivElement> | undefined;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Panel: React.FC<PanelParameter> = ({
  ref = undefined,
  id = "",
  className = "",
  style = {},
  children = [],
}) => {
  return (
    <div ref={ref} id={id} className={className} style={style}>
      {children}
    </div>
  );
};
