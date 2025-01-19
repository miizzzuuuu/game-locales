import { CSSProperties } from 'react';
import { MessageGameType } from '../../../../../types';

interface IProps {
    style?: CSSProperties;
    className?: string;
    type?: MessageGameType;
}

const SVGBackgroundMessage = ({ className, style, type = 'none' }: IProps) => {
    const typeMessage = type === 'no-game' ? 'danger' : type;

    return (
        <svg
            viewBox="0 0 200 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className={className}
            style={style}
        >
            <g filter="url(#filter0_b_787_28752)">
                <rect width={200} height={25} fill={`url(#${typeMessage}-1)`} />
                <rect
                    x={0.375}
                    y={0.375}
                    width={199.25}
                    height={24.25}
                    stroke={`url(#${typeMessage}-2)`}
                    strokeWidth={0.75}
                />
            </g>
            <defs>
                <filter
                    id="filter0_b_787_28752"
                    x={-2}
                    y={-2}
                    width={204}
                    height={29}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_787_28752"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_787_28752"
                        result="shape"
                    />
                </filter>

                <radialGradient
                    id="warning-1"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 12.5) scale(99.5708 137.898)"
                >
                    <stop stopColor="#C27400" />
                    <stop offset={0.356014} stopColor="#C27400" stopOpacity={0.760784} />
                    <stop offset={1} stopColor="#C27400" stopOpacity={0} />
                </radialGradient>

                <radialGradient
                    id="warning-2"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 12.5) scale(99.5708 137.898)"
                >
                    <stop stopColor="#FF9900" />
                    <stop offset={0.356014} stopColor="#FF9900" stopOpacity={0.7} />
                    <stop offset={1} stopColor="#FF9900" stopOpacity={0} />
                </radialGradient>

                <radialGradient
                    id="danger-1"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 12.5) scale(99.5708 137.898)"
                >
                    <stop stopColor="#A40031" />
                    <stop offset={0.356014} stopColor="#A40031" stopOpacity={0.760784} />
                    <stop offset={1} stopColor="#A40031" stopOpacity={0} />
                </radialGradient>

                <radialGradient
                    id="danger-2"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 12.5) scale(99.5708 137.898)"
                >
                    <stop stopColor="#F30049" />
                    <stop offset={0.356014} stopColor="#F30049" stopOpacity={0.7} />
                    <stop offset={1} stopColor="#F30049" stopOpacity={0} />
                </radialGradient>

                <radialGradient
                    id="none-1"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 12.5) scale(99.5708 137.898)"
                >
                    <stop stopColor="#2C2D3F" />
                    <stop offset={0.356014} stopColor="#2C2D3F" stopOpacity={0.760784} />
                    <stop offset={1} stopColor="#2C2D3F" stopOpacity={0} />
                </radialGradient>

                <radialGradient
                    id="none-2"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 12.5) scale(99.5708 137.898)"
                >
                    <stop stopColor="#074896" />
                    <stop offset={0.356014} stopColor="#011B3A" stopOpacity={0.7} />
                    <stop offset={1} stopColor="#011B3A" stopOpacity={0} />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default SVGBackgroundMessage;
