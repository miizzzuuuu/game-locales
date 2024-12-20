import { useMemo } from 'react';
import { getBackgroundStreaming } from '../../../game/utils/StreamingHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectStreamURL } from '../../../store/slice/gameSlice';
import { selectEnableStreamingVideo } from '../../../store/slice/settingsSlice';
import styles from './styles.module.scss';
import WebStream from './WebStream';
import WebStreamError from './WebStreamError';

const Video = () => {
    const enableStreamingVideo = useAppSelector(selectEnableStreamingVideo);
    const url = useAppSelector(selectStreamURL);

    const BACKGROUND_STREAMING = useMemo(() => getBackgroundStreaming(), []);

    return (
        <div className={styles['video-wrapper']}>
            {enableStreamingVideo ? (
                <>{url ? <WebStream /> : <WebStreamError />}</>
            ) : (
                <>
                    <img src={BACKGROUND_STREAMING} alt="" className={styles['video-off']} />
                    <span className={styles.off}>video streaming is currently off.</span>
                </>
            )}
        </div>
    );
};

export default Video;
