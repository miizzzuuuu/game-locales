import { useTranslation } from 'react-i18next';
import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import { payoutGroup } from '../../../../utils/DragonTigerBHelper';
import styles from './../styles.module.scss';

const BetTigerPair = ({ bet, placeBetHandler }: BetButtonIProps) => {
    const { t } = useTranslation();
    const chip = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose =
        scanNumber && scanNumber.submit && !(scanNumber.tiger_value == scanNumber.wild_value);
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            className={`${styles.bottom} ${styles.right} ${styles['tiger-pair']} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
            onClick={() => placeBetHandler(bet.button, bet.group)}
        >
            <div className={styles['shadow-center']}></div>

            <div className={styles.content}>
                <div className={styles['bet-name']}>
                    {t(`${getBasePcode()}.tiger pair`, { ns: 'game' })}
                </div>
                <div className={styles['bet-payout']}>
                    {payoutGroup[`${bet.button}-${bet.group}`]}:1
                </div>
            </div>

            <div className={styles['slot-chip']}>{chip > 0 && <ChipBet value={chip} />}</div>
        </div>
    );
};

export default BetTigerPair;
