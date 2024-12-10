import { SVGProps } from 'react';

type IProps = Pick<SVGProps<SVGSVGElement>, 'className' | 'style'> & {
    color?: string;
};

const SVGIconX = ({ className, style, color }: IProps) => (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
    >
        <path
            d="M18 6L6 18M6 6L18 18"
            stroke={color ? color : '#6B6C80'}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SVGIconX;
