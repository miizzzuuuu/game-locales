import { DisplayHelper } from '../../utils/DisplayHelper';
import { Features } from '../../utils/Features';
import Video from '../Video';
import { useGetStreamingSize } from './hooks/useGetStreamingSize';

import styles from './styles.module.scss';

const streamingClasses = `${styles.streaming} ${Features.STREAMING_LANDSCAPE_LETTER_BOX ? styles['letter-box'] : styles['non-letter-box']}`;

const Streaming = () => {
    const orientation = DisplayHelper.getOrientation();

    useGetStreamingSize();

    return (
        <div className={streamingClasses}>
            {orientation === 'landscape' ? (
                <>
                    <div className={styles.left} />
                    <div className={styles['video-container']}>
                        <div className={styles['video-left']} />
                        <Video />
                        <div className={styles['video-right']} />
                    </div>
                    <div className={styles.right} />
                </>
            ) : (
                <div className={styles['video-container']}>
                    <Video />
                </div>
            )}

            <div className={styles['video-background']}></div>
        </div>
    );
};

export default Streaming;
