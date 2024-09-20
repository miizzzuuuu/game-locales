import Video from '../Video';
import { useGetStreamingSize } from './hooks/useGetStreamingSize';

import styles from './styles.module.scss';

const Streaming = () => {
    useGetStreamingSize();

    return (
        <div className={`${styles['streaming']}`}>
            <div className={styles['video-container']}>
                <Video />
            </div>

            <div className={styles['video-background']}></div>
        </div>
    );
};

export default Streaming;
