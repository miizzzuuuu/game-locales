import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { DisplayHelper } from '../../../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import { DragonTigerBHelper } from '../../../../utils/DragonTigerBHelper';
import styles from './../styles.module.scss';

const BetDragonPair = ({ bet, placeBetHandler }: BetButtonIProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip } = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && !(scanNumber.dragon_value == scanNumber.wild_value);
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            className={`${styles['bottom']} ${styles['left']} ${styles['dragon-pair']} ${deviceClassName} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
            onClick={() => placeBetHandler(bet.button, bet.group)}
        >
            <div className={styles['shadow-center']}></div>
            <div className={styles['content']}>
                <div className={styles['bet-name']}>DRAGON PAIR</div>
                <div className={styles['bet-payout']}>
                    {DragonTigerBHelper.payoutGroup[`${bet.button}-${bet.group}`]}:1
                </div>
            </div>

            <div
                className={styles['slot-chip']}
                style={{
                    left: '70%',
                }}
            >
                {chip > 0 && <ChipBet value={chip} />}
            </div>
        </div>
    );
};

export default BetDragonPair;
