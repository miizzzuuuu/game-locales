import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectOpenMenuSettings, toggleMenuSettingsDesktop } from '../../../store/slice/menuSlice';
import ButtonAction from '../../components/ButtonAction';
import SVGIconSettings from '../../menus/Items/Main/SVG/SVGIconSettings';

const ButtonSettings = () => {
    const dispatch = useAppDispatch();
    const openMenuSettings = useAppSelector(selectOpenMenuSettings);

    const handleClick = () => {
        dispatch(toggleMenuSettingsDesktop());
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
