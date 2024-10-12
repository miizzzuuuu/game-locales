import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { DisplayHelper } from '../../../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import styles from './../styles.module.scss';

const BetDragonPair = ({ bet, onClick }: BetButtonIProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip } = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== 'dragon';
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            onClick={onClick}
            className={`${styles['bottom']} ${styles['left']} ${styles['dragon-pair']} ${deviceClassName} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
        >
            <div className={styles['shadow-center']}></div>
            <div className={styles['content']}>
                <div className={styles['bet-name']}>DRAGON PAIR</div>
                <div className={styles['bet-payout']}>25:1</div>
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
