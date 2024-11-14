import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuHistory } from '../../../store/slice/menuSlice';
import ButtonAction from '../../components/ButtonAction';
import SVGIconHistory from '../../menus/Items/Main/SVG/SVGIconHistory';

const ButtonTransactions = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleMenuHistory());
    };

    return <ButtonAction icon={<SVGIconHistory />} onClick={handleClick} />;
};

export default ButtonTransactions;
