import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuHTP } from '../../../store/slice/menuSlice';
import ButtonAction from '../../components/ButtonAction';
import SVGIconHowToPlay from '../../menus/Items/Main/SVG/SVGIconHowToPlay';

const ButtonHTP = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleMenuHTP());
    };

    return <ButtonAction icon={<SVGIconHowToPlay />} onClick={handleClick} />;
};

export default ButtonHTP;
