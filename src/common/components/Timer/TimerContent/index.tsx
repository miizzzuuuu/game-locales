import { useCallback, useEffect, useRef } from 'react';
import { Sound } from '../../../../services/sound';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    closeTime,
    selectTime,
    selectTimer,
    selectTimerIsClose,
} from '../../../../store/slice/timerSlice';
import SVGTimer from '../SVG/SVGTimer';
import styles from './styles.module.scss';

export const lengthStroke = 138.23;

const TimerContent = () => {
    const dispatch = useAppDispatch();

    const time = useAppSelector(selectTime);
    const timer = useAppSelector(selectTimer);
    const timerIsClose = useAppSelector(selectTimerIsClose);

    const svgRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const requestRef = useRef<number>();
    const targetTime = useRef<number>(0);

    const getRemainingTime = useCallback(() => {
        const currentTime = new Date().getTime();
        return targetTime.current - currentTime;
    }, []);

    const updateTimer = useCallback(() => {
        const remainingTime = getRemainingTime();
        const timeInSecond = Math.round(remainingTime / 1000);

        if (textRef.current) {
            textRef.current.innerHTML = '' + timeInSecond;
        }

        if (svgRef.current) {
            const timeCircle = svgRef.current.querySelector('#timer-cirlce')! as SVGCircleElement;
            if (timeCircle) {
                timeCircle.style.setProperty(
                    '--color-effect',
                    timeInSecond < 5 ? 'rgba(255, 0, 0, 0.75)' : 'rgba(84, 252, 21, 0.75)',
                );
                timeCircle.setAttribute('stroke', timeInSecond < 5 ? 'red' : '#54FC15');
                timeCircle.setAttribute(
                    'stroke-dashoffset',
                    `${lengthStroke - (remainingTime / (timer * 1000)) * lengthStroke}`,
                );
            }
        }

        if (remainingTime > 0) {
            requestRef.current = requestAnimationFrame(updateTimer);
        }
    }, [getRemainingTime, timer, dispatch]);

    useEffect(() => {
        console.log(time);

        let timeOutTime: number | undefined;

        if (time > 0) {
            targetTime.current = new Date().getTime() + time * 1000;

            timeOutTime = setTimeout(() => {
                if (!timerIsClose) {
                    dispatch(closeTime());
                    Sound.playCloseBet();
                }
            }, time * 1000);

            requestRef.current = requestAnimationFrame(updateTimer);
        }

        return () => {
            if (timeOutTime) {
                clearTimeout(timeOutTime);
                timeOutTime = undefined;
            }
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = undefined;
            }
        };
    }, [time, timerIsClose, updateTimer]);

    return (
        <div className={`${styles.timer}${time <= 0 ? ` ${styles.disappear}` : ''}`}>
            <SVGTimer ref={svgRef} />

            <span className={styles.text} ref={textRef}>
                0
            </span>
        </div>
    );
};

export default TimerContent;
