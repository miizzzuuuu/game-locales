import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableStreamingSound,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import Item from '../../../Item';
import SVGIconVolume from '../../../SVG/SVGIconVolume';

const StreamingSound = () => {
    const dispatch = useAppDispatch();

    const enableStreamingSound = useAppSelector(selectEnableStreamingSound);

    return (
        <Item
            label={<LabelTranslate value="live-streaming-sound" />}
            icon={<SVGIconVolume />}
            active={enableStreamingSound}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableStreamingSound: value }));
            }}
        />
    );
};

export default StreamingSound;
