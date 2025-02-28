import { AnimationEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Sound } from '../../../../services/sound';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectCurrency, selectShowCurrency } from '../../../../store/slice/playerSlice';
import {
    endWinAnimation,
    selectWinAmount,
    selectWinStatus,
} from '../../../../store/slice/resultSlice';
import { WIN_NOTIFICATION_DURATION } from '../../../utils/GameHelper';
import { formatCurrency } from '../../../utils/StringHelper';
import SVGBackgroundYouWin from './SVG/SVGBackgroundYouWin';
import styles from './styles.module.scss';

const MessageYouWin = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);

    const currentTimeOut = useRef<ReturnType<typeof setTimeout>>(null);
    const messageYouWinRef = useRef<HTMLDivElement>(null);

    const [displayValue, setDisplayValue] = useState(0);
    // const [renderUI, setRenderUI] = useState(false);

    const winAmount = useAppSelector(selectWinAmount);
    const winStatus = useAppSelector(selectWinStatus);
    // const resultStatus = useAppSelector(selectResultStatus);

    useEffect(() => {
        if (currentTimeOut.current) {
            clearTimeout(currentTimeOut.current);
            currentTimeOut.current = null;
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
                currentTimeOut.current = null;
            }
        };
    }, [winAmount]);

    const requestRef = useRef<number>(null);
    const previousTimeRef = useRef<number | undefined>(undefined);
    const startTimeRef = useRef<number | undefined>(undefined);

    const animate = useCallback(
        (time: number) => {
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

                if (requestRef.current) {
                    cancelAnimationFrame(requestRef.current);
                }
                startTimeRef.current = undefined;
            }
        },
        [winAmount],
    );

    useEffect(() => {
        if (winAmount > 0) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            setDisplayValue(0);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }
        }

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
                requestRef.current = null;
            }
        };
    }, [winAmount, animate]);

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
                <span className={styles.label}>{t('you-win')}</span>

                <div className={styles.value}>
                    {formatCurrency(displayValue, currency, i18n.language, !showCurrency)}
                </div>
            </div>
        </div>
    );
};

export default MessageYouWin;
