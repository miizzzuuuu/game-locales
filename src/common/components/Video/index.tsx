import BACKGROUND_STREAMING from '../../../assets/img/streaming/background-streaming.webp';
import { useAppSelector } from '../../../store/hooks';
import { selectStreamURL } from '../../../store/slice/gameSlice';
import { selectEnableStreamingVideo } from '../../../store/slice/settingsSlice';
import styles from './styles.module.scss';
import WebStream from './WebStream';
import WebStreamError from './WebStreamError';

const Video = () => {
    const enableStreamingVideo = useAppSelector(selectEnableStreamingVideo);
    const url = useAppSelector(selectStreamURL);

    return (
        <div className={styles['video-wrapper']}>
            {enableStreamingVideo ? (
                <>{url ? <WebStream /> : <WebStreamError />}</>
            ) : (
                <img src={BACKGROUND_STREAMING} alt="" className={styles['video-off']} />
            )}
        </div>
    );
};

export default Video;
