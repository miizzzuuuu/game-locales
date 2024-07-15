import { SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
  strokeColor: string
}
const SVGIconPattern = (props: IProps) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
           <path
        fill="#fff"
        fillOpacity={props.strokeColor=="#fff"?0.2: 1}
        d="M2 4.941V19.06A2.94 2.94 0 004.941 22H19.06A2.94 2.94 0 0022 19.059V4.94A2.941 2.941 0 0019.059 2H4.94A2.941 2.941 0 002 4.941zm18.823 10.883v3.235a1.765 1.765 0 01-1.764 1.764h-3.236v-5h5zm-6.176 0v5H9.353v-5h5.294zm-6.47 0v5H4.94a1.765 1.765 0 01-1.765-1.765v-3.236h5zm12.646-6.471v5.294h-5V9.353h5zm-6.176 0v5.294H9.353V9.353h5.294zm-6.47 0v5.294h-5V9.353h5zm10.882-6.177a1.765 1.765 0 011.764 1.765v3.235h-5v-5h3.236zm-4.412 0v5H9.353v-5h5.294zm-6.47 0v5h-5V4.941A1.765 1.765 0 014.94 3.176h3.235z"
      ></path>
    
      <path
        stroke={props.strokeColor}
        strokeWidth="0.8"
        d="M12 7.45a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
      ></path>
      <path
        stroke={props.strokeColor}
        d="M5.7 7.45a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM18.3 7.45a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM18.3 20.05a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM18.3 13.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
      ></path>
      <path
        stroke={props.strokeColor}
        strokeWidth="0.8"
        d="M12 13.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
      ></path>
    </svg>
);

export default SVGIconPattern;
