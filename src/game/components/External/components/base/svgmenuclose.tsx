export function SVGMenuClose(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      style={props.style}
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#6B6C80"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
