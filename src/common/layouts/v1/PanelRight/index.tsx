import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonRebet from '../../../components/ButtonRebet';
import styles from './style.module.scss';

const PanelRight = () => {
    return (
        <div className={styles['panel-right']}>
            <ButtonCancelBet />
            <ButtonRebet />

            <div style={{ background: 'red', width: '3.4rem' }}>CHIP DECK</div>

            <ButtonDoubleBet />
        </div>
    );
};

export default PanelRight;
