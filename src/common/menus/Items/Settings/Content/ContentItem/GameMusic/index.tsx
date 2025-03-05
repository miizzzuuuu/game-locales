import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableGameMusic,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import Item from '../../../Item';
import SVGIconMusic from '../../../../../../components/SVG/Icons/SVGIconMusic';

const GameMusic = () => {
    const dispatch = useAppDispatch();

    const enableGameMusic = useAppSelector(selectEnableGameMusic);

    return (
        <Item
            label="background-music"
            icon={<SVGIconMusic />}
            active={enableGameMusic}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableGameMusic: value }));
            }}
        />
    );
};

export default GameMusic;
