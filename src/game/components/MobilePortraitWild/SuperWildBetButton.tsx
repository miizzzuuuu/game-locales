import { PropsWithChildren } from 'react';
import stylesPortrait from './table-bet-portrait.module.scss';
import stylesLandscape from './table-bet-landscape.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { RenderCard } from './RenderCard/RenderCard';
import { Bet } from '../../../types';
import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { useGetChipBet } from '../../../common/hooks/useGetChipBet';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import ChipBet from '../../../common/components/ChipBet';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import LabelTranslate from '../../../common/components/LabelTranslate';
import { GameHelper } from '../../../common/utils/GameHelper';
// import LevelStat from '../MobilePortrait/Content/LevelStat';

interface IProps extends PropsWithChildren {
    className?: string;
    bet: Bet;
    chipCanBlinking?: boolean;
}


const SuperWildBetButton = (
    { bet, children, className, chipCanBlinking }: IProps
) => {
    const { chip, color } = useGetChipBet(bet);
    const { placeBetHanlder: handleClick } = usePlaceBet();
    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;

    // const totalPlacedChipCount = "12,640,600";
    // const totalPlacedUserCount = "12";
    // const domainPlacedPercentage = "12";
    const ratio = "80:1";
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && !(scanNumber.dragon_value == scanNumber.tiger_value && scanNumber.dragon_value == scanNumber.wild_value)
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <>
            {children}
            <div

                style={{
                    opacity: isLose ? 0.6 : 1
                }}
                onClick={() => handleClick(bet)}

                className={styles.domainContentTie}>
                {/* <LevelStat level={90} /> */}
                <div className={styles.tieLabel} >
                    <div style={{}}>

                        <span className='text-lg'>
                            <LabelTranslate value={bet.button.toLowerCase()} keyLang={GameHelper.getBasePcode()} />

                        </span>
                        <br />
                        <span className='text-white/[.75]'>{ratio}</span>
                    </div>

                </div>
                <div className={styles['slot-chip']}
                    style={{ left: "30%" }}
                >

                    {chip > 0 && (
                        <ChipBet
                            value={chip}
                            color={color}
                        />



                    )}
                </div>

                <div
                    className={styles.cardContainerWild}



                >
                    { !betIsOpen && scanNumber && <RenderCard
                        top="0px"
                        left="0px"
                        right="0px"
                        position={{ x: "3px", y: "15px" }}
                        rotation={{ z: "0deg" }}
                        value={scanNumber.wild}

                        visible={scanNumber.wild == "x" ? false : true}
                        submit={scanNumber.submit}
                    />}
                </div>

            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120%"
                //   height="65"
                fill="none"
                viewBox="0 0 130 65"
                onClick={() => handleClick(bet)}
                style={{
                    zIndex: 3,
                    opacity: isLose ? 0.6 : 1
                }}


            >
                <path
                    className={[isWin ? "table-win-blink" : ""].join(" ")}

                    fill="url(#paint0_linear_234_251)"
                    stroke="#00A4EA"
                    d="M128.47 63.5H1.531a.973.973 0 01-.982-1.003c.604-15.664 6.885-31.148 18.843-43.105 25.189-25.19 66.028-25.19 91.217 0 11.958 11.957 18.238 27.441 18.843 43.105a.973.973 0 01-.982 1.003z"
                ></path>
                <path
                    className={[isWin ? "table-win-blink" : ""].join(" ")}

                    fill="#00C4D1"
                    fillOpacity="0.24"
                    d="M4.736 64.02C5.666 31.272 32.491 5 65.49 5c32.998 0 59.823 26.272 60.753 59.02h-3.433v-.841H68.219V57.12h54.019l-1.118-5.25h-.052C116.155 32.294 101 16.515 81.633 10.822l-1.976-.494-3.275-.832v32.027h15.883v-5.251H81.607V16.36c16.481 5.355 29.375 18.821 34.028 35.51H68.167V8.587h-5.251v43.257H15.448C20.1 35.181 33.02 21.69 49.476 16.334v19.913H38.818v5.251H54.7V9.471l-3.275.832-1.95.546C30.11 16.516 14.954 32.295 10.041 51.844h-.052L8.87 57.096H62.89v6.057H8.299v.867H4.736z"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_234_251"
                        x1="65"
                        x2="65"
                        y1="0"
                        y2="64"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#00A4EA"></stop>
                        <stop offset="1" stopColor="#00567C"></stop>
                    </linearGradient>
                </defs>
            </svg>



        </>
    );
};

export default SuperWildBetButton;
