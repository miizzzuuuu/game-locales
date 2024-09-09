import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconFavorite from './SVG/SVGIconFavorite';

const ButtonFavorite = () => {
    return (
        <ButtonAction
            label={<LabelTranslate value="favorite" option={{ lng: 'en' }} />}
            icon={<SVGIconFavorite />}
        />
    );
};

export default ButtonFavorite;
