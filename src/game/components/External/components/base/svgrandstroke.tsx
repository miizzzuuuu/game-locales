interface SVGRandStrokeParam {
  color?: string;
  width?: string;
  height?: string;
  roundMode?: boolean;
  style?: React.CSSProperties | undefined;
}
export const SVGRandStroke: React.FC<SVGRandStrokeParam> = ({
  color = "#0180D3",
  width = "7",
  height = "6",
  roundMode = false,
  style = undefined,
}) => {
  if (roundMode) {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 5 5"
          fill="none"
          style={style}
        >
          <path
            d="M0.75 4.25L4.25 0.75"
            stroke={color}
            stroke-width="1.2"
            stroke-linecap="round"
          />
        </svg>
      </>
    );
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 7 6"
        fill="none"
      >
        <path
          d="M6.36337 0.45459L1.27246 5.5455"
          stroke={color}
          stroke-width="0.954546"
        />
      </svg>
    </>
  );
};
