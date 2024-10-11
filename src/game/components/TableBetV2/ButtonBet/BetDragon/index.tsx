import ChipBet from "../../../../../common/components/ChipBet";
import { useGetChipBet } from "../../../../../common/hooks/useGetChipBet";
import SvgDragon from "../../SVG/SvgDragon";
import styles from "./../styles.module.scss";
import { BetButtonIProps } from "..";
import { DisplayHelper } from "../../../../../common/utils/DisplayHelper";
import { useAppSelector } from "../../../../../store/hooks";
import { selectBetIsOpen } from "../../../../../store/slice/timerSlice";
import { RenderCard } from "../../../TableBet/RenderCard/RenderCard";


const BetDragon = ({ bet, onClick }: BetButtonIProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip, color } = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== 'dragon';
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

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
            left: "10%"
        }}>
            {chip > 0 && (
                <ChipBet value={chip} color={color} style={{ width: '100%', height: '100%' }} />
            )}
        </div>

        <div className={`${styles['slot-card']}`} style={{

        }}>

            <RenderCard
                top="-5%"
                left="40%"
                right="0px"
                position={{ x: '5px', y: '5px' }}
                rotation={{ z: '0deg' }}
                opacity={1}
                value={scanNumber ? scanNumber.dragon : ''}
                appear={
                    !betIsOpen
                }
                disappear={!scanNumber}
                submit={scanNumber && scanNumber.submit == true}
            />

        </div>
    </div>

}

export default BetDragon;