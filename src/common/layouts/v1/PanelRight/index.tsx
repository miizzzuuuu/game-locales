import { useAppSelector } from '../../../../store/hooks';
import { selectBetIsOpen } from '../../../../store/slice/timerSlice';
import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonRebet from '../../../components/ButtonRebet';
import ChipDeck from '../../../components/ChipDeck';
import styles from './style.module.scss';

const PanelRight = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={styles['panel-right']}>
            <ButtonCancelBet show={betIsOpen} />
            <ButtonRebet show={betIsOpen} />

            <ChipDeck version={1} show={betIsOpen} />

            <ButtonDoubleBet show={betIsOpen} />
        </div>
    );
};

export default PanelRight;
