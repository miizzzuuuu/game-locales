import { useRef } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { FEATURES } from '../../utils/Features';
import Video from '../Video';
import { useGetStreamingSize } from './hooks/useGetStreamingSize';
import styles from './styles.module.scss';

const streamingClasses = `${styles.streaming} ${FEATURES.STREAMING_LANDSCAPE_LETTER_BOX ? styles['letter-box'] : styles['non-letter-box']}`;

const Streaming = () => {
    const ref = useRef<HTMLDivElement>(null);
    const device = useAppSelector(selectDevice);

    useGetStreamingSize(ref);

    return (
        <div className={streamingClasses} ref={ref}>
            {device === 'mobile-portrait' && (
                <>
                    <div className={styles['video-container']}>
                        <Video />
                    </div>
                </>
            )}

            {device === 'mobile-landscape' && (
                <>
                    <div className={styles.left} />
                    <div className={styles['video-container']}>
                        <Video />

                        <div className={styles['top-gradient']} />
                        <div className={styles['video-left']} />
                        <div className={styles['video-right']} />
                    </div>
                    <div className={styles.right} />
                </>
            )}

            {device === 'desktop' && (
                <div className={styles['video-container']}>
                    <Video />
                    <div className={styles['top-gradient']}></div>
                </div>
            )}

            <div className={styles['video-background']}></div>
        </div>
    );
};

export default Streaming;
