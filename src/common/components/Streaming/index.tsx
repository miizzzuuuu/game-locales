import { DisplayHelper } from '../../utils/DisplayHelper';
import { Features } from '../../utils/Features';
import Video from '../Video';
import { useGetStreamingSize } from './hooks/useGetStreamingSize';

import styles from './styles.module.scss';

const Streaming = () => {
    const orientation = DisplayHelper.getOrientation();

    useGetStreamingSize();

    return (
        <div
            className={`${styles.streaming} ${Features.STREAMING_LANDSCAPE_LETTER_BOX ? styles['letter-box'] : styles['non-letter-box']}`}
        >
            {orientation === 'landscape' && <div className={styles.left}></div>}
            <div className={styles['video-container']}>
                <Video />
            </div>
            {orientation === 'landscape' && <div className={styles.right}></div>}

            <div className={styles['video-background']}></div>
        </div>
    );
};

export default Streaming;
