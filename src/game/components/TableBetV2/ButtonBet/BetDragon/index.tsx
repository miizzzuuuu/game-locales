import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import { DragonTigerBHelper } from '../../../../utils/DragonTigerBHelper';
import { RenderCard } from '../../RenderCard/RenderCard';
import SvgDragon from '../../SVG/SvgDragon';
import styles from './../styles.module.scss';

const BetDragon = ({ bet, placeBetHandler }: BetButtonIProps) => {
    const chip = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== 'dragon';
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            className={`${styles['middle']} ${styles['left']} ${styles['dragon']} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
            onClick={() => placeBetHandler(bet.button, bet.group)}
        >
            <div className={`${styles['shadow-center']}`}></div>
            <div className={`${styles['dragon-back']}`}>
                <SvgDragon />
            </div>

            <div className={`${styles['content']}`}>
                <div className={`${styles['bet-name']}`}>DRAGON</div>
                <div className={`${styles['bet-payout']}`}>
                    {DragonTigerBHelper.payoutGroup[`${bet.button}-${bet.group}`]}:1
                </div>
            </div>

            <div className={`${styles['slot-chip']}`}>{chip > 0 && <ChipBet value={chip} />}</div>

            <div className={`${styles['slot-card']}`} style={{}}>
                <RenderCard
                    top="50%"
                    left="50%"
                    right="unset"
                    position={{ x: '0', y: '-170%' }}
                    rotation={{ z: '0deg' }}
                    opacity={1}
                    value={scanNumber ? scanNumber.dragon : ''}
                    appear={!betIsOpen}
                    disappear={!scanNumber}
                    submit={scanNumber && scanNumber.submit == true}
                />
            </div>
        </div>
    );
};

export default BetDragon;
