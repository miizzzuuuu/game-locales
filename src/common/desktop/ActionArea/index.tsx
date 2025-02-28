import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import ButtonCancelBet from '../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../components/ButtonDoubleBet';
import ButtonRebet from '../../components/ButtonRebet';
import ChipDeck from '../../components/ChipDeck';
import { BUTTON_CONFIG } from '../../utils/Features';
import { DESKTOP_BUTTONS } from './constants';
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
                {/* <Suspense>
                    {DESKTOP_BUTTONS.map((key) => {
                        const config = BUTTON_CONFIG[key];
                        if (!config.enabled) {
                            return null;
                        }
                        const Component = config.component;
                        return <Component key={key} />;
                    })}
                </Suspense> */}
                {DESKTOP_BUTTONS.map((key) => {
                    const config = BUTTON_CONFIG[key];
                    if (!config.enabled) {
                        return null;
                    }
                    const Component = config.component;
                    return <Component key={key} />;
                })}
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
