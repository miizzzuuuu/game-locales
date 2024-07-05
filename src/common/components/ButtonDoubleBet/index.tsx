import { CSSProperties } from 'react';
import ButtonAction from '../ButtonAction';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useAppTranslate } from '../../../services/i18next/hooks';
import { doubleBet, selectEntitiesBetAdd, selectIdsBetAdd } from '../../../store/slice/betAddSlice';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { selectBalance } from '../../../store/slice/playerSlice';
import { selectMax, selectMax50 } from '../../../store/slice/gameSlice';
import LabelTranslate from '../LabelTranslate';
import SVGIconDoubleBet from './SVG/SVGIconDoubleBet';

interface IProps {
    styles?: CSSProperties;
    show?: boolean;
}

const ButtonDoubleBet = ({ show, styles }: IProps) => {
    const dispatch = useAppDispatch();

    const { t } = useAppTranslate();

    const idsBetAdd = useAppSelector(selectIdsBetAdd);
    const entitiesBetAdd = useAppSelector(selectEntitiesBetAdd);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isActive = idsBetAdd.length > 0 && betIsOpen;
    const balance = useAppSelector(selectBalance);

    const maxBet = useAppSelector(selectMax);
    const max50Bet = useAppSelector(selectMax50);

    const handleClick = () => {
        if (!isActive) return;

        console.log('double bet');

        // validation
        let totalDoubleBet = 0;
        idsBetAdd.forEach((key) => {
            const chipAfterBet = entitiesBetAdd[key].value * 2;

            totalDoubleBet += chipAfterBet;
        });

        if (totalDoubleBet > balance) {
            const message = t('insuffix-balance');

            console.log('bet error', message);
            // dispatch(
            //     setMessage({
            //         value: message,
            //         type: 'danger',
            //     }),
            // );

            return;
        }

        const errorMax = [];

        idsBetAdd.forEach((key) => {
            const [button, group] = key.split('-');

            const isGroup50 = false;

            const chipAfterBet = entitiesBetAdd[key].value * 2;

            const max = isGroup50 ? max50Bet : maxBet;
            if (chipAfterBet > max) {
                errorMax.push(button);
            }
        });

        if (errorMax.length > 0) {
            // dispatch(
            //     setMessage({
            //         value: 'double bet error, max bet',
            //         type: 'danger',
            //     }),
            // );

            return;
        }

        dispatch(doubleBet());
    };

    return (
        <ButtonAction
            show={show}
            label={<LabelTranslate value="double" />}
            icon={<SVGIconDoubleBet />}
            style={styles}
            disabled={!isActive}
            onClick={handleClick}
        />
    );
};

export default ButtonDoubleBet;
