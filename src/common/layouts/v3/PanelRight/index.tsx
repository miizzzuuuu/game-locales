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
import PanelUI from '../PanelUI';
import styles from './styles.module.scss';

const PanelRight = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <PanelUI className={styles['panel-right']}>
            <Suspense>
                {RIGHT_BUTTONS.map((key) => {
                    const config = BUTTON_CONFIG[key];
                    if (!config.enabled) return null;

                    const Component = config.component;
                    return <Component key={key} />;
                })}
            </Suspense>

            <ButtonCancelBet show={betIsOpen} />
            <ButtonRebet show={betIsOpen} />

            <ChipDeck show={betIsOpen} version={2} />

            <ButtonDoubleBet show={betIsOpen} />
            <ButtonMenu />
        </PanelUI>
    );
};

export default PanelRight;
