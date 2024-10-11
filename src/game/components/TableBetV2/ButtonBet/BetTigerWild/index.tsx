import { BetButtonIProps } from "..";
import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import styles from "./../styles.module.scss";


const BetTigerWild = ({ bet, onClick }: BetButtonIProps) => {
    const { chip, color } = useGetChipBet(bet);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return <div onClick={onClick} className={`${styles["top"]} ${styles["right"]} ${styles["tiger-wild"]} ${deviceClassName}`}>
        <div className={styles["shadow-center"]}></div>

        <div className={styles["content"]}>
            <div className={styles["bet-name"]}>TIGER WILD</div>
            <div className={styles["bet-payout"]}>25:1</div>
        </div>

        <div className={styles['slot-chip']}
            style={{
                left: "30%"
            }}
        >
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>

    </div>
}

export default BetTigerWild;