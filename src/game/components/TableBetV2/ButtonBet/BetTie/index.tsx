import { BetButtonIProps } from "..";
import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import SvgTie from "../../SVG/SvgTie";
import styles from "./../styles.module.scss";


const BetTie = ({ bet, onClick }: BetButtonIProps) => {
    const { chip, color } = useGetChipBet(bet);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return <div onClick={onClick} className={`${styles["tie"]} ${deviceClassName}`}>
        <SvgTie />
        <div className={styles["content"]}>
            <div className={styles["bet-name"]}>TIE</div>
            <div className={styles["bet-payout"]}>25:1</div>
        </div>

        <div className={styles['slot-chip']}>
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>

    </div>
}

export default BetTie;