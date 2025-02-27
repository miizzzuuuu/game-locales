import { SVGProps } from 'react';

const SVGPrev = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" {...props}>
            <path
                d="M16.3333 10H4.66663M4.66663 10L10.5 15.8334M4.66663 10L10.5 4.16669"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SVGPrev;
