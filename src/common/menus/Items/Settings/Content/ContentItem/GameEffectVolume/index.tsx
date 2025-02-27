import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectVolumeGameSound,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import { RoundRangeSlider } from '../../../RoundRangeSlider';

const GameEffectVolume = () => {
    const dispatch = useAppDispatch();

    const volumeGameSound = useAppSelector(selectVolumeGameSound);

    return (
        <RoundRangeSlider
            initialValue={volumeGameSound}
            onChange={(value) => {
                dispatch(updateSetings({ volumeGameSound: value }));
            }}
            minValue={0}
            maxValue={100}
        />
    );
};

export default GameEffectVolume;
