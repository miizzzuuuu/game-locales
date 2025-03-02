import { useTranslation } from 'react-i18next';

const SVGTotalBet = () => {
    const { t } = useTranslation();

    return (
        <svg
            width="134"
            height="42"
            viewBox="0 0 134 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2 41.5H1.28533L1.53029 40.8286L13.2472 8.71547C15.0472 3.78223 19.7387 0.5 24.99 0.5H109.01C114.261 0.5 118.953 3.78223 120.753 8.71547L132.47 40.8286L132.715 41.5H132H2Z"
                fill="url(#paint0_linear_375_208)"
                stroke="url(#paint1_linear_375_208)"
            />
            <text
                x={67}
                width={134}
                y="13"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="8"
                fontWeight="500"
                letterSpacing="0em"
                style={{ textTransform: 'capitalize' }}
            >
                {t('total-bet')}
            </text>
            <text
                fill="#00C3D8"
                fontFamily="Manrope"
                fontSize="12"
                fontWeight="800"
                letterSpacing="-0.02em"
            >
                <tspan x="62" y="30.64">
                    0
                </tspan>
            </text>
            <defs>
                <linearGradient
                    id="paint0_linear_375_208"
                    x1="74"
                    y1="41"
                    x2="74"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#343650" stopOpacity="0" />
                    <stop offset="1" stopColor="#343650" stopOpacity="0.56" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_375_208"
                    x1="74"
                    y1="41"
                    x2="74"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#343650" stopOpacity="0" />
                    <stop offset="1" stopColor="#343650" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SVGTotalBet;
