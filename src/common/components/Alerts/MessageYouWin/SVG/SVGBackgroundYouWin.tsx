import { SVGProps } from 'react';

const SVGBackgroundYouWin = ({ className, style }: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 200 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <rect width="200" height="47" fill="url(#paint0_radial_142_156)" fillOpacity="0.9" />
            <defs>
                <radialGradient
                    id="paint0_radial_142_156"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(100.429 23.5) scale(99.5708 259.248)"
                >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export default SVGBackgroundYouWin;
