import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Footer from '../Footer';
import styles from './styles.module.scss';

const GameUI = () => {
    const device = useAppSelector(selectDevice);
    const classNameDevice = DisplayHelper.getClassNameDevice(styles, device);

    return (
        <div className={`${styles['game-ui']}${classNameDevice}`}>
            <div className={styles.main}>Main</div>

            <Footer />
        </div>
    );
};

export default GameUI;
