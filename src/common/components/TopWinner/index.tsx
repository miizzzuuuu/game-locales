import { AnimationEventHandler, useRef } from 'react';
import Content from './Content';
import styles from './styles.module.scss';
import { useTopWinner } from './hooks/useTopWinner';
import LabelTranslate from '../LabelTranslate';

const TopWinner = () => {
    const winnerContentRef = useRef<HTMLDivElement>(null);

    const { winnerData, isFinish, resetWinnerData } = useTopWinner({
        ref: winnerContentRef,
    });

    const animationEndHandler: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('top-winner-hide') >= 0) {
            resetWinnerData();
        }
    };

    return (
        <div
            className={`${styles['top-winner']}${isFinish ? ` ${styles.hide}` : ` ${styles.show}`}`}
            onAnimationEnd={animationEndHandler}
        >
            <div className={styles.wrapper}>
                <div className={styles.label}>
                    <LabelTranslate value="winner" />:
                </div>

                <Content ref={winnerContentRef} data={winnerData} />
            </div>
        </div>
    );
};

export default TopWinner;
