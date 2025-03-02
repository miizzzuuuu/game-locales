import { useAppSelector } from '../../../../../../../store/hooks';
import { selectTimer } from '../../../../../../../store/slice/timerSlice';
import SVGTimer from '../../../../../Timer/SVG/SVGTimer';
import styles from './styles.module.scss';

const Timer = () => {
    const timer = useAppSelector(selectTimer);

    return (
        <div className={styles.timer}>
            <SVGTimer />

            <div className={styles['timer-text']}>{timer}</div>
        </div>
    );
};

export default Timer;
