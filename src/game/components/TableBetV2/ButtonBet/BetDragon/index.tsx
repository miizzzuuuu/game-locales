import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import SvgDragon from "../../SVG/SvgDragon";
import styles from "./../styles.module.scss";
import { BetButtonIProps } from "..";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";


const BetDragon = ({ bet, onClick }: BetButtonIProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip, color } = useGetChipBet(bet);

    return <div className={`${styles["middle"]} ${styles["left"]} ${styles["dragon"]} ${deviceClassName}`}
        onClick={onClick}
    >
        <div className={`${styles["shadow-center"]}`}></div>
        <div className={`${styles["dragon-back"]}`}>
            <SvgDragon />
        </div>

        <div className={`${styles["content"]}`}>
            <div className={`${styles["bet-name"]}`}>DRAGON</div>
            <div className={`${styles["bet-payout"]}`}>25:1</div>
        </div>

        <div className={`${styles['slot-chip']}`} style={{
            
        }}>
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>
    </div>

}

export default BetDragon;