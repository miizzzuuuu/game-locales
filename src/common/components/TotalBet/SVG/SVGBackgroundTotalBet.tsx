import { SVGProps } from 'react';

const SVGBackgroundTotalBet = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 134 42" fill="none" {...props}>
        <path
            d="M2 41.5H1.28533L1.53029 40.8286L13.2472 8.71547C15.0472 3.78223 19.7387 0.5 24.99 0.5H109.01C114.261 0.5 118.953 3.78223 120.753 8.71547L132.47 40.8286L132.715 41.5H132H2Z"
            fill="url(#paint0_linear_49_1060)"
            stroke="url(#paint1_linear_49_1060)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_49_1060"
                x1={74}
                y1={41}
                x2={74}
                y2={1}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="var(--background-total-bet-bg-1, transparent)" stopOpacity={1} />
                <stop
                    offset={1}
                    stopColor="var(--background-total-bet-bg-2, rgba(52, 54, 80, 0.56))"
                    stopOpacity={1}
                />
            </linearGradient>
            <linearGradient
                id="paint1_linear_49_1060"
                x1={74}
                y1={41}
                x2={74}
                y2={1}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="var(--border-total-bet-bg-1, #343650)" stopOpacity={1} />
                <stop
                    offset={1}
                    stopColor="var(--border-total-bet-bg-2, #343650)"
                    stopOpacity={1}
                />
            </linearGradient>
        </defs>
    </svg>
);

export default SVGBackgroundTotalBet;
