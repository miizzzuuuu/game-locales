import { useAppSelector } from '../../../../store/hooks';
import { selectBetIsOpen } from '../../../../store/slice/timerSlice';
import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonHideChip from '../../../components/ButtonHideChip';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonRebet from '../../../components/ButtonRebet';
import ButtonSatatistic from '../../../components/ButtonSatatistic';
import ChipDeck from '../../../components/ChipDeck';
import PanelUI from '../PanelUI';
import styles from './styles.module.scss';

const PanelRight = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <PanelUI className={styles['panel-right']}>
            <ButtonHideChip />
            <ButtonSatatistic />

            <ButtonCancelBet show={betIsOpen} />
            <ButtonRebet show={betIsOpen} />

            <ChipDeck show={betIsOpen} version={2} />

            <ButtonDoubleBet show={betIsOpen} />
            <ButtonMenu />
        </PanelUI>
    );
};

export default PanelRight;
