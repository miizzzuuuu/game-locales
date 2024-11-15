import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectOpenMenuHTP, toggleMenuHTP } from '../../../store/slice/menuSlice';
import ButtonAction from '../../components/ButtonAction';
import SVGIconHowToPlay from '../../menus/Items/Main/SVG/SVGIconHowToPlay';

const ButtonHTP = () => {
    const dispatch = useAppDispatch();
    const openMenuHTP = useAppSelector(selectOpenMenuHTP);

    const handleClick = () => {
        dispatch(toggleMenuHTP());
    };

    return (
        <ButtonAction
            icon={<SVGIconHowToPlay />}
            borderColor={openMenuHTP ? '#00C3D8' : undefined}
            onClick={handleClick}
        />
    );
};

export default ButtonHTP;
