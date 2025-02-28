import { CSSProperties, RefObject } from 'react';
import { lengthStroke } from '../TimerContent/const';

type IProps = {
    ref?: RefObject<SVGSVGElement | null>;
};

const SVGTimer = ({ ref }: IProps) => {
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
            <circle cx="30" cy="30" r="28" fill="black" fillOpacity={0.5} />
            <circle cx="30" cy="30" r="26" stroke="black" strokeWidth={0} strokeOpacity={0.5} />

            <circle
                id="timer-cirlce"
                cx="30"
                cy="30"
                r="22"
                stroke="#54FC15"
                strokeWidth={5}
                strokeDasharray={lengthStroke}
                style={
                    {
                        '--color-effect': '#54FC15',
                        filter: `drop-shadow(0px 0px 0.1rem var(--color-effect))`,
                    } as CSSProperties
                }
            />
        </svg>
    );
};

SVGTimer.displayName = 'SVGTimer';

export default SVGTimer;
