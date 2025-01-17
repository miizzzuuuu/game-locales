import { useEffect, useState } from 'react';
import { splitCharStringToArray } from '../../../utils/StringUtility';
import { RenderSymbol } from '../RenderSymbol';
import styles from './styles.module.scss';

interface IProps {
    top: string;
    right: string;
    left: string;
    position: { x: string; y: string };
    opacity: number;
    value: string;
    appear: boolean;
    disappear: boolean;
    submit?: boolean;
    delay?: number;
    notAbsolute?: boolean;
    marginTop?: string;
}

export function RenderCard(props: IProps) {
    let displayValue = splitCharStringToArray(props.value);
    const [flipup, setFlipup] = useState(false);

    if (displayValue.length < 2) {
        displayValue = ['', ''];
    }

    const displayColor = displayValue[1] == 'd' || displayValue[1] == 'h' ? '#FF0415' : '#121524';

    useEffect(() => {
        if (props.submit) {
            setTimeout(() => {
                setFlipup(true);
            }, props.delay || 0);
        } else {
            setFlipup(false);
        }
    }, [props.submit, props.delay]);

    return (
        <div
            style={{
                position: props.notAbsolute ? 'unset' : 'absolute',
                top: `${props.top}`,
                transition: 'opacity',
                transitionDelay: '5s',
                opacity: `${props.opacity}`,
                left: `${props.left}`,
                right: `${props.right}`,
                transform: `perspective(100rem) translate(${props.position.x}, ${props.position.y})`,
                marginTop: `${props.marginTop}`,
                transformOrigin: 'center',
                width: '2.4rem',
                height: '3.1rem',
            }}
        >
            <div
                className={`${styles['card-slot']}${props.appear == true ? ` ${styles.appear}` : ''}${props.disappear == true ? ` ${styles.disappear}` : ''}`}
                style={{
                    // animationDelay: props.delay || '0',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                }}
            >
                <div
                    className={`${styles['card-core']}${flipup ? ` ${styles.flipup}` : ''}`}
                    style={{
                        // animationDelay: props.submit == true ? props.delay : '0',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        transform: `perspective(100rem)`,
                    }}
                >
                    <div
                        className={styles['card-core-detail']}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            transform: `perspective(100rem) rotateZ(0deg) `,
                        }}
                    >
                        <div
                            className={styles['card-cover']}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: 'fit-content',
                                boxShadow:
                                    '0 0 0.064rem 0 rgba(0, 0, 0, 0.4) 0 0.064rem 0.064rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                        >
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 132"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={100} height={132} rx={14} fill="white" />
                                <rect
                                    x={10}
                                    y={10}
                                    width={80}
                                    height={112}
                                    rx={8}
                                    fill="url(#paint0_radial_1_3949)"
                                />
                                <g filter="url(#filter0_d_1_3949)">
                                    <path
                                        d="M33.7707 43.9477C32.681 44.5833 32 45.741 32 46.9896V49.9407C32 49.9407 32 49.8953 32.0227 49.8726C32.5675 48.1927 36.0635 49.8726 37.6298 50.6898L38.379 51.0984L64.2579 66.0356C65.8016 65.1503 69.0251 63.0618 67.8901 61.7225C67.8447 61.6543 67.7766 61.5862 67.7312 61.5408L40.649 45.9226L37.2666 43.9704C36.7218 43.6526 36.1089 43.4937 35.5186 43.4937C34.9284 43.4937 34.3155 43.6526 33.7707 43.9704"
                                        fill="url(#paint1_linear_1_3949)"
                                    />
                                    <path
                                        d="M67.8911 61.7002C69.0262 63.0395 65.8027 65.128 64.259 66.0134L63.4872 66.4674L37.6309 81.4045C37.6309 83.0617 37.8579 86.9663 39.5151 86.8301L66.688 71.1438L70.252 69.078C71.3417 68.4424 72 67.2846 72 66.0361C72 64.7875 71.319 63.6298 70.252 62.9941L67.7322 61.5413C67.7322 61.5413 67.8457 61.6548 67.8911 61.7229"
                                        fill="url(#paint2_linear_1_3949)"
                                    />
                                    <path
                                        d="M32.0227 49.851C32.0227 49.851 32.0227 49.8964 32 49.9191V85.0373C32 86.9896 33.5664 88.556 35.5186 88.556C36.2451 88.556 36.9261 88.3289 37.4936 87.9657L39.5367 86.7853C37.8795 86.9215 37.6752 83.0169 37.6525 81.3598V50.6682C36.5856 50.1007 34.5879 49.1245 33.2713 49.1245C32.681 49.1245 32.227 49.3288 32.0454 49.851"
                                        fill="url(#paint3_linear_1_3949)"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        id="filter0_d_1_3949"
                                        x={28}
                                        y="41.4937"
                                        width={48}
                                        height="53.0623"
                                        filterUnits="userSpaceOnUse"
                                        colorInterpolationFilters="sRGB"
                                    >
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                            result="hardAlpha"
                                        />
                                        <feOffset dy={2} />
                                        <feGaussianBlur stdDeviation={2} />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow_1_3949"
                                        />
                                        <feBlend
                                            mode="normal"
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_3949"
                                            result="shape"
                                        />
                                    </filter>
                                    <radialGradient
                                        id="paint0_radial_1_3949"
                                        cx={0}
                                        cy={0}
                                        r={1}
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="translate(50 12.0741) rotate(90) scale(132.741 379.898)"
                                    >
                                        <stop stopColor="#4C5378" />
                                        <stop offset={1} stopColor="#121524" />
                                    </radialGradient>
                                    <linearGradient
                                        id="paint1_linear_1_3949"
                                        x1={32}
                                        y1="54.7533"
                                        x2="68.1171"
                                        y2="54.7533"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#15B586" />
                                        <stop offset={1} stopColor="#009FD1" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_1_3949"
                                        x1="37.6309"
                                        y1="74.163"
                                        x2={72}
                                        y2="74.163"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#0367DC" />
                                        <stop offset={1} stopColor="#894B92" />
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_1_3949"
                                        x1="35.7683"
                                        y1="49.1472"
                                        x2="35.7683"
                                        y2="88.5787"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#0C4B92" />
                                        <stop offset={1} stopColor="#0395DE" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div
                            className={styles['card-value']}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <svg
                                width="100%"
                                // height="100%"
                                viewBox="0 0 100 132"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width="100" height="132" rx="14" fill="white" />
                                <RenderSymbol symbol={displayValue[1]} />
                            </svg>

                            <p
                                style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    margin: '-0.2rem 0 0 0.2rem',
                                    fontFamily: 'Manrope',
                                    fontSize: '1.44rem',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: 'normal',
                                    textTransform: 'uppercase',
                                    color: displayColor,
                                }}
                            >
                                {displayValue[0] == 'T' ? '10' : displayValue[0]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
