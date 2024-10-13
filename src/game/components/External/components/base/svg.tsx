import React from 'react';
import { RenderObject } from './renderObject';

export class SVGRenderer extends RenderObject<any> {
    public render(): React.ReactNode {
        return (
            <svg width="100%" height="100%" viewBox="0 0 134 41" fill="none">
                <path
                    d="M2 41.5H1.28533L1.53029 40.8286L13.2472 8.71547C15.0472 3.78223 19.7387 0.5 24.99 0.5H109.01C114.261 0.5 118.953 3.78223 120.753 8.71547L132.47 40.8286L132.715 41.5H132H2Z"
                    fill="url(#paint0_linear_192_45855)"
                    stroke="url(#paint1_linear_192_45855)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_192_45855"
                        x1="74"
                        y1="41"
                        x2="74"
                        y2="1"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#343650" stop-opacity="0" />
                        <stop offset="1" stopColor="#343650" stop-opacity="0.56" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_192_45855"
                        x1="74"
                        y1="41"
                        x2="74"
                        y2="1"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#343650" stop-opacity="0.22" />
                        <stop offset="1" stopColor="#343650" stop-opacity="0.7" />
                    </linearGradient>
                </defs>
            </svg>
        ) as React.ReactNode;
    }
}
