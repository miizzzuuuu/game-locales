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
import { lengthStroke } from './const';
import styles from './styles.module.scss';

const TimerContent = () => {
    const dispatch = useAppDispatch();

    const time = useAppSelector(selectTime);
    const timer = useAppSelector(selectTimer);
    const timerIsClose = useAppSelector(selectTimerIsClose);

    const svgRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);
    const requestRef = useRef<number>(null);
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
            const timeCircle: SVGSVGElement | null = svgRef.current.querySelector('#timer-cirlce');
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
    }, [getRemainingTime, timer]);

    useEffect(() => {
        let timeOutTime: ReturnType<typeof setTimeout> | undefined;

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
                requestRef.current = null;
            }
        };
    }, [time, timerIsClose, updateTimer, dispatch]);

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
