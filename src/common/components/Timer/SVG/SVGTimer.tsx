import { forwardRef } from 'react';

interface IProps {
    state?: 'normal' | 'danger';
    value: number;
    length: number;
}

const SVGTimer = forwardRef<SVGSVGElement, IProps>(({ state = 'normal', value, length }, ref) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60 60"
            fill="none"
            style={{
                widows: '100%',
                height: '100%',
                transform: 'rotateZ(-90deg)',
            }}
            ref={ref}
        >
            <g>
                <circle cx="30" cy="30" r="28" fill="black" fillOpacity={0.5} />

                {/* outer timer */}
                <circle cx="30" cy="30" r="26" stroke="black" strokeWidth={0} strokeOpacity={0.5} />

                <circle
                    id="timer-cirlce"
                    cx="30"
                    cy="30"
                    r="22"
                    stroke={state === 'danger' ? 'red' : '#54FC15'}
                    strokeWidth={5}
                    strokeDasharray={length}
                    strokeDashoffset={value}
                    style={{
                        filter: `drop-shadow(0px 0px 0.1rem ${state === 'danger' ? 'rgba(255, 0, 0, 0.75)' : 'rgba(84, 252, 21, 0.75)'})`,
                    }}
                />
            </g>
        </svg>
    );
});

export default SVGTimer;
