import TimerContent from './TimerContent';
import styles from './styles.module.scss';

const Timer = () => {
    return (
        <div className={styles['timer-wrapper']}>
            <TimerContent />
        </div>
    );
};

export default Timer;
