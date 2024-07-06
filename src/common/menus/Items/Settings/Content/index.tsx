import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import {
    selectAutoRebet,
    selectEnableGameSound,
    selectEnableStreamingSound,
    selectEnableStreamingVideo,
    selectVolumeGameSound,
    selectVolumeStreamingSound,
    updateSetings,
} from '../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../components/LabelTranslate';
import Item from '../Item';
import { RoundRangeSlider } from '../RoundRangeSlider';
import SVGIconBetClick from '../SVG/SVGIconBetClick';
import SVGIconCamera from '../SVG/SVGIconCamera';
import SVGIconLanguage from '../SVG/SVGIconLanguage';
import SVGIconMusic from '../SVG/SVGIconMusic';
import SVGIconVolume from '../SVG/SVGIconVolume';
import Separator from '../Separator';
import SettingLanguage from '../SettingLanguage';
import StreamingQuality from '../StreamingQuality';

import styles from './styles.module.scss';

const Content = () => {
    const dispatch = useAppDispatch();

    const enableStreamingVideo = useAppSelector(selectEnableStreamingVideo);
    const enableStreamingSound = useAppSelector(selectEnableStreamingSound);
    const volumeStreamingSound = useAppSelector(selectVolumeStreamingSound);
    const enableGameSound = useAppSelector(selectEnableGameSound);
    const volumeGameSound = useAppSelector(selectVolumeGameSound);
    const autoRebet = useAppSelector(selectAutoRebet);

    return (
        <div className={styles['menu-settings']}>
            <Item
                label={<LabelTranslate value="video" />}
                icon={<SVGIconCamera />}
                active={enableStreamingVideo}
                onChangeActive={(value) => {
                    dispatch(updateSetings({ enableStreamingVideo: value }));
                }}
            />

            <StreamingQuality />

            <Separator />

            <Item
                label={<LabelTranslate value="live-streaming-sound" />}
                icon={<SVGIconVolume />}
                active={enableStreamingSound}
                onChangeActive={(value) => {
                    dispatch(updateSetings({ enableStreamingSound: value }));
                }}
            />

            <RoundRangeSlider
                initialValue={volumeStreamingSound}
                onChange={(value) => {
                    dispatch(updateSetings({ volumeStreamingSound: value }));
                }}
                minValue={0}
                maxValue={100}
            />

            <Separator />

            <Item
                label={<LabelTranslate value="game-effects" />}
                icon={<SVGIconMusic />}
                active={enableGameSound}
                onChangeActive={(value) => {
                    dispatch(updateSetings({ enableGameSound: value }));
                }}
            />

            <RoundRangeSlider
                initialValue={volumeGameSound}
                onChange={(value) => {
                    dispatch(updateSetings({ volumeGameSound: value }));
                }}
                minValue={0}
                maxValue={100}
            />

            <Separator />

            <Item
                label={<LabelTranslate value="auto-rebet" />}
                icon={<SVGIconBetClick />}
                active={autoRebet}
                onChangeActive={(value) => {
                    dispatch(updateSetings({ autoRebet: value }));
                }}
            />

            <Separator />

            <SettingLanguage
                label={<LabelTranslate value="language" />}
                icon={<SVGIconLanguage />}
            />
        </div>
    );
};

export default Content;
