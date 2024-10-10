import { BetButtonIProps } from "..";
import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import SvgTiger from "../../SVG/SvgTiger";
import styles from "./../styles.module.scss";

const BetTiger = ({ bet, onClick }: BetButtonIProps) => {
    const { chip, color } = useGetChipBet(bet);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return <div onClick={onClick}  className={`${styles["middle"]} ${styles["right"]} ${styles["tiger"]} ${deviceClassName}`}>
        <div className={styles["shadow-center"]}></div>
        <div  className={styles["tiger-back"]}>
            <SvgTiger />
        </div>

        <div className={styles["content"]}>
            <div className={styles["bet-name"]}>TIGER</div>
            <div className={styles["bet-payout"]}>25:1</div>
        </div>

        <div className={styles['slot-chip']}>
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>

    </div>
}

export default BetTiger;

