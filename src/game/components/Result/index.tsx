import { AnimationEventHandler, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const Result = () => {
    const resultRef = useRef<HTMLDivElement>(null);
    const currentTimeOut = useRef<ReturnType<typeof setTimeout>>();

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('result-fadein') >= 0) {
            console.log('done');
        }

        if (e.animationName.indexOf('result-fadeout') >= 0) {
            console.log('reset');
        }
    };

    useEffect(() => {
        currentTimeOut.current = setTimeout(() => {
            if (resultRef.current) {
                resultRef.current.classList.add(styles.disapear);
            }
        }, 4000);

        return () => {
            if (currentTimeOut.current) {
                clearTimeout(currentTimeOut.current);
                currentTimeOut.current = undefined;
            }
        };
    }, []);

    return (
        <div className={styles.result} onAnimationEnd={handleAnimationEnd} ref={resultRef}>
            Custom Result
        </div>
    );
};

export default Result;
