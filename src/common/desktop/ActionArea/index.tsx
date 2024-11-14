import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import ButtonCancelBet from '../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../components/ButtonDoubleBet';
import ButtonFavorite from '../../components/ButtonFavorite';
import ButtonHideChip from '../../components/ButtonHideChip';
import ButtonRebet from '../../components/ButtonRebet';
import ChipDeck from '../../components/ChipDeck';
import styles from './styles.module.scss';

const ChipsArea = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={styles.chips}>
            <ChipDeck version={1} show={betIsOpen} />
        </div>
    );
};

const ActionArea = () => {
    return (
        <div className={styles['area-action']}>
            <div className={styles.side}>
                <ButtonHideChip />
                <ButtonFavorite />
            </div>

            <ChipsArea />

            <div className={styles.side}>
                <ButtonCancelBet />
                <ButtonRebet />
                <ButtonDoubleBet />
            </div>
        </div>
    );
};

export default ActionArea;
