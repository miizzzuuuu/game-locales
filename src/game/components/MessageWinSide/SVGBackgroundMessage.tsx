import { CSSProperties } from 'react';
import { MessageWinSideType } from '../../../types';

interface IProps {
    style?: CSSProperties;
    className?: string;
    type?: MessageWinSideType | 'none';
}

const SVGBackgroundMessageWinSide = ({ className, style, type = 'none' }: IProps) => {
    const typeMessage = type;

    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className={className}
            style={style}
            viewBox="0 0 150 25"
        >
            <g filter={`url(#filter0-${typeMessage})`}>
                <rect width="150" height="25" fill={`url(#paint0-${typeMessage})`} />
                <rect
                    x="0.375"
                    y="0.375"
                    width="149.25"
                    height="24.25"
                    stroke={`url(#paint1-${typeMessage})`}
                    stroke-width="0.75"
                />

                <g style={{ mixBlendMode: 'soft-light' }}>
                    <mask
                        id="mask-win-side"
                        width="150"
                        height="25"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: 'alpha' }}
                    >
                        <path
                            fill={`url(#paint2-${typeMessage})`}
                            fillOpacity="0.7"
                            d="M0 0h150v25H0z"
                        ></path>
                    </mask>
                    <g fill="#E60045" mask="url(#mask-win-side)">
                        <path d="m4.167 0 4.167 4.167-4.167 4.167L0 4.167z"></path>
                        <path d="m12.5 0 4.167 4.167L12.5 8.334 8.333 4.167z"></path>
                        <path d="M20.833 0 25 4.167l-4.167 4.167-4.167-4.167zM29.167 0l4.167 4.167-4.167 4.167L25 4.167z"></path>
                        <path d="m37.5 0 4.167 4.167L37.5 8.334l-4.167-4.167z"></path>
                        <path d="M45.833 0 50 4.167l-4.167 4.167-4.167-4.167zM54.167 0l4.167 4.167-4.167 4.167L50 4.167z"></path>
                        <path d="m62.5 0 4.167 4.167L62.5 8.334l-4.167-4.167z"></path>
                        <path d="M70.833 0 75 4.167l-4.167 4.167-4.167-4.167zM79.167 0l4.167 4.167-4.167 4.167L75 4.167z"></path>
                        <path d="m87.5 0 4.167 4.167L87.5 8.334l-4.167-4.167z"></path>
                        <path d="M95.833 0 100 4.167l-4.167 4.167-4.167-4.167zM104.167 0l4.167 4.167-4.167 4.167L100 4.167z"></path>
                        <path d="m112.5 0 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M120.833 0 125 4.167l-4.167 4.167-4.167-4.167zM129.167 0l4.167 4.167-4.167 4.167L125 4.167z"></path>
                        <path d="m137.5 0 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M145.833 0 150 4.167l-4.167 4.167-4.167-4.167zM4.167 8.333 8.334 12.5l-4.167 4.167L0 12.5z"></path>
                        <path d="m12.5 8.333 4.167 4.167-4.167 4.167L8.333 12.5z"></path>
                        <path d="M20.833 8.333 25 12.5l-4.167 4.167-4.167-4.167zM29.167 8.333l4.167 4.167-4.167 4.167L25 12.5z"></path>
                        <path d="m37.5 8.333 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M45.833 8.333 50 12.5l-4.167 4.167-4.167-4.167zM54.167 8.333l4.167 4.167-4.167 4.167L50 12.5z"></path>
                        <path d="m62.5 8.333 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M70.833 8.333 75 12.5l-4.167 4.167-4.167-4.167zM79.167 8.333l4.167 4.167-4.167 4.167L75 12.5z"></path>
                        <path d="m87.5 8.333 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M95.833 8.333 100 12.5l-4.167 4.167-4.167-4.167zM104.167 8.333l4.167 4.167-4.167 4.167L100 12.5z"></path>
                        <path d="m112.5 8.333 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M120.833 8.333 125 12.5l-4.167 4.167-4.167-4.167zM129.167 8.333l4.167 4.167-4.167 4.167L125 12.5z"></path>
                        <path d="m137.5 8.333 4.167 4.167-4.167 4.167-4.167-4.167z"></path>
                        <path d="M145.833 8.333 150 12.5l-4.167 4.167-4.167-4.167zM4.167 16.667l4.167 4.167-4.167 4.167L0 20.834zM12.5 16.667l4.167 4.167L12.5 25l-4.167-4.167z"></path>
                        <path d="M20.833 16.667 25 20.834 20.833 25l-4.167-4.167zM29.167 16.667l4.167 4.167-4.167 4.167L25 20.834z"></path>
                        <path d="m37.5 16.667 4.167 4.167L37.5 25l-4.167-4.167z"></path>
                        <path d="M45.833 16.667 50 20.834 45.833 25l-4.167-4.167zM54.167 16.667l4.167 4.167-4.167 4.167L50 20.834z"></path>
                        <path d="m62.5 16.667 4.167 4.167L62.5 25l-4.167-4.167z"></path>
                        <path d="M70.833 16.667 75 20.834 70.833 25l-4.167-4.167zM79.167 16.667l4.167 4.167-4.167 4.167L75 20.834z"></path>
                        <path d="m87.5 16.667 4.167 4.167L87.5 25l-4.167-4.167z"></path>
                        <path d="M95.833 16.667 100 20.834 95.833 25l-4.167-4.167zM104.167 16.667l4.167 4.167L104.167 25 100 20.834z"></path>
                        <path d="m112.5 16.667 4.167 4.167L112.5 25l-4.167-4.167z"></path>
                        <path d="M120.833 16.667 125 20.834 120.833 25l-4.167-4.167zM129.167 16.667l4.167 4.167L129.167 25 125 20.834z"></path>
                        <path d="m137.5 16.667 4.167 4.167L137.5 25l-4.167-4.167z"></path>
                        <path d="M145.833 16.667 150 20.834 145.833 25l-4.167-4.167z"></path>
                    </g>
                </g>
            </g>
            <defs>
                <radialGradient
                    id="paint2-win-dragon"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(74.6781 0 0 137.898 75.322 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E18400"></stop>
                    <stop offset="0.342" stopColor="#E18400" stopOpacity="0.7"></stop>
                    <stop offset="0.902" stopColor="#E18400" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint2-win-tiger"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(74.6781 0 0 137.898 75.322 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E18400"></stop>
                    <stop offset="0.342" stopColor="#E18400" stopOpacity="0.7"></stop>
                    <stop offset="0.902" stopColor="#E18400" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint2-win-tie"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(59.7425 0 0 137.898 60.258 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#0097A7"></stop>
                    <stop offset="0.342" stopColor="#0097A7" stopOpacity="0.7"></stop>
                    <stop offset="0.902" stopColor="#0097A7" stopOpacity="0"></stop>
                </radialGradient>

                <radialGradient
                    id="paint0-win-dragon"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(74.6781 0 0 137.898 75.322 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B10035"></stop>
                    <stop offset="0.356" stopColor="#B10035" stopOpacity="0.7"></stop>
                    <stop offset="1" stopColor="#B10035" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1-win-dragon"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(74.6781 0 0 137.898 75.322 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F30049"></stop>
                    <stop offset="1" stopColor="#F30049" stopOpacity="0"></stop>
                </radialGradient>

                <filter
                    id="filter0-win-dragon"
                    width="154"
                    height="29"
                    x="-2"
                    y="-2"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_111_1578"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_111_1578"
                        result="shape"
                    ></feBlend>
                </filter>

                <radialGradient
                    id="paint0-win-tiger"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(74.6781 0 0 137.898 75.322 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D98F00"></stop>
                    <stop offset="0.356" stopColor="#D98F00" stopOpacity="0.7"></stop>
                    <stop offset="1" stopColor="#D98F00" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1-win-tiger"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(74.6781 0 0 137.898 75.322 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFB72C"></stop>
                    <stop offset="1" stopColor="#FFB72C" stopOpacity="0"></stop>
                </radialGradient>

                <filter
                    id="filter0-win-tiger"
                    width="154"
                    height="29"
                    x="-2"
                    y="-2"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_112_1641"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_112_1641"
                        result="shape"
                    ></feBlend>
                </filter>
                <radialGradient
                    id="paint0-win-tie"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(59.7425 0 0 137.898 60.258 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00AE8F"></stop>
                    <stop offset="0.356" stopColor="#00AE8F" stopOpacity="0.7"></stop>
                    <stop offset="1" stopColor="#00AE8F" stopOpacity="0"></stop>
                </radialGradient>
                <radialGradient
                    id="paint1-win-tie"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="matrix(59.7425 0 0 137.898 60.258 12.5)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#01CBA7"></stop>
                    <stop offset="1" stopColor="#01CBA7" stopOpacity="0"></stop>
                </radialGradient>

                <filter
                    id="filter0-win-tie"
                    width="124"
                    height="29"
                    x="-2"
                    y="-2"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_113_1704"
                    ></feComposite>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_113_1704"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </svg>
    );
};

export default SVGBackgroundMessageWinSide;
