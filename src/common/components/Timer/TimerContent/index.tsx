import { useEffect, useRef, useState } from 'react';
import SVGTimer from '../SVG/SVGTimer';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    closeTime,
    selectTime,
    selectTimer,
    selectTimerIsClose,
} from '../../../../store/slice/timerSlice';
import { Sound } from '../../../../services/sound';
import { DisplayHelper } from '../../../utils/DisplayHelper';

export const length = 138.23;

const TimerContent = () => {
    const dispatch = useAppDispatch();

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const time = useAppSelector(selectTime);
    const timer = useAppSelector(selectTimer);
    const timerIsClose = useAppSelector(selectTimerIsClose);

    const [currentTime, setCurrentTime] = useState(0);
    const [showTimer, setShowTimer] = useState(false);

    const resultRender = length - (currentTime / timer) * length;

    const prevTime = useRef<number | undefined>();
    const requestRef = useRef<number>();
    const startTimeRef = useRef<number | undefined>();

    const updateTimer = (ct: number) => {
        if (!startTimeRef.current) {
            startTimeRef.current = ct;
        }

        const elapsedTime = (ct - startTimeRef.current) / 1000;
        const remainingTime = Math.max(time - elapsedTime, 0);

        setCurrentTime(remainingTime);

        if (remainingTime > 0) {
            if (prevTime.current !== undefined && prevTime.current !== Math.round(remainingTime)) {
                Sound.playCountdown();
            }

            prevTime.current = Math.round(remainingTime);

            if (!showTimer) {
                setShowTimer(true);
            }

            requestRef.current = requestAnimationFrame(updateTimer);
        } else {
            console.log('updateTimer close', remainingTime);

            if (!timerIsClose) {
                dispatch(closeTime());

                Sound.playCloseBet();
            }

            startTimeRef.current = undefined;
            prevTime.current = undefined;
            setShowTimer(false);
        }
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(updateTimer);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = undefined;
            }
        };
    }, [time]);

    return (
        <div
            className={`${styles.timer}${deviceClassName}${showTimer ? '' : ` ${styles.disappear}`}`}
        >
            <SVGTimer
                state={currentTime <= 5 ? 'danger' : 'normal'}
                length={length}
                value={resultRender}
            />

            <div className={styles['timer-text']}>{Math.round(currentTime)}</div>
        </div>
    );
};

export default TimerContent;
