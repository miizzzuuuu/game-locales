import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectOpenMenuSettings, toggleMenuSettings } from '../../../store/slice/menuSlice';
import SVGIconSettings from '../../menus/Items/Main/SVG/SVGIconSettings';
import ButtonAction from '../../components/ButtonAction';

const ButtonSettings = () => {
    const dispatch = useAppDispatch();
    const openMenuSettings = useAppSelector(selectOpenMenuSettings);

    const handleClick = () => {
        dispatch(toggleMenuSettings());
    };

    return (
        <ButtonAction
            icon={<SVGIconSettings />}
            borderColor={openMenuSettings ? '#00C3D8' : undefined}
            onClick={handleClick}
        />
    );
};

export default ButtonSettings;
