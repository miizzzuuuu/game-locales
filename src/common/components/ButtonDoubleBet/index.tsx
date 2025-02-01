import { CSSProperties } from 'react';
import { useAppTranslate } from '../../../services/i18next/hooks';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { doubleBet, selectBetAdd, selectIdsBetAdd } from '../../../store/slice/bets';
import { selectMax, selectMax50 } from '../../../store/slice/gameSlice';
import { setMessage } from '../../../store/slice/gameStateSlice';
import { selectBalance } from '../../../store/slice/playerSlice';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import ButtonAction from '../ButtonAction';
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
    const betAdd = useAppSelector(selectBetAdd);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isActive = idsBetAdd.length > 0 && betIsOpen;
    const balance = useAppSelector(selectBalance);

    const maxBet = useAppSelector(selectMax);
    const max50Bet = useAppSelector(selectMax50);

    const handleClick = () => {
        if (!isActive) return;

        // validation
        let totalDoubleBet = 0;
        idsBetAdd.forEach((key) => {
            const chipAfterBet = betAdd[key] * 2;

            totalDoubleBet += chipAfterBet;
        });

        if (totalDoubleBet > balance) {
            const message = t('insuffix-balance');

            dispatch(
                setMessage({
                    value: message,
                    type: 'danger',
                }),
            );

            return;
        }

        const errorMax = [];

        idsBetAdd.forEach((key) => {
            const [button] = key.split('@');

            const isGroup50 = false;

            const chipAfterBet = betAdd[key] * 2;

            const max = isGroup50 ? max50Bet : maxBet;
            if (chipAfterBet > max) {
                errorMax.push(button);
            }
        });

        if (errorMax.length > 0) {
            dispatch(
                setMessage({
                    value: t('doublebet-error-max-bet'),
                    type: 'danger',
                }),
            );

            return;
        }

        dispatch(doubleBet());
    };

    return (
        <ButtonAction
            show={show}
            label={<LabelTranslate value="double" option={{ lng: 'en' }} />}
            icon={<SVGIconDoubleBet />}
            style={styles}
            disabled={!isActive}
            onClick={handleClick}
        />
    );
};

export default ButtonDoubleBet;
