import { CSSProperties } from 'react';

interface IProps {
    style?: CSSProperties;
    className?: string;
    color?: string;
}

const SVGIconX = ({ style, className, color }: IProps) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
    >
        <path
            d="M18 6L6 18M6 6L18 18"
            stroke={color ? color : '#fff'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SVGIconX;
