import { BetButtonIProps } from '..';
import ChipBet from '../../../../../common/components/ChipBet';
import { useGetChipBet } from '../../../../../common/hooks/useGetChipBet';
import { DisplayHelper } from '../../../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../../../store/hooks';
import { selectBetIsOpen } from '../../../../../store/slice/timerSlice';
import { DragonTigerBHelper } from '../../../../utils/DragonTigerBHelper';
import SvgSuperWild from '../../SVG/SvgSuperWild';
import styles from './../styles.module.scss';

const BetSuperWild = ({ bet, placeBetHandler }: BetButtonIProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const { chip } = useGetChipBet(bet);
    const scanNumber = useAppSelector((state) => state.result.scanNumber);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isLose =
        !betIsOpen &&
        scanNumber &&
        scanNumber.submit &&
        !(
            scanNumber.dragon_value == scanNumber.tiger_value &&
            scanNumber.dragon_value == scanNumber.wild_value
        );
    const isWin = !betIsOpen && scanNumber && scanNumber.submit && !isLose;

    return (
        <div
            className={`${styles['super-wild']} ${deviceClassName} ${isWin ? styles['table-win-blink'] : ''} ${isLose ? styles['table-lose-opacity'] : ''}`}
            onClick={() => placeBetHandler(bet.button, bet.group)}
        >
            <SvgSuperWild />
            <div className={`${styles['content']}`}>
                <div className={`${styles['bet-name']}`}>SUPER WILD</div>
                <div className={`${styles['bet-payout']}`}>
                    {DragonTigerBHelper.payoutGroup[`${bet.button}-${bet.group}`]}:1
                </div>
            </div>
            <div
                className={styles['slot-chip']}
                style={{
                    top: '65%',
                    left: '20%',
                }}
            >
                {chip > 0 && <ChipBet value={chip} />}
            </div>
        </div>
    );
};

export default BetSuperWild;
