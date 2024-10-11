import { BetButtonIProps } from "..";
import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import styles from "./../styles.module.scss";

const BetDragonPair = ({ bet, onClick }: BetButtonIProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip, color } = useGetChipBet(bet);

    return <div
        onClick={onClick}
        className={`${styles["bottom"]} ${styles["left"]} ${styles["dragon-pair"]} ${deviceClassName}`}>
        <div className={styles["shadow-center"]}></div>
        <div className={styles["content"]}>
            <div className={styles["bet-name"]}>DRAGON PAIR</div>
            <div className={styles["bet-payout"]}>25:1</div>
        </div>

        <div className={styles['slot-chip']}
        style={{
            left: "70%"

        }}
        >
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>

    </div>
}

export default BetDragonPair;

