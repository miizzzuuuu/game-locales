import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuSettings } from '../../../store/slice/menuSlice';
import SVGIconSettings from '../../menus/Items/Main/SVG/SVGIconSettings';
import ButtonAction from '../../components/ButtonAction';

const ButtonSettings = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(toggleMenuSettings());
    };

    return <ButtonAction icon={<SVGIconSettings />} onClick={handleClick} />;
};

export default ButtonSettings;
