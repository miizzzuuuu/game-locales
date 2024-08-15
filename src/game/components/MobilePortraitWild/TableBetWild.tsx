import { useEffect, useRef, useState } from 'react';
import stylesPortrait from './table-bet-portrait.module.scss';
import stylesLandscape from './table-bet-landscape.module.scss';
import './styles.scss';
import DragonBetButton from './DragonBetButton';
import TieBetButton from './TieBetButton';
import TigerBetButton from './TigerBetButton';
import ChildBetButton from './ChildBetButton';
import SuperWildBetButton from './SuperWildBetButton';
import { useAppSelector } from '../../../store/hooks';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';

export type FadeStatus =
    | "fadeInUp"
    | "fadeOutUp"
    | "fadeInDown"
    | "fadeOutDown";

const TableBetWild = () => {
    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;
    const containerRef = useRef<HTMLDivElement>(null);
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);


    useEffect(() => {

        if (containerRef.current) {
            containerRef.current!.style.setProperty(
                '--button-bet-width',
                `${5}vw`,
            );
            containerRef.current!.style.setProperty(
                '--button-bet-height',
                `${5}vw`,
            );
        }

    }, []);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const domainContainerClassName = styles.container;
    const childContainerClassName = styles.childContainer;

    const [tableSection] =
        useState<"more" | "less">("more");
    // const [fadeStatus, setFadeStatus] = useState<FadeStatus>("fadeInUp");
    const sections = {
        less: ({ children }: any) => {
            return <>
                {children}
            </>
        },
        more: ({ children }: any) => {
            return <>
                <div className={styles.childContainerBottom}>
                    <ChildBetButton
                        //   className={classes}
                        bet={{ button: "dragonwild", group: "wild" }}
                        isLose={scanNumber && scanNumber.submit && !(scanNumber.dragon_value == scanNumber.wild_value && scanNumber.wild_value > scanNumber.tiger_value)}
                        isSubmit={scanNumber && scanNumber.submit}
                        chipCanBlinking
                        rounded='bottom-left'
                        startColor='#F30049'
                        endColor='#59001B'
                        borderColor='#BD043C'
                        ratio='24:1'
                        bgSvg={(isWin) => <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            fill="none"
                            viewBox="0 0 171 38"
                        >
                            <path
                                className={[isWin ? "table-win-blink" : ""].join(" ")}
                                fill="url(#paint0_linear_12_591)"
                                stroke="#F30049"
                                d="M169 37.5H.5V.5h129.07c11.231 9.088 25.438 14.646 40.93 14.984V36a1.5 1.5 0 01-1.5 1.5z"
                            ></path>
                            <path
                                className={[isWin ? "table-win-blink" : ""].join(" ")}
                                fill="#BC0038"
                                d="M129.747.007C141.035 9.189 155.369 14.77 171 14.999V20c-18.928-.258-36.091-7.819-48.8-19.993h7.547z"
                            ></path>
                            <path fill="url(#paint1_linear_12_591)" d="M0 1H11V37H0z"></path>
                            <path
                                fill="url(#paint2_linear_12_591)"
                                fillOpacity="0.4"
                                d="M0 1H11V37H0z"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_12_591"
                                    x1="172.23"
                                    x2="0"
                                    y1="14.08"
                                    y2="14.08"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F30049"></stop>
                                    <stop offset="1" stopColor="#69001F"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_12_591"
                                    x1="11"
                                    x2="0"
                                    y1="19"
                                    y2="19"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#470015" stopOpacity="0"></stop>
                                    <stop offset="0.332" stopColor="#470015" stopOpacity="0.32"></stop>
                                    <stop offset="0.703" stopColor="#470015"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_12_591"
                                    x1="11"
                                    x2="0"
                                    y1="19"
                                    y2="19"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#470015" stopOpacity="0"></stop>
                                    <stop offset="0.332" stopColor="#470015" stopOpacity="0.32"></stop>
                                    <stop offset="0.703" stopColor="#470015"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        }
                    />

                    <ChildBetButton
                        //   className={classes}
                        bet={{ button: "tigerwild", group: "wild" }}
                        isLose={scanNumber && scanNumber.submit && !(scanNumber.tiger_value == scanNumber.wild_value && scanNumber.wild_value > scanNumber.dragon_value)}
                        isSubmit={scanNumber && scanNumber.submit}
                        chipCanBlinking
                        startColor='#59001B'
                        endColor='#F30049'
                        borderColor='#BD043C'
                        ratio='24:1'
                        bgSvg={(isWin) =>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                fill="none"
                                viewBox="0 0 171 38"
                            >
                                <path
                                    className={[isWin ? "table-win-blink" : ""].join(" ")}
                                    fill="url(#paint0_linear_12_598)"
                                    stroke="#FFB72C"
                                    d="M.5 36V15.484C15.992 15.146 30.199 9.588 41.43.5H170.5v37H2A1.5 1.5 0 01.5 36z"
                                ></path>
                                <path
                                    className={[isWin ? "table-win-blink" : ""].join(" ")}
                                    fill="#D69729"
                                    d="M41.253.007C29.965 9.189 15.63 14.77 0 14.999V20c18.928-.258 36.09-7.819 48.8-19.993h-7.547z"
                                ></path>
                                <path fill="url(#paint1_linear_12_598)" d="M160 1H171V38H160z"></path>
                                <path fill="url(#paint2_linear_12_598)" d="M160 1H171V38H160z"></path>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_12_598"
                                        x1="171"
                                        x2="0"
                                        y1="14"
                                        y2="14"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#8C5400"></stop>
                                        <stop offset="1" stopColor="#FFC65B"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_12_598"
                                        x1="171"
                                        x2="160"
                                        y1="19.5"
                                        y2="19.5"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0.297" stopColor="#5A3800"></stop>
                                        <stop offset="0.668" stopColor="#5A3800" stopOpacity="0.32"></stop>
                                        <stop offset="1" stopColor="#5A3800" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_12_598"
                                        x1="171"
                                        x2="160"
                                        y1="19.5"
                                        y2="19.5"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop offset="0.297" stopColor="#5A3800"></stop>
                                        <stop offset="0.668" stopColor="#5A3800" stopOpacity="0.32"></stop>
                                        <stop offset="1" stopColor="#5A3800" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            }
                    />
                </div>

                {children}

                <div className={childContainerClassName}>
                    <ChildBetButton
                        //   className={classes}
                        bet={{ button: "dragonpair", group: "pair" }}
                        isLose={scanNumber && scanNumber.submit && !(scanNumber.dragon_value == scanNumber.wild_value)}
                        isSubmit={scanNumber && scanNumber.submit}
                        ratio='11:1'
                        chipCanBlinking
                        rounded='bottom-left'
                        startColor='#F30049'
                        endColor='#59001B'
                        borderColor='#BD043C'
                        bgSvg={(isWin) => <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            fill="none"
                            viewBox="0 0 171 38"
                        >
                            <path
                                className={[isWin ? "table-win-blink" : ""].join(" ")}
                                fill="url(#paint0_linear_11_577)"
                                stroke="#F30049"
                                d="M.5 37.5V.5H169a1.5 1.5 0 011.5 1.5v20.516c-15.492.338-29.699 5.896-40.93 14.984H.5z"
                            ></path>
                            <path
                                className={[isWin ? "table-win-blink" : ""].join(" ")}
                                fill="#BC0038"
                                d="M129.747 38c11.288-9.183 25.622-14.764 41.253-14.993v-5c-18.928.258-36.091 7.819-48.8 19.993h7.547z"
                            ></path>
                            <path fill="url(#paint1_linear_11_577)" d="M0 1H11V37H0z"></path>
                            <path
                                fill="url(#paint2_linear_11_577)"
                                fillOpacity="0.4"
                                d="M0 1H11V37H0z"
                            ></path>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_11_577"
                                    x1="172.23"
                                    x2="0"
                                    y1="24.08"
                                    y2="24.08"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F30049"></stop>
                                    <stop offset="1" stopColor="#69001F"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_11_577"
                                    x1="11"
                                    x2="0"
                                    y1="19"
                                    y2="19"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#470015" stopOpacity="0"></stop>
                                    <stop offset="0.332" stopColor="#470015" stopOpacity="0.32"></stop>
                                    <stop offset="0.703" stopColor="#470015"></stop>
                                </linearGradient>
                                <linearGradient
                                    id="paint2_linear_11_577"
                                    x1="11"
                                    x2="0"
                                    y1="19"
                                    y2="19"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#470015" stopOpacity="0"></stop>
                                    <stop offset="0.332" stopColor="#470015" stopOpacity="0.32"></stop>
                                    <stop offset="0.703" stopColor="#470015"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        }
                    />

                    <ChildBetButton
                        //   className={classes}
                        bet={{ button: "tigerpair", group: "pair" }}
                        isLose={scanNumber && scanNumber.submit && !(scanNumber.tiger_value == scanNumber.wild_value)}
                        isSubmit={scanNumber && scanNumber.submit}
                        chipCanBlinking
                        startColor='#59001B'
                        endColor='#F30049'
                        borderColor='#BD043C'
                        ratio='11:1'
                        bgSvg={(isWin) =>   <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            fill="none"
                            viewBox="0 0 171 38"
                          >
                            <path
                                className={[isWin ? "table-win-blink" : ""].join(" ")}
                              fill="url(#paint0_linear_12_584)"
                              stroke="#FFB72C"
                              d="M170.5 37.5H41.43C30.199 28.412 15.992 22.854.5 22.516V2A1.5 1.5 0 012 .5h168.5v37z"
                            ></path>
                            <path
                                className={[isWin ? "table-win-blink" : ""].join(" ")}
                              fill="#D69729"
                              d="M41.253 38C29.965 28.817 15.63 23.236 0 23.007v-5c18.928.258 36.09 7.819 48.8 19.993h-7.547z"
                            ></path>
                            <path fill="url(#paint1_linear_12_584)" d="M160 0H171V37H160z"></path>
                            <path fill="url(#paint2_linear_12_584)" d="M160 0H171V37H160z"></path>
                            <defs>
                              <linearGradient
                                id="paint0_linear_12_584"
                                x1="171"
                                x2="0"
                                y1="24"
                                y2="24"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#8C5400"></stop>
                                <stop offset="1" stopColor="#FFC65B"></stop>
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_12_584"
                                x1="171"
                                x2="160"
                                y1="18.5"
                                y2="18.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.297" stopColor="#5A3800"></stop>
                                <stop offset="0.668" stopColor="#5A3800" stopOpacity="0.32"></stop>
                                <stop offset="1" stopColor="#5A3800" stopOpacity="0"></stop>
                              </linearGradient>
                              <linearGradient
                                id="paint2_linear_12_584"
                                x1="171"
                                x2="160"
                                y1="18.5"
                                y2="18.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.297" stopColor="#5A3800"></stop>
                                <stop offset="0.668" stopColor="#5A3800" stopOpacity="0.32"></stop>
                                <stop offset="1" stopColor="#5A3800" stopOpacity="0"></stop>
                              </linearGradient>
                            </defs>
                          </svg>
                          }
                    />
                </div>
            </>
        }
    }



    return <>
        <div ref={containerRef} className={[styles.tableBet, betIsOpen ? styles.open : styles.close, deviceClassName, "portrait"].join(" ")}>
            <div className={styles.table}>

                {sections[tableSection]({
                    children:
                        <div className={domainContainerClassName}>
                            <DragonBetButton
                                bet={{ button: "dragon", group: "dragon" }}
                            />
                            <div className={styles.domainTie} >


                                <SuperWildBetButton
                                    bet={{ button: "superwild", group: "superwild" }}
                                />

                                <TieBetButton
                                    bet={{ button: "tie", group: "tie" }}
                                />
                            </div>

                            <TigerBetButton
                                bet={{ button: "tiger", group: "tiger" }}
                            />


                        </div>
                }
                )}
            </div>


            {/* <ButtonMore label={tableSection == "less" ? "MORE BET" : "LESS BET"} onClick={() => tableSection == "less" ? setTableSection("more") : setTableSection("less")} /> */}





        </div>
    </>
};

export default TableBetWild;
