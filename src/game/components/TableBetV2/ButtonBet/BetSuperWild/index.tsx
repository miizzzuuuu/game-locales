import styles from "./../styles.module.scss";
import SvgSuperWild from "../../SVG/SvgSuperWild";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import { BetButtonIProps } from "..";
import ChipBet from "../../../../../common/components/ChipBet";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import { useAppSelector } from "../../../../../store/hooks";
import { selectBetIsOpen } from "../../../../../store/slice/timerSlice";


const BetSuperWild = ({ bet, onClick }: BetButtonIProps) => {

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip, color } = useGetChipBet(bet);
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        !(
            scanNumber.dragon_value == scanNumber.tiger_value &&
            scanNumber.dragon_value == scanNumber.wild_value
        );
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return <div onClick={onClick} className={`${styles["super-wild"]} ${deviceClassName} ${isWin?styles["table-win-blink"]:""} ${isLose?styles["table-lose-opacity"]:""}`}>
        <SvgSuperWild />
        <div className={`${styles["content"]}`}>
            <div className={`${styles["bet-name"]}`}>SUPER WILD</div>
            <div className={`${styles["bet-payout"]}`}>25:1</div>
        </div>
        <div className={styles['slot-chip']}
            style={{
                top: "65%",
                left: "20%"
            }}
        >
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>
    </div>
}

export default BetSuperWild;
