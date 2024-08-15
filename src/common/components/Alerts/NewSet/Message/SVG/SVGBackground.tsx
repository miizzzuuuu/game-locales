import { SVGProps } from 'react';

const SVGBackground = ({ className, style }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 278 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <rect width="278" height="20" rx="2" fill="url(#paint0_linear_533_2381)" />
            <rect
                x="0.5"
                y="0.5"
                width="277"
                height="19"
                rx="1.5"
                stroke="url(#paint1_linear_533_2381)"
                stroke-opacity="0.1"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_533_2381"
                    x1="0"
                    y1="10"
                    x2="278"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.5" stop-color="white" stop-opacity="0.4" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_533_2381"
                    x1="0"
                    y1="10"
                    x2="278"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.5" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SVGBackground;
