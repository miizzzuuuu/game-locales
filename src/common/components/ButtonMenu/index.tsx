import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuMain } from '../../../store/slice/menuSlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconMenu from './SVG/SVGIconMenu';

const ButtonMenu = () => {
    const dispatch = useAppDispatch();

    return (
        <ButtonAction
            label={<LabelTranslate value="menu" />}
            icon={<SVGIconMenu />}
            onClick={() => dispatch(toggleMenuMain())}
        />
    );
};

export default ButtonMenu;
