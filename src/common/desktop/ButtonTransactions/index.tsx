import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectOpenMenuHistory, toggleMenuHistoryDesktop } from '../../../store/slice/menuSlice';
import ButtonAction from '../../components/ButtonAction';
import SVGIconHistory from '../../menus/Items/Main/SVG/SVGIconHistory';

const ButtonTransactions = () => {
    const dispatch = useAppDispatch();
    const openMenuHistory = useAppSelector(selectOpenMenuHistory);

    const handleClick = () => {
        dispatch(toggleMenuHistoryDesktop());
    };

    return (
        <ButtonAction
            icon={<SVGIconHistory />}
            borderColor={openMenuHistory ? '#00C3D8' : undefined}
            onClick={handleClick}
        />
    );
};

export default ButtonTransactions;
