import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectHistoryBetAdd, undoBet } from '../../../store/slice/bets';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import ButtonAction from '../ButtonAction';
import SVGIconCancelBet from './SVG/SVGIconCancelBet';

interface IProps {
    styles?: CSSProperties;
    show?: boolean;
}

const ButtonCancelBet = ({ styles, show }: IProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const betIsOpen = useAppSelector(selectBetIsOpen);
    const historyBetAdd = useAppSelector(selectHistoryBetAdd);

    const isActive = historyBetAdd.length > 0 && betIsOpen;

    const handleClick = () => {
        dispatch(undoBet());
    };

    return (
        <ButtonAction
            show={show}
            label={t('cancel', { lng: 'en' })}
            icon={<SVGIconCancelBet />}
            style={styles}
            disabled={!isActive}
            onClick={handleClick}
        />
    );
};

export default ButtonCancelBet;
