import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableGameMusic,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import Item from '../../../Item';
import SVGIconMusic from '../../../SVG/SVGIconMusic';

const GameMusic = () => {
    const dispatch = useAppDispatch();

    const enableGameMusic = useAppSelector(selectEnableGameMusic);

    return (
        <Item
            label={<LabelTranslate value="background-music" />}
            icon={<SVGIconMusic />}
            active={enableGameMusic}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableGameMusic: value }));
            }}
        />
    );
};

export default GameMusic;
