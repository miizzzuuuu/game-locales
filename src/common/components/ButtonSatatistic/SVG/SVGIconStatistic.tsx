import { SVGProps } from 'react';

const SVGIconStatistic = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M15 16.6666V8.33331M10 16.6666V3.33331M5 16.6666V11.6666"
            stroke="white"
            strokeWidth={1.875}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SVGIconStatistic;
