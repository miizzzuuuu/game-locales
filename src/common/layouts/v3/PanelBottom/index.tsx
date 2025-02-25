import { Suspense } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectBetIsOpen } from '../../../../store/slice/timerSlice';
import ButtonCancelBet from '../../../components/ButtonCancelBet';
import ButtonDoubleBet from '../../../components/ButtonDoubleBet';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonRebet from '../../../components/ButtonRebet';
import ChipDeck from '../../../components/ChipDeck';
import { BUTTON_CONFIG } from '../../../utils/Features';
import { RIGHT_BUTTONS } from '../constants';
import styles from './styles.module.scss';

const PanelBottom = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={styles['panel-bottom']}>
            <div className={styles['button-action-wrapper']}>
                <Suspense>
                    {RIGHT_BUTTONS.map((key) => {
                        const config = BUTTON_CONFIG[key];
                        if (!config.enabled) return null;

                        const Component = config.component;
                        return <Component key={key} />;
                    })}
                </Suspense>
            </div>

            <div className={styles.middle}>
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
