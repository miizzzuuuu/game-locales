import { CSSProperties } from 'react';
import ButtonAction from '../ButtonAction';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectHistoryBetAdd, undoBet } from '../../../store/slice/betAddSlice';
import LabelTranslate from '../LabelTranslate';
import SVGIconCancelBet from './SVG/SVGIconCancelBet';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';

interface IProps {
    styles?: CSSProperties;
    show?: boolean;
}

const ButtonCancelBet = ({ styles, show }: IProps) => {
    const dispatch = useAppDispatch();

    const historyBetAdd = useAppSelector(selectHistoryBetAdd);
    const betIsOpen = useAppSelector(selectBetIsOpen);

    const isActive = historyBetAdd.length > 0 && betIsOpen;

    const handleClick = () => {
        console.log('cancel bet');

        dispatch(undoBet());
    };

    return (
        <ButtonAction
            show={show}
            label={<LabelTranslate value="cancel" option={{ lng: 'en' }} />}
            icon={<SVGIconCancelBet />}
            style={styles}
            disabled={!isActive}
            onClick={handleClick}
        />
    );
};

export default ButtonCancelBet;
