import SVGTimer from '../../../../../../../components/Timer/SVG/SVGTimer';

import styles from './styles.module.scss';

const Timer = () => {
    return (
        <div className={styles.timer}>
            <SVGTimer />

            <div className={styles['timer-text']}>{30}</div>
        </div>
    );
};

export default Timer;
