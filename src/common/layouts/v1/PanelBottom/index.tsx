import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonRebet from '../../../components/ButtonRebet';
import ChipDeck from '../../../components/ChipDeck';
import styles from './styles.module.scss';

const PanelBottom = () => {
    return (
        <div className={styles['panel-bottom']}>
            <ButtonMenu />
            <ButtonCancelBet />

            <ChipDeck version={1} />

            <ButtonRebet />
            <ButtonDoubleBet />
        </div>
    );
};

export default PanelBottom;
