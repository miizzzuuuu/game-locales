import SVGTimer from '../../../../../../../components/Timer/SVG/SVGTimer';
import { length as svgTimerLength } from '../../../../../../../components/Timer/TimerContent';

import styles from './styles.module.scss';

const Timer = () => {
    const time = 10;
    const resultRender = svgTimerLength - (time / 20) * svgTimerLength;

    return (
        <div className={styles.timer}>
            <SVGTimer length={svgTimerLength} value={resultRender} state="normal" />

            <div className={styles['timer-text']}>{time}</div>
        </div>
    );
};

export default Timer;
