import { useTranslation } from 'react-i18next';
import ButtonAction from '../ButtonAction';
import SVGIconFavorite from './SVG/SVGIconFavorite';

const ButtonFavorite = () => {
    const { t } = useTranslation();

    return <ButtonAction label={t('favorite', { lng: 'en' })} icon={<SVGIconFavorite />} />;
};

export default ButtonFavorite;
