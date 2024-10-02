import { AnimationEventHandler, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import SVG24DResult from '../SVG/SVG24DResult';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    doneResult,
    resetResult,
    selectResultNumber,
    selectResultStatus,
} from '../../../store/slice/resultSlice';
import { WIN_NOTIFICATION_DURATION } from '../../../common/utils/GameHelper';

const Result24 = () => {
    const resultRef = useRef<HTMLDivElement>(null);
    const currentTimeOut = useRef<ReturnType<typeof setTimeout>>();

    const dispatch = useAppDispatch();

    const resultStatus = useAppSelector(selectResultStatus);
    const resultNumber = useAppSelector(selectResultNumber);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeIn') {
            dispatch(doneResult());
        }

        if (e.animationName === 'fadeOut') {
            dispatch(resetResult());
        }
    };

    useEffect(() => {
        if (resultStatus === 'done') {
            currentTimeOut.current = setTimeout(() => {
                if (resultRef.current) {
                    resultRef.current.classList.add(styles.disapear);
                }
            }, WIN_NOTIFICATION_DURATION);
        }

        return () => {
            if (currentTimeOut.current) {
                clearTimeout(currentTimeOut.current);
                currentTimeOut.current = undefined;
            }
        };
    }, [resultStatus]);

    if (resultStatus === 'idle' || resultNumber === null) {
        return null;
    }

    return (
        <div className={styles.Result24} onAnimationEnd={handleAnimationEnd} ref={resultRef}>
            <SVG24DResult value={resultNumber} className={styles.image} />
        </div>
    );
};

export default Result24;
