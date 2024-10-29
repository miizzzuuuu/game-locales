import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import { payoutGroup } from '../../../../utils/DragonTigerBHelper';
import { RenderCard } from '../../../Card/RenderCard';
import SvgTiger from '../../SVG/SvgTiger';
import styles from './../styles.module.scss';

const BetTiger = ({ bet, placeBetHandler }: BetButtonIProps) => {
    const chip = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== 'tiger';
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            className={`${styles['middle']} ${styles['right']} ${styles['tiger']} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
            onClick={() => placeBetHandler(bet.button, bet.group)}
        >
            <div className={styles['shadow-center']}></div>
            <div className={styles['tiger-back']}>
                <SvgTiger />
            </div>

            <div className={styles['content']}>
                <div className={styles['bet-name']}>TIGER</div>
                <div className={styles['bet-payout']}>
                    {payoutGroup[`${bet.button}-${bet.group}`]}:1
                </div>
            </div>

            <div className={styles['slot-chip']}>{chip > 0 && <ChipBet value={chip} />}</div>

            <div className={`${styles['slot-card']}`} style={{}}>
                <RenderCard
                    top="50%"
                    left="unset"
                    right="50%"
                    position={{ x: '0', y: '-170%' }}
                    rotation={{ z: '0deg' }}
                    opacity={1}
                    value={scanNumber ? scanNumber.tiger : ''}
                    appear={!betIsOpen}
                    disappear={!scanNumber}
                    submit={scanNumber && scanNumber.submit == true}
                />
            </div>
        </div>
    );
};

export default BetTiger;
