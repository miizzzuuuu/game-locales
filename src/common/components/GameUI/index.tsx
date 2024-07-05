import { useState } from 'react';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Footer from '../Footer';
import styles from './styles.module.scss';

const GameUI = () => {
    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles, device);

    const [offsetStreaming] = useState(true);

    return (
        <div
            className={`${styles['game-ui']}${deviceClassName}${offsetStreaming ? ` ${styles['offset-streaming']}` : ''}`}
        >
            <div className={styles.main}>Main</div>

            <Footer />
        </div>
    );
};

export default GameUI;
