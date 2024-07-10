import { useAppSelector } from '../../../../store/hooks';
import { selectBetIsOpen } from '../../../../store/slice/timerSlice';
import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonRebet from '../../../components/ButtonRebet';
import ChipDeckV2 from '../../../components/ChipDeckV2';
import styles from './styles.module.scss';

const PanelBottom = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={styles['panel-bottom']}>
            <ButtonMenu />
            <ButtonCancelBet show={betIsOpen} />

            {/* <ChipDeck version={1} show={betIsOpen} /> */}
            <ChipDeckV2 version={1} show={betIsOpen} />

            <ButtonRebet show={betIsOpen} />
            <ButtonDoubleBet show={betIsOpen} />
        </div>
    );
};

export default PanelBottom;
