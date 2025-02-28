import { SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { getBasePcode } from '../../../../../../common/utils/GameHelper';
// import TextPayout from './TextPayout';

type IProps = Pick<SVGProps<SVGSVGElement>, 'style' | 'className'>;

const SVGBet50 = ({ className, style }: IProps) => {
    const { t } = useTranslation();

    return (
        <svg
            // width="200"
            // height="78"
            viewBox="0 0 200 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <rect
                x="0.232558"
                y="0.232558"
                width="24.0257"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint0_linear_356_884)"
            />
            <rect
                x="0.232558"
                y="0.232558"
                width="24.0257"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint1_radial_356_884)"
            />
            <rect
                x="0.232558"
                y="0.232558"
                width="24.0257"
                height="21.6279"
                rx="0.348837"
                stroke="#636481"
                strokeWidth="0.465116"
            />
            <text
                x="12.245408"
                y="11.046508"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="6"
                fontWeight="800"
                letterSpacing="0em"
                style={{ textTransform: 'uppercase' }}
            >
                {t(`${getBasePcode()}.small`, { ns: 'game' })}
            </text>
            <g filter="url(#filter0_dd_356_884)">
                <g clipPath="url(#clip0_356_884)">
                    <g clipPath="url(#clip1_356_884)">
                        <path
                            d="M12.0723 16.2906C14.8337 16.2906 17.0723 14.0521 17.0723 11.2906C17.0723 8.52923 14.8337 6.29065 12.0723 6.29065C9.31084 6.29065 7.07227 8.52923 7.07227 11.2906C7.07227 14.0521 9.31084 16.2906 12.0723 16.2906Z"
                            fill="#266EE9"
                        />
                        <g clipPath="url(#clip2_356_884)">
                            <path
                                d="M16.1098 10.6006L16.9923 10.4356C16.9073 9.94561 16.7523 9.48061 16.5373 9.05061L15.7348 9.45311C15.6148 9.21561 15.4748 8.99061 15.3123 8.78311L16.0273 8.23811C15.7248 7.84811 15.3673 7.50311 14.9648 7.21561L14.4273 7.93561C13.7598 7.46811 12.9498 7.19061 12.0748 7.19061C11.8398 7.19061 11.6098 7.21561 11.3848 7.25311L11.2198 6.37061C10.7298 6.45561 10.2648 6.61061 9.83479 6.82561L10.2373 7.62811C9.99979 7.74811 9.77479 7.88811 9.56729 8.05061L9.02229 7.33561C8.63229 7.63811 8.28729 7.99561 7.99979 8.39811L8.71979 8.93561C8.25229 9.60311 7.97479 10.4131 7.97479 11.2881C7.97479 11.5231 7.99979 11.7531 8.03729 11.9781L7.15479 12.1431C7.23979 12.6331 7.39479 13.0981 7.60979 13.5281L8.41229 13.1256C8.53229 13.3631 8.67229 13.5881 8.83479 13.7956L8.11979 14.3406C8.42229 14.7306 8.77979 15.0756 9.18229 15.3631L9.71979 14.6431C10.3873 15.1106 11.1973 15.3881 12.0723 15.3881C12.3073 15.3881 12.5373 15.3631 12.7623 15.3256L12.9273 16.2081C13.4173 16.1231 13.8823 15.9681 14.3123 15.7531L13.9098 14.9506C14.1473 14.8306 14.3723 14.6906 14.5798 14.5281L15.1248 15.2431C15.5148 14.9406 15.8598 14.5831 16.1473 14.1806L15.4273 13.6431C15.8948 12.9756 16.1723 12.1656 16.1723 11.2906C16.1723 11.0556 16.1473 10.8256 16.1098 10.6006Z"
                                fill="url(#paint2_radial_356_884)"
                            />
                        </g>
                        <path
                            d="M12.0723 14.7206C13.9666 14.7206 15.5023 13.1849 15.5023 11.2906C15.5023 9.39626 13.9666 7.8606 12.0723 7.8606C10.1779 7.8606 8.64227 9.39626 8.64227 11.2906C8.64227 13.1849 10.1779 14.7206 12.0723 14.7206Z"
                            fill="#266EE9"
                        />
                        <path
                            d="M12.0722 7.64062C10.0572 7.64062 8.42224 9.27562 8.42224 11.2906C8.42224 13.3056 10.0572 14.9406 12.0722 14.9406C14.0872 14.9406 15.7222 13.3056 15.7222 11.2906C15.7222 9.27562 14.0872 7.64062 12.0722 7.64062ZM12.0722 14.7206C10.1772 14.7206 8.64224 13.1856 8.64224 11.2906C8.64224 9.39563 10.1772 7.86063 12.0722 7.86063C13.9672 7.86063 15.5022 9.39563 15.5022 11.2906C15.5022 13.1856 13.9672 14.7206 12.0722 14.7206Z"
                            fill="#266EE9"
                        />
                        <path
                            opacity="0.3"
                            d="M12.0722 7.64062C10.0572 7.64062 8.42224 9.27562 8.42224 11.2906C8.42224 13.3056 10.0572 14.9406 12.0722 14.9406C14.0872 14.9406 15.7222 13.3056 15.7222 11.2906C15.7222 9.27562 14.0872 7.64062 12.0722 7.64062ZM12.0722 14.7206C10.1772 14.7206 8.64224 13.1856 8.64224 11.2906C8.64224 9.39563 10.1772 7.86063 12.0722 7.86063C13.9672 7.86063 15.5022 9.39563 15.5022 11.2906C15.5022 13.1856 13.9672 14.7206 12.0722 14.7206Z"
                            fill="url(#paint3_radial_356_884)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0723 6.44065C9.39369 6.44065 7.22227 8.61207 7.22227 11.2906C7.22227 13.9692 9.39368 16.1406 12.0723 16.1406C14.7508 16.1406 16.9223 13.9692 16.9223 11.2906C16.9223 8.61207 14.7508 6.44065 12.0723 6.44065ZM7.07227 11.2906C7.07227 8.52922 9.31084 6.29065 12.0723 6.29065C14.8337 6.29065 17.0723 8.52923 17.0723 11.2906C17.0723 14.0521 14.8337 16.2906 12.0723 16.2906C9.31084 16.2906 7.07227 14.0521 7.07227 11.2906Z"
                            fill="url(#paint4_linear_356_884)"
                            fillOpacity="0.2"
                        />
                    </g>
                    <text
                        fill="url(#paint5_linear_356_884)"
                        stroke="#266EE9"
                        strokeWidth="0.3"
                        strokeLinejoin="round"
                        fontFamily="Inter"
                        fontSize="4"
                        fontWeight="bold"
                        letterSpacing="-0.06em"
                    >
                        <tspan x="9.73914" y="12.6372">
                            5k
                        </tspan>
                    </text>
                </g>
            </g>
            <g opacity="0.5">
                <rect
                    x="25.3048"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    fill="url(#paint6_linear_356_884)"
                />
                <rect
                    x="25.3048"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    stroke="#636481"
                    strokeWidth="0.465116"
                />
                <text
                    fill="white"
                    fontFamily="Manrope"
                    fontSize="6.5"
                    fontWeight="800"
                    letterSpacing="0em"
                >
                    <tspan x="33.0298" y="9.73811">
                        K.1
                    </tspan>
                </text>
                <text
                    fill="white"
                    fillOpacity="0.3"
                    fontFamily="Manrope"
                    fontSize="4.65116"
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                >
                    <tspan x="33.9983" y="18.3488">
                        6:1
                    </tspan>
                </text>
            </g>
            <g opacity="0.5">
                <rect
                    x="50.3771"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    fill="url(#paint7_linear_356_884)"
                />
                <rect
                    x="50.3771"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    stroke="#636481"
                    strokeWidth="0.465116"
                />
                <text
                    fill="white"
                    fontFamily="Manrope"
                    fontSize="6.5"
                    fontWeight="800"
                    letterSpacing="0em"
                >
                    <tspan x="57.2261" y="9.73811">
                        K.2
                    </tspan>
                </text>
                <text
                    fill="white"
                    fillOpacity="0.3"
                    fontFamily="Manrope"
                    fontSize="4.65116"
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                >
                    <tspan x="59.0705" y="18.3488">
                        6:1
                    </tspan>
                </text>
            </g>
            <g opacity="0.5">
                <rect
                    x="75.4494"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    fill="url(#paint8_linear_356_884)"
                />
                <rect
                    x="75.4494"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    stroke="#636481"
                    strokeWidth="0.465116"
                />
                <text
                    fill="white"
                    fontFamily="Manrope"
                    fontSize="6.5"
                    fontWeight="800"
                    letterSpacing="0em"
                >
                    <tspan x="82.3397" y="9.73811">
                        K.3
                    </tspan>
                </text>
                <text
                    fill="white"
                    fillOpacity="0.3"
                    fontFamily="Manrope"
                    fontSize="4.65116"
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                >
                    <tspan x="84.1428" y="18.3488">
                        6:1
                    </tspan>
                </text>
            </g>
            <g opacity="0.5">
                <rect
                    x="100.522"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    fill="url(#paint9_linear_356_884)"
                />
                <rect
                    x="100.522"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    stroke="#636481"
                    strokeWidth="0.465116"
                />
                <text
                    fill="white"
                    fontFamily="Manrope"
                    fontSize="6.5"
                    fontWeight="800"
                    letterSpacing="0em"
                >
                    <tspan x="107.333" y="9.73811">
                        K.4
                    </tspan>
                </text>
                <text
                    fill="white"
                    fillOpacity="0.3"
                    fontFamily="Manrope"
                    fontSize="4.65116"
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                >
                    <tspan x="109.215" y="18.3488">
                        6:1
                    </tspan>
                </text>
            </g>
            <g opacity="0.5">
                <rect
                    x="125.594"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    fill="url(#paint10_linear_356_884)"
                />
                <rect
                    x="125.594"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    stroke="#636481"
                    strokeWidth="0.465116"
                />
                <text
                    fill="white"
                    fontFamily="Manrope"
                    fontSize="6.5"
                    fontWeight="800"
                    letterSpacing="0em"
                >
                    <tspan x="132.49" y="9.73811">
                        K.5
                    </tspan>
                </text>
                <text
                    fill="white"
                    fillOpacity="0.3"
                    fontFamily="Manrope"
                    fontSize="4.65116"
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                >
                    <tspan x="134.287" y="18.3488">
                        6:1
                    </tspan>
                </text>
            </g>
            <g opacity="0.5">
                <rect
                    x="150.666"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    fill="url(#paint11_linear_356_884)"
                />
                <rect
                    x="150.666"
                    y="0.232558"
                    width="24.0257"
                    height="21.6279"
                    rx="0.348837"
                    stroke="#636481"
                    strokeWidth="0.465116"
                />
                <text
                    fill="white"
                    fontFamily="Manrope"
                    fontSize="6.5"
                    fontWeight="800"
                    letterSpacing="0em"
                >
                    <tspan x="157.455" y="9.73811">
                        K.6
                    </tspan>
                </text>
                <text
                    fill="white"
                    fillOpacity="0.3"
                    fontFamily="Manrope"
                    fontSize="4.65116"
                    fontWeight="bold"
                    letterSpacing="-0.02em"
                >
                    <tspan x="159.36" y="18.3488">
                        6:1
                    </tspan>
                </text>
            </g>
            <rect
                x="175.738"
                y="0.232558"
                width="24.0257"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint12_linear_356_884)"
            />
            <rect
                x="175.738"
                y="0.232558"
                width="24.0257"
                height="21.6279"
                rx="0.348837"
                stroke="#636481"
                strokeWidth="0.465116"
            />
            <text
                x="187.75085"
                y="11.046508"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="6"
                fontWeight="800"
                letterSpacing="0em"
                style={{ textTransform: 'uppercase' }}
            >
                {t(`${getBasePcode()}.big`, { ns: 'game' })}
            </text>
            <g opacity="0.3">
                <g clipPath="url(#clip3_356_884)">
                    <path
                        d="M57.0904 -63.4068L-9.8606 52.5557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M60.7277 -61.3068L-6.22327 54.6557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M64.365 -59.2068L-2.58601 56.7557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M68.0023 -57.1068L1.05132 58.8557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M71.6396 -55.0068L4.68865 60.9557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M75.2769 -52.9068L8.32592 63.0557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M78.9142 -50.8068L11.9632 65.1557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M82.5515 -48.7068L15.6005 67.2557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M86.1888 -46.6068L19.2378 69.3557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M89.8262 -44.5068L22.8752 71.4557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M93.4634 -42.4068L26.5124 73.5557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M97.1008 -40.3068L30.1498 75.6557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M100.738 -38.2068L33.7871 77.7557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M104.375 -36.1068L37.4244 79.8557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M108.013 -34.0068L41.0617 81.9557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path d="M111.65 -31.9067L44.699 84.0558" stroke="#4C4D66" strokeWidth="0.6" />
                    <path
                        d="M115.287 -29.8068L48.3363 86.1558"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M118.925 -27.7068L51.9736 88.2557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M122.562 -25.6068L55.6109 90.3557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M126.199 -23.5068L59.2482 92.4557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M129.837 -21.4069L62.8856 94.5557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M133.474 -19.3068L66.5228 96.6558"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M137.111 -17.2068L70.1601 98.7557"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M140.748 -15.1068L73.7974 100.856"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M144.386 -13.0068L77.4347 102.956"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path d="M148.023 -10.9069L81.072 105.056" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M151.66 -8.80676L84.7093 107.156" stroke="#4C4D66" strokeWidth="0.6" />
                    <path
                        d="M155.298 -6.70679L88.3467 109.256"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M158.935 -4.60681L91.9839 111.356"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path
                        d="M162.572 -2.50684L95.6213 113.456"
                        stroke="#4C4D66"
                        strokeWidth="0.6"
                    />
                    <path d="M166.21 -0.40686L99.2585 115.556" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M169.847 1.69324L102.896 117.656" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M173.484 3.79321L106.533 119.756" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M177.121 5.89319L110.17 121.856" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M180.759 7.99316L113.808 123.956" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M184.396 10.0931L117.445 126.056" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M188.033 12.1931L121.082 128.156" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M191.671 14.2932L124.72 130.256" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M195.308 16.3932L128.357 132.356" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M198.945 18.4932L131.994 134.456" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M202.583 20.5931L135.632 136.556" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M206.22 22.6931L139.269 138.656" stroke="#4C4D66" strokeWidth="0.6" />
                    <path d="M209.857 24.7932L142.906 140.756" stroke="#4C4D66" strokeWidth="0.6" />
                </g>
                <rect
                    x="0.3"
                    y="22.9744"
                    width="199.397"
                    height="31.4"
                    rx="0.7"
                    stroke="#4C4D66"
                    strokeWidth="0.6"
                />
            </g>
            <rect
                x="0.232558"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint13_linear_356_884)"
            />
            <rect
                x="0.232558"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint14_radial_356_884)"
            />
            <rect
                x="0.232558"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                stroke="#636481"
                strokeWidth="0.465116"
            />
            <text
                x="24.781558"
                y="66.30235"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="6"
                fontWeight="800"
                letterSpacing="0em"
                style={{ textTransform: 'uppercase' }}
            >
                {t(`${getBasePcode()}.odd`, { ns: 'game' })}
            </text>
            <g filter="url(#filter1_dd_356_884)">
                <g clipPath="url(#clip4_356_884)">
                    <g clipPath="url(#clip5_356_884)">
                        <path
                            d="M25.0724 71.2908C27.8338 71.2908 30.0724 69.0522 30.0724 66.2908C30.0724 63.5293 27.8338 61.2908 25.0724 61.2908C22.311 61.2908 20.0724 63.5293 20.0724 66.2908C20.0724 69.0522 22.311 71.2908 25.0724 71.2908Z"
                            fill="#266EE9"
                        />
                        <g clipPath="url(#clip6_356_884)">
                            <path
                                d="M29.1099 65.6007L29.9924 65.4357C29.9074 64.9457 29.7524 64.4807 29.5374 64.0507L28.7349 64.4532C28.6149 64.2157 28.4749 63.9907 28.3124 63.7832L29.0274 63.2382C28.7249 62.8482 28.3674 62.5032 27.9649 62.2157L27.4274 62.9357C26.7599 62.4682 25.9499 62.1907 25.0749 62.1907C24.8399 62.1907 24.6099 62.2157 24.3849 62.2532L24.2199 61.3707C23.7299 61.4557 23.2649 61.6107 22.8349 61.8257L23.2374 62.6282C22.9999 62.7482 22.7749 62.8882 22.5674 63.0507L22.0224 62.3357C21.6324 62.6382 21.2874 62.9957 20.9999 63.3982L21.7199 63.9357C21.2524 64.6032 20.9749 65.4132 20.9749 66.2882C20.9749 66.5232 20.9999 66.7532 21.0374 66.9782L20.1549 67.1432C20.2399 67.6332 20.3949 68.0982 20.6099 68.5282L21.4124 68.1257C21.5324 68.3632 21.6724 68.5882 21.8349 68.7957L21.1199 69.3407C21.4224 69.7307 21.7799 70.0757 22.1824 70.3632L22.7199 69.6432C23.3874 70.1107 24.1974 70.3882 25.0724 70.3882C25.3074 70.3882 25.5374 70.3632 25.7624 70.3257L25.9274 71.2082C26.4174 71.1232 26.8824 70.9682 27.3124 70.7532L26.9099 69.9507C27.1474 69.8307 27.3724 69.6907 27.5799 69.5282L28.1249 70.2432C28.5149 69.9407 28.8599 69.5832 29.1474 69.1807L28.4274 68.6432C28.8949 67.9757 29.1724 67.1657 29.1724 66.2907C29.1724 66.0557 29.1474 65.8257 29.1099 65.6007Z"
                                fill="url(#paint15_radial_356_884)"
                            />
                        </g>
                        <path
                            d="M25.0724 69.7207C26.9667 69.7207 28.5024 68.1851 28.5024 66.2907C28.5024 64.3964 26.9667 62.8607 25.0724 62.8607C23.1781 62.8607 21.6424 64.3964 21.6424 66.2907C21.6424 68.1851 23.1781 69.7207 25.0724 69.7207Z"
                            fill="#266EE9"
                        />
                        <path
                            d="M25.0724 62.6407C23.0574 62.6407 21.4224 64.2757 21.4224 66.2907C21.4224 68.3057 23.0574 69.9407 25.0724 69.9407C27.0874 69.9407 28.7224 68.3057 28.7224 66.2907C28.7224 64.2757 27.0874 62.6407 25.0724 62.6407ZM25.0724 69.7207C23.1774 69.7207 21.6424 68.1857 21.6424 66.2907C21.6424 64.3957 23.1774 62.8607 25.0724 62.8607C26.9674 62.8607 28.5024 64.3957 28.5024 66.2907C28.5024 68.1857 26.9674 69.7207 25.0724 69.7207Z"
                            fill="#266EE9"
                        />
                        <path
                            opacity="0.3"
                            d="M25.0724 62.6407C23.0574 62.6407 21.4224 64.2757 21.4224 66.2907C21.4224 68.3057 23.0574 69.9407 25.0724 69.9407C27.0874 69.9407 28.7224 68.3057 28.7224 66.2907C28.7224 64.2757 27.0874 62.6407 25.0724 62.6407ZM25.0724 69.7207C23.1774 69.7207 21.6424 68.1857 21.6424 66.2907C21.6424 64.3957 23.1774 62.8607 25.0724 62.8607C26.9674 62.8607 28.5024 64.3957 28.5024 66.2907C28.5024 68.1857 26.9674 69.7207 25.0724 69.7207Z"
                            fill="url(#paint16_radial_356_884)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.0724 61.4408C22.3938 61.4408 20.2224 63.6122 20.2224 66.2908C20.2224 68.9694 22.3938 71.1408 25.0724 71.1408C27.751 71.1408 29.9224 68.9694 29.9224 66.2908C29.9224 63.6122 27.751 61.4408 25.0724 61.4408ZM20.0724 66.2908C20.0724 63.5293 22.311 61.2908 25.0724 61.2908C27.8338 61.2908 30.0724 63.5293 30.0724 66.2908C30.0724 69.0522 27.8338 71.2908 25.0724 71.2908C22.311 71.2908 20.0724 69.0522 20.0724 66.2908Z"
                            fill="url(#paint17_linear_356_884)"
                            fillOpacity="0.2"
                        />
                    </g>
                    <text
                        fill="url(#paint18_linear_356_884)"
                        stroke="#266EE9"
                        strokeWidth="0.3"
                        strokeLinejoin="round"
                        fontFamily="Inter"
                        fontSize="4"
                        fontWeight="bold"
                        letterSpacing="-0.06em"
                    >
                        <tspan x="22.7393" y="67.6374">
                            5k
                        </tspan>
                    </text>
                </g>
            </g>
            <rect
                x="50.3771"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint19_linear_356_884)"
            />
            <rect
                x="50.3771"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                stroke="#636481"
                strokeWidth="0.465116"
            />
            <text
                x="74.9261"
                y="66.30235"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="6"
                fontWeight="800"
                letterSpacing="0em"
                style={{ textTransform: 'uppercase' }}
            >
                {t(`${getBasePcode()}.even`, { ns: 'game' })}
            </text>
            <rect
                x="100.522"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint20_linear_356_884)"
            />
            <rect
                x="100.522"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint21_radial_356_884)"
            />
            <rect
                x="100.522"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                stroke="#636481"
                strokeWidth="0.465116"
            />
            <text
                x="125.071"
                y="66.30235"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="6"
                fontWeight="800"
                letterSpacing="0em"
                style={{ textTransform: 'uppercase' }}
            >
                {t(`${getBasePcode()}.red`, { ns: 'game' })}
            </text>
            <g filter="url(#filter2_dd_356_884)">
                <g clipPath="url(#clip7_356_884)">
                    <g clipPath="url(#clip8_356_884)">
                        <path
                            d="M125.072 71.2908C127.834 71.2908 130.072 69.0522 130.072 66.2908C130.072 63.5293 127.834 61.2908 125.072 61.2908C122.311 61.2908 120.072 63.5293 120.072 66.2908C120.072 69.0522 122.311 71.2908 125.072 71.2908Z"
                            fill="#266EE9"
                        />
                        <g clipPath="url(#clip9_356_884)">
                            <path
                                d="M129.11 65.6007L129.992 65.4357C129.907 64.9457 129.752 64.4807 129.537 64.0507L128.735 64.4532C128.615 64.2157 128.475 63.9907 128.312 63.7832L129.027 63.2382C128.725 62.8482 128.367 62.5032 127.965 62.2157L127.427 62.9357C126.76 62.4682 125.95 62.1907 125.075 62.1907C124.84 62.1907 124.61 62.2157 124.385 62.2532L124.22 61.3707C123.73 61.4557 123.265 61.6107 122.835 61.8257L123.237 62.6282C123 62.7482 122.775 62.8882 122.567 63.0507L122.022 62.3357C121.632 62.6382 121.287 62.9957 121 63.3982L121.72 63.9357C121.252 64.6032 120.975 65.4132 120.975 66.2882C120.975 66.5232 121 66.7532 121.037 66.9782L120.155 67.1432C120.24 67.6332 120.395 68.0982 120.61 68.5282L121.412 68.1257C121.532 68.3632 121.672 68.5882 121.835 68.7957L121.12 69.3407C121.422 69.7307 121.78 70.0757 122.182 70.3632L122.72 69.6432C123.387 70.1107 124.197 70.3882 125.072 70.3882C125.307 70.3882 125.537 70.3632 125.762 70.3257L125.927 71.2082C126.417 71.1232 126.882 70.9682 127.312 70.7532L126.91 69.9507C127.147 69.8307 127.372 69.6907 127.58 69.5282L128.125 70.2432C128.515 69.9407 128.86 69.5832 129.147 69.1807L128.427 68.6432C128.895 67.9757 129.172 67.1657 129.172 66.2907C129.172 66.0557 129.147 65.8257 129.11 65.6007Z"
                                fill="url(#paint22_radial_356_884)"
                            />
                        </g>
                        <path
                            d="M125.072 69.7207C126.967 69.7207 128.502 68.1851 128.502 66.2907C128.502 64.3964 126.967 62.8607 125.072 62.8607C123.178 62.8607 121.642 64.3964 121.642 66.2907C121.642 68.1851 123.178 69.7207 125.072 69.7207Z"
                            fill="#266EE9"
                        />
                        <path
                            d="M125.072 62.6407C123.057 62.6407 121.422 64.2757 121.422 66.2907C121.422 68.3057 123.057 69.9407 125.072 69.9407C127.087 69.9407 128.722 68.3057 128.722 66.2907C128.722 64.2757 127.087 62.6407 125.072 62.6407ZM125.072 69.7207C123.177 69.7207 121.642 68.1857 121.642 66.2907C121.642 64.3957 123.177 62.8607 125.072 62.8607C126.967 62.8607 128.502 64.3957 128.502 66.2907C128.502 68.1857 126.967 69.7207 125.072 69.7207Z"
                            fill="#266EE9"
                        />
                        <path
                            opacity="0.3"
                            d="M125.072 62.6407C123.057 62.6407 121.422 64.2757 121.422 66.2907C121.422 68.3057 123.057 69.9407 125.072 69.9407C127.087 69.9407 128.722 68.3057 128.722 66.2907C128.722 64.2757 127.087 62.6407 125.072 62.6407ZM125.072 69.7207C123.177 69.7207 121.642 68.1857 121.642 66.2907C121.642 64.3957 123.177 62.8607 125.072 62.8607C126.967 62.8607 128.502 64.3957 128.502 66.2907C128.502 68.1857 126.967 69.7207 125.072 69.7207Z"
                            fill="url(#paint23_radial_356_884)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M125.072 61.4408C122.394 61.4408 120.222 63.6122 120.222 66.2908C120.222 68.9694 122.394 71.1408 125.072 71.1408C127.751 71.1408 129.922 68.9694 129.922 66.2908C129.922 63.6122 127.751 61.4408 125.072 61.4408ZM120.072 66.2908C120.072 63.5293 122.311 61.2908 125.072 61.2908C127.834 61.2908 130.072 63.5293 130.072 66.2908C130.072 69.0522 127.834 71.2908 125.072 71.2908C122.311 71.2908 120.072 69.0522 120.072 66.2908Z"
                            fill="url(#paint24_linear_356_884)"
                            fillOpacity="0.2"
                        />
                    </g>
                    <text
                        fill="url(#paint25_linear_356_884)"
                        stroke="#266EE9"
                        strokeWidth="0.3"
                        strokeLinejoin="round"
                        fontFamily="Inter"
                        fontSize="4"
                        fontWeight="bold"
                        letterSpacing="-0.06em"
                    >
                        <tspan x="122.739" y="67.6374">
                            5k
                        </tspan>
                    </text>
                </g>
            </g>
            <rect
                x="150.666"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                fill="url(#paint26_linear_356_884)"
            />
            <rect
                x="150.666"
                y="55.4884"
                width="49.098"
                height="21.6279"
                rx="0.348837"
                stroke="#636481"
                strokeWidth="0.465116"
            />
            <text
                x="175.215"
                y="66.30235"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontFamily="Manrope"
                fontSize="6"
                fontWeight="800"
                letterSpacing="0em"
                style={{ textTransform: 'uppercase' }}
            >
                {t(`${getBasePcode()}.black`, { ns: 'game' })}
            </text>
            <defs>
                <filter
                    id="filter0_dd_356_884"
                    x="6.35798"
                    y="5.57636"
                    width="11.4286"
                    height="12.1429"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_356_884"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="0.714286" />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_356_884"
                        result="effect2_dropShadow_356_884"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_356_884"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter1_dd_356_884"
                    x="19.3581"
                    y="60.5765"
                    width="11.4286"
                    height="12.1429"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_356_884"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="0.714286" />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_356_884"
                        result="effect2_dropShadow_356_884"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_356_884"
                        result="shape"
                    />
                </filter>
                <filter
                    id="filter2_dd_356_884"
                    x="119.358"
                    y="60.5765"
                    width="11.4286"
                    height="12.1429"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_356_884"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="0.714286" />
                    <feGaussianBlur stdDeviation="0.357143" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_356_884"
                        result="effect2_dropShadow_356_884"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_356_884"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_356_884"
                    x1="12.2454"
                    y1="0"
                    x2="12.2454"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <radialGradient
                    id="paint1_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.0723 10.7558) scale(14.5 15.1749)"
                >
                    <stop offset="0.0868713" stopColor="#266EE9" />
                    <stop offset="1" stopColor="#266EE9" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                    id="paint2_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.0735 11.2894) rotate(90) scale(5.00126)"
                >
                    <stop offset="0.730693" stopColor="white" stopOpacity="0.27" />
                    <stop offset="0.751167" stopColor="white" stopOpacity="0.69" />
                    <stop offset="0.758071" stopColor="white" />
                    <stop offset="0.969734" stopColor="white" />
                    <stop offset="0.971947" stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.8" />
                </radialGradient>
                <radialGradient
                    id="paint3_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.0722 11.2906) rotate(90) scale(3.65)"
                >
                    <stop offset="0.952277" stopOpacity="0" />
                    <stop offset="1" />
                </radialGradient>
                <linearGradient
                    id="paint4_linear_356_884"
                    x1="12.0723"
                    y1="16.2906"
                    x2="12.0723"
                    y2="6.29065"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint5_linear_356_884"
                    x1="12.0723"
                    y1="9.65315"
                    x2="12.0723"
                    y2="12.6531"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                    id="paint6_linear_356_884"
                    x1="37.3177"
                    y1="0"
                    x2="37.3177"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint7_linear_356_884"
                    x1="62.39"
                    y1="0"
                    x2="62.39"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint8_linear_356_884"
                    x1="87.4622"
                    y1="0"
                    x2="87.4622"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint9_linear_356_884"
                    x1="112.534"
                    y1="0"
                    x2="112.534"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint10_linear_356_884"
                    x1="137.607"
                    y1="0"
                    x2="137.607"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint11_linear_356_884"
                    x1="162.679"
                    y1="0"
                    x2="162.679"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint12_linear_356_884"
                    x1="187.751"
                    y1="0"
                    x2="187.751"
                    y2="22.093"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint13_linear_356_884"
                    x1="24.7816"
                    y1="55.2559"
                    x2="24.7816"
                    y2="77.3489"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <radialGradient
                    id="paint14_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(24.4311 66.0117) scale(19.1411 17.5523)"
                >
                    <stop offset="0.0868713" stopColor="#266EE9" />
                    <stop offset="1" stopColor="#266EE9" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                    id="paint15_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25.0737 66.2895) rotate(90) scale(5.00126)"
                >
                    <stop offset="0.730693" stopColor="white" stopOpacity="0.27" />
                    <stop offset="0.751167" stopColor="white" stopOpacity="0.69" />
                    <stop offset="0.758071" stopColor="white" />
                    <stop offset="0.969734" stopColor="white" />
                    <stop offset="0.971947" stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.8" />
                </radialGradient>
                <radialGradient
                    id="paint16_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(25.0724 66.2907) rotate(90) scale(3.65)"
                >
                    <stop offset="0.952277" stopOpacity="0" />
                    <stop offset="1" />
                </radialGradient>
                <linearGradient
                    id="paint17_linear_356_884"
                    x1="25.0724"
                    y1="71.2908"
                    x2="25.0724"
                    y2="61.2908"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint18_linear_356_884"
                    x1="25.0724"
                    y1="64.6533"
                    x2="25.0724"
                    y2="67.6533"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                    id="paint19_linear_356_884"
                    x1="74.9261"
                    y1="55.2559"
                    x2="74.9261"
                    y2="77.3489"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <linearGradient
                    id="paint20_linear_356_884"
                    x1="125.071"
                    y1="55.2559"
                    x2="125.071"
                    y2="77.3489"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <radialGradient
                    id="paint21_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(124.72 66.0117) scale(19.1411 17.5523)"
                >
                    <stop offset="0.0868713" stopColor="#266EE9" />
                    <stop offset="1" stopColor="#266EE9" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                    id="paint22_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(125.074 66.2895) rotate(90) scale(5.00126)"
                >
                    <stop offset="0.730693" stopColor="white" stopOpacity="0.27" />
                    <stop offset="0.751167" stopColor="white" stopOpacity="0.69" />
                    <stop offset="0.758071" stopColor="white" />
                    <stop offset="0.969734" stopColor="white" />
                    <stop offset="0.971947" stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.8" />
                </radialGradient>
                <radialGradient
                    id="paint23_radial_356_884"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(125.072 66.2907) rotate(90) scale(3.65)"
                >
                    <stop offset="0.952277" stopOpacity="0" />
                    <stop offset="1" />
                </radialGradient>
                <linearGradient
                    id="paint24_linear_356_884"
                    x1="125.072"
                    y1="71.2908"
                    x2="125.072"
                    y2="61.2908"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint25_linear_356_884"
                    x1="125.072"
                    y1="64.6533"
                    x2="125.072"
                    y2="67.6533"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" />
                </linearGradient>
                <linearGradient
                    id="paint26_linear_356_884"
                    x1="175.215"
                    y1="55.2559"
                    x2="175.215"
                    y2="77.3489"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#545678" />
                    <stop offset="1" stopColor="#3C3D55" />
                </linearGradient>
                <clipPath id="clip0_356_884">
                    <rect x="7.07227" y="6.29065" width="10" height="10" rx="5" fill="white" />
                </clipPath>
                <clipPath id="clip1_356_884">
                    <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(7.07227 6.29065)"
                    />
                </clipPath>
                <clipPath id="clip2_356_884">
                    <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(7.07227 6.29065)"
                    />
                </clipPath>
                <clipPath id="clip3_356_884">
                    <rect y="22.6744" width="199.997" height="32" rx="1" fill="white" />
                </clipPath>
                <clipPath id="clip4_356_884">
                    <rect x="20.0724" y="61.2908" width="10" height="10" rx="5" fill="white" />
                </clipPath>
                <clipPath id="clip5_356_884">
                    <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(20.0724 61.2908)"
                    />
                </clipPath>
                <clipPath id="clip6_356_884">
                    <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(20.0724 61.2908)"
                    />
                </clipPath>
                <clipPath id="clip7_356_884">
                    <rect x="120.072" y="61.2908" width="10" height="10" rx="5" fill="white" />
                </clipPath>
                <clipPath id="clip8_356_884">
                    <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(120.072 61.2908)"
                    />
                </clipPath>
                <clipPath id="clip9_356_884">
                    <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(120.072 61.2908)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default SVGBet50;
