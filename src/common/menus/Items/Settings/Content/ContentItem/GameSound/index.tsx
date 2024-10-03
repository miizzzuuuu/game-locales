import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableGameSound,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import Item from '../../../Item';
import SVGIconMusic from '../../../SVG/SVGIconMusic';

const GameSound = () => {
    const dispatch = useAppDispatch();

    const enableGameSound = useAppSelector(selectEnableGameSound);

    return (
        <Item
            label={<LabelTranslate value="game-effects" />}
            icon={<SVGIconMusic />}
            active={enableGameSound}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableGameSound: value }));
            }}
        />
    );
};

export default GameSound;
