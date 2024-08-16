import { PropsWithChildren } from 'react';
import stylesPortrait from './table-bet-portrait.module.scss';
import stylesLandscape from './table-bet-landscape.module.scss';
import './styles.scss'; import { useAppSelector } from '../../../store/hooks';
import { Bet } from '../../../types';
import { useGetChipBet } from '../../../common/hooks/useGetChipBet';
import { usePlaceBet } from '../../../common/hooks/usePlaceBet';
import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import ChipBet from '../../../common/components/ChipBet';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { GameHelper } from '../../../common/utils/GameHelper';
import LabelTranslate from '../../../common/components/LabelTranslate';
// import CardHelper from '../../../utils/CardHelper';

interface IProps extends PropsWithChildren {
    bet: Bet;
}


const TieBetButton = (
    { bet, children }: IProps
) => {
    const styles = DisplayHelper.getOrientation() == "landscape" ? stylesLandscape : stylesPortrait;

    const { chip, color } = useGetChipBet(bet);
    const { placeBetHanlder: handleClick } = usePlaceBet();
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const scanNumber = useAppSelector((state) => state.result.scanNumber);

    const ratio = "11:1";
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== "tie";
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose

    return (
        <>
            {children}
            <div
                onClick={() => handleClick(bet)}
                style={{ opacity: isLose ? 0.6 : 1 }}
                className={[styles.domainContentTie, deviceClassName, "notSuperWild"].join(" ")}>
                {/* <LevelStat level={90} /> */}
                <div className={styles.tieLabel} >
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column"
                    }}>

                        <span className={styles.text_lg}>
                            <LabelTranslate value={bet.button.toLowerCase()} keyLang={GameHelper.getBasePcode()} />
                        </span>
                        <span>{ratio}</span>
                    </div>

                </div>
                <div className={styles['slot-chip']}
                    style={{ left: "80%", top: "15%" }}
                >
                    {chip > 0 && (
                        <ChipBet
                            value={chip}
                            color={color}
                        />



                    )}
                </div>
            </div>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120%"
                // height="65"
                fill="none"
                viewBox="0 0 130 65"
                style={{
                    zIndex: 3,
                    opacity: isLose ? 0.6 : 1
                }}
                onClick={() => handleClick(bet)}

            >
                <path
                    className={[isWin ? "table-win-blink" : ""].join(" ")}
                    fill="url(#paint0_linear_234_245)"
                    stroke="#01CBA7"
                    d="M110.609 45.608c-25.19 25.19-66.028 25.19-91.217 0C7.434 33.651 1.153 18.167.549 2.503A.973.973 0 011.53 1.5H128.47a.973.973 0 01.982 1.003c-.605 15.664-6.885 31.148-18.843 43.105z"
                ></path>
                <path
                    className={[isWin ? "table-win-blink" : ""].join(" ")}
                    fill="#01CBB3"
                    fillOpacity="0.24"
                    d="M4.736.98C5.666 33.728 32.491 60 65.49 60c32.998 0 59.823-26.272 60.753-59.02h-3.433v.841H68.219V7.88h54.019l-1.118 5.25h-.052C116.155 32.706 101 48.485 81.633 54.178l-1.976.494-3.275.832V23.476h15.883v5.251H81.607V48.64c16.481-5.355 29.375-18.821 34.028-35.51H68.167v43.283h-5.251V13.156H15.448C20.1 29.819 33.02 43.31 49.476 48.666V28.753H38.818v-5.251H54.7v32.027l-3.275-.832-1.95-.546C30.11 48.484 14.954 32.704 10.041 13.156h-.052L8.87 7.904H62.89V1.847H8.299V.98H4.736z"
                ></path>
                <defs>
                    <linearGradient
                        id="paint0_linear_234_245"
                        x1="65"
                        x2="65"
                        y1="1"
                        y2="65"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#005F4E"></stop>
                        <stop offset="1" stopColor="#01CBA7"></stop>
                    </linearGradient>
                </defs>
            </svg>



        </>
    );
};

export default TieBetButton;
