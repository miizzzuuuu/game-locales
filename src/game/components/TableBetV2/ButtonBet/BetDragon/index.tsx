import { useTranslation } from 'react-i18next';
import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import { payoutGroup } from '../../../../utils/DragonTigerBHelper';
import { RenderCard } from '../../../Card/RenderCard';
import SvgDragon from '../../SVG/SvgDragon';
import styles from './../styles.module.scss';
import { getBasePcode } from '../../../../../common/utils/GameHelper';

const BetDragon = ({ bet, placeBetHandler }: BetButtonIProps) => {
    const { t } = useTranslation();
    const chip = useGetChipBet(bet);

    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose = !betIsOpen && scanNumber && scanNumber.submit && scanNumber.win !== 'dragon';
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            className={`${styles.middle} ${styles.left} ${styles.dragon} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
            onClick={() => placeBetHandler(bet.button, bet.group)}
        >
            <div className={`${styles['shadow-center']}`}></div>
            <div className={`${styles['dragon-back']}`}>
                <SvgDragon />
            </div>

            <div className={`${styles.content}`}>
                <div className={`${styles['bet-name']}`}>
                    {t(`${getBasePcode()}.dragon`, { ns: 'game' })}
                </div>
                <div className={`${styles['bet-payout']}`}>
                    {payoutGroup[`${bet.button}@${bet.group}`]}:1
                </div>
            </div>

            <div className={`${styles['slot-chip']}`}>{chip > 0 && <ChipBet value={chip} />}</div>

            <div className={`${styles['slot-card']}`} style={{}}>
                <RenderCard
                    top="50%"
                    left="50%"
                    right="unset"
                    position={{ x: '0', y: '-170%' }}
                    opacity={1}
                    value={scanNumber ? scanNumber.dragon : ''}
                    appear={!!(!betIsOpen && scanNumber?.dragon && scanNumber.dragon != 'x')}
                    disappear={!scanNumber}
                    submit={scanNumber?.submit}
                />
            </div>
        </div>
    );
};

export default BetDragon;
