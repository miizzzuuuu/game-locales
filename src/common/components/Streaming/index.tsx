import { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Video from '../Video';
import { useGetStreamingSize } from './hooks/useGetStreamingSize';

import styles from './styles.module.scss';

const Streaming = () => {
    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles, device);

    const [scaleWidth] = useState(1);
    useGetStreamingSize(scaleWidth);

    return (
        <div className={`${styles['streaming']}${deviceClassName}`}>
            <div
                className={styles['video-container']}
                style={device === 'mobile-portrait' ? { width: `${scaleWidth * 100}%` } : undefined}
            >
                <Video />
            </div>

            <div className={styles['video-background']}></div>
        </div>
    );
};

export default Streaming;
