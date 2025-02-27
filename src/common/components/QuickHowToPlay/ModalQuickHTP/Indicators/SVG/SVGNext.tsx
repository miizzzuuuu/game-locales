import { SVGProps } from 'react';

const SVGNext = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20" fill="none" {...props}>
            <path
                d="M4.66663 10H16.3333M16.3333 10L10.5 4.16669M16.3333 10L10.5 15.8334"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SVGNext;
