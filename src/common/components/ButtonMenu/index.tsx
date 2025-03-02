import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuMain } from '../../../store/slice/menuSlice';
import ButtonAction from '../ButtonAction';
import SVGIconMenu from './SVG/SVGIconMenu';

const ButtonMenu = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    return (
        <ButtonAction
            label={t('menu', { lng: 'en' })}
            icon={<SVGIconMenu />}
            onClick={() => dispatch(toggleMenuMain())}
        />
    );
};

export default ButtonMenu;
