import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectVolumeStreamingSound,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import { RoundRangeSlider } from '../../../RoundRangeSlider';

const StreamingVolume = () => {
    const dispatch = useAppDispatch();

    const volumeStreamingSound = useAppSelector(selectVolumeStreamingSound);

    return (
        <RoundRangeSlider
            initialValue={volumeStreamingSound}
            onChange={(value) => {
                dispatch(updateSetings({ volumeStreamingSound: value }));
            }}
            minValue={0}
            maxValue={100}
        />
    );
};

export default StreamingVolume;
