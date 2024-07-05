import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonRebet from '../../../components/ButtonRebet';
import styles from './styles.module.scss';

const PanelBottom = () => {
    return (
        <div className={styles['panel-bottom']}>
            <ButtonMenu />
            <ButtonCancelBet />

            <div style={{ background: 'red', height: '3.4rem' }}>CHIP DECK</div>

            <ButtonRebet />
            <ButtonDoubleBet />
        </div>
    );
};

export default PanelBottom;
