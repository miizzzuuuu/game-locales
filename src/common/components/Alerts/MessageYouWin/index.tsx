import { Sound } from '../../../../services/sound';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectCurrency } from '../../../../store/slice/playerSlice';
import {
    endWinAnimation,
    selectWinAmount,
    selectWinStatus,
} from '../../../../store/slice/resultSlice';
import { WIN_NOTIFICATION_DURATION } from '../../../utils/GameHelper';
import { StringHelper } from '../../../utils/StringHelper';
import LabelTranslate from '../../LabelTranslate';
import SVGBackgroundYouWin from './SVG/SVGBackgroundYouWin';
import styles from './styles.module.scss';
import { AnimationEventHandler, useEffect, useRef, useState } from 'react';

const MessageYouWin = () => {
    const currency = useAppSelector(selectCurrency);

    const currentTimeOut = useRef<ReturnType<typeof setTimeout>>();
    const messageYouWinRef = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const [displayValue, setDisplayValue] = useState(0);
    // const [renderUI, setRenderUI] = useState(false);

    const winAmount = useAppSelector(selectWinAmount);
    const winStatus = useAppSelector(selectWinStatus);
    // const resultStatus = useAppSelector(selectResultStatus);

    useEffect(() => {
        if (currentTimeOut.current) {
            clearTimeout(currentTimeOut.current);
            currentTimeOut.current = undefined;
        }

        if (winAmount > 0) {
            Sound.playYouWon();

            currentTimeOut.current = setTimeout(() => {
                if (messageYouWinRef.current) {
                    messageYouWinRef.current.classList.add(styles.disapear);
                }
            }, WIN_NOTIFICATION_DURATION);
        }

        return () => {
            if (currentTimeOut.current) {
                clearTimeout(currentTimeOut.current);
                currentTimeOut.current = undefined;
            }
        };
    }, [winAmount]);

    const requestRef = useRef<number | undefined>(undefined);
    const previousTimeRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);

    const animate = (time: number) => {
        if (startTimeRef.current === undefined) {
            startTimeRef.current = time;
        }

        const elapsedTime = time - startTimeRef.current;

        if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;

            // Only update if enough time has passed for 60fps (approx. 16.67ms per frame)
            if (deltaTime >= 16.67) {
                const currentWin = Array(String(winAmount).length);
                for (let i = 0; i < currentWin.length; i++) {
                    currentWin[i] = Math.floor(Math.random() * 9);
                }
                setDisplayValue(Number(currentWin.join('')));

                previousTimeRef.current = time;
            }
        } else {
            previousTimeRef.current = time;
        }

        // Stop the animation after 3 seconds
        if (elapsedTime < 1000) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            setDisplayValue(winAmount);

            cancelAnimationFrame(requestRef.current as number);
            startTimeRef.current = undefined;
        }
    };

    useEffect(() => {
        if (winAmount > 0) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            setDisplayValue(0);
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
        }

        return () => {
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [winAmount]);

    // useEffect(() => {
    //     if (resultStatus === 'done') {
    //         setRenderUI(true);
    //     }
    // }, [resultStatus]);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeOut') {
            // setRenderUI(false);
            setDisplayValue(0);
            dispatch(endWinAnimation());
        }
    };

    if (winStatus === 'idle' || winAmount <= 0) {
        return null;
    }

    return (
        <div
            className={styles['you-win']}
            onAnimationEnd={handleAnimationEnd}
            ref={messageYouWinRef}
        >
            <SVGBackgroundYouWin className={styles.background} />

            <div className={styles.content}>
                <LabelTranslate value="you-win" className={styles.label} />

                <div className={styles.value}>
                    {StringHelper.formatCurrency(displayValue, currency)}
                </div>
            </div>
        </div>
    );
};

export default MessageYouWin;
