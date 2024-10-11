import { BetButtonIProps } from "..";
import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import { useAppSelector } from "../../../../../store/hooks";
import { selectBetIsOpen } from "../../../../../store/slice/timerSlice";
import { RenderCard } from "../../../TableBet/RenderCard/RenderCard";
import SvgTiger from "../../SVG/SvgTiger";
import styles from "./../styles.module.scss";

const BetTiger = ({ bet, onClick }: BetButtonIProps) => {
    const { chip, color } = useGetChipBet(bet);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);


    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== 'dragon';
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;


    return <div onClick={onClick} className={`${styles["middle"]} ${styles["right"]} ${styles["tiger"]} ${deviceClassName}`}>
        <div className={styles["shadow-center"]}></div>
        <div className={styles["tiger-back"]}>
            <SvgTiger />
        </div>

        <div className={styles["content"]}>
            <div className={styles["bet-name"]}>TIGER</div>
            <div className={styles["bet-payout"]}>25:1</div>
        </div>

        <div className={styles['slot-chip']}
            style={{
                left: "80%"

            }}
        >
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>

        <div className={`${styles['slot-card']}`} style={{ }}>

            <RenderCard
                top="-5%"
                left="unset"
                right={DisplayHelper.getOrientation() == "landscape"? "45%": "50%"}
                position={{ x: '5px', y: '5px' }}
                rotation={{ z: '0deg' }}
                opacity={1}
                value={scanNumber ? scanNumber.tiger : ''}
                appear={
                    !betIsOpen
                }
                disappear={!scanNumber}
                submit={scanNumber && scanNumber.submit == true}
            />

        </div>

    </div>
}

export default BetTiger;

