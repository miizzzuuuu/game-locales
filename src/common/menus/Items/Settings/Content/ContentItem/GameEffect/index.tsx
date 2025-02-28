import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableGameSound,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import Item from '../../../Item';
import SVGIconSfx from '../../../SVG/SVGIconSfx';

const GameEffect = () => {
    const dispatch = useAppDispatch();

    const enableGameSound = useAppSelector(selectEnableGameSound);

    return (
        <Item
            label={<LabelTranslate value="game-effects" />}
            icon={<SVGIconSfx />}
            active={enableGameSound}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableGameSound: value }));
            }}
        />
    );
};

export default GameEffect;
