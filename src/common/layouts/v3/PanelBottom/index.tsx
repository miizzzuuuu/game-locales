import { useAppSelector } from '../../../../store/hooks';
import { selectBetIsOpen } from '../../../../store/slice/timerSlice';
import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonHideChip from '../../../components/ButtonHideChip';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonRebet from '../../../components/ButtonRebet';
import ButtonSatatistic from '../../../components/ButtonSatatistic';
import ChipDeck from '../../../components/ChipDeck';
import styles from './styles.module.scss';

const PanelBottom = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={styles['panel-bottom']}>
            <div className={styles['button-action-wrapper']}>
                <ButtonHideChip />
                <ButtonSatatistic />
            </div>

            <div className={styles['middle']}>
                <ChipDeck show={betIsOpen} version={2} />

                <div className={styles['middle-left']}>
                    <ButtonCancelBet show={betIsOpen} />
                </div>

                <div className={styles['middle-right']}>
                    <ButtonRebet show={betIsOpen} />
                    <ButtonDoubleBet show={betIsOpen} />
                </div>
            </div>

            <div className={styles['button-action-wrapper']}>
                <ButtonMenu />
            </div>
        </div>
    );
};

export default PanelBottom;
