import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Video from '../Video';

import styles from './styles.module.scss';

const Streaming = () => {
    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getClassNameDevice(styles, device);

    return (
        <div className={`${styles['streaming']}${deviceClassName}`}>
            <div className={styles['video-container']}>
                <Video />
            </div>

            <div className={styles['video-background']}></div>
        </div>
    );
};

export default Streaming;
