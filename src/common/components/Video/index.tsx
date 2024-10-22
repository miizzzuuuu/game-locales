import { useAppSelector } from '../../../store/hooks';
import { selectEnableStreamingVideo } from '../../../store/slice/settingsSlice';
import BACKGROUND_STREAMING from '../../../assets/img/streaming/background-streaming.webp';

import styles from './styles.module.scss';
import WebStream from './WebStream';

const Video = () => {
    const enableStreamingVideo = useAppSelector(selectEnableStreamingVideo);

    return (
        <div className={styles['video-wrapper']}>
            {enableStreamingVideo ? (
                <WebStream />
            ) : (
                <img src={BACKGROUND_STREAMING} alt="" className={styles['video-off']} />
            )}
        </div>
    );
};

export default Video;
