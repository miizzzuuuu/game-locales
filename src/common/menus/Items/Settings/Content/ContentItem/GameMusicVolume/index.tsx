import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectVolumeGameMusic,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import { RoundRangeSlider } from '../../../RoundRangeSlider';

const GameMusicVolume = () => {
    const dispatch = useAppDispatch();

    const volumeGameMusic = useAppSelector(selectVolumeGameMusic);

    return (
        <RoundRangeSlider
            initialValue={volumeGameMusic}
            onChange={(value) => {
                dispatch(updateSetings({ volumeGameMusic: value }));
            }}
            minValue={0}
            maxValue={100}
        />
    );
};

export default GameMusicVolume;
