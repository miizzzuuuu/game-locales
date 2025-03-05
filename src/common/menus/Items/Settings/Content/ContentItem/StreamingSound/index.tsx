import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableStreamingSound,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import Item from '../../../Item';
import SVGIconVolume from '../../../../../../components/SVG/Icons/SVGIconVolume';

const StreamingSound = () => {
    const dispatch = useAppDispatch();

    const enableStreamingSound = useAppSelector(selectEnableStreamingSound);

    return (
        <Item
            label="live-streaming-sound"
            icon={<SVGIconVolume />}
            active={enableStreamingSound}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableStreamingSound: value }));
            }}
        />
    );
};

export default StreamingSound;
