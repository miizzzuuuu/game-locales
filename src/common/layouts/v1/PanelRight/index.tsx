import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonRebet from '../../../components/ButtonRebet';
import ChipDeck from '../../../components/ChipDeck';
import styles from './style.module.scss';

const PanelRight = () => {
    return (
        <div className={styles['panel-right']}>
            <ButtonCancelBet />
            <ButtonRebet />

            <ChipDeck version={1} />

            <ButtonDoubleBet />
        </div>
    );
};

export default PanelRight;
