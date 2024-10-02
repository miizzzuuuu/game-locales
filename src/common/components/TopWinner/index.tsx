import { useRef } from 'react';
import Content from './Content';
import styles from './styles.module.scss';
import { useTopWinner } from './hooks/useTopWinner';
import LabelTranslate from '../LabelTranslate';

const TopWinner = () => {
    const winnerContentRef = useRef<HTMLDivElement>(null);

    const { winnerData, index, isFinish, animationEndHandler } = useTopWinner({
        ref: winnerContentRef,
    });

    return (
        <div
            className={`${styles['top-winner']}${isFinish ? ` ${styles.hide}` : ''}`}
            onAnimationEnd={animationEndHandler}
        >
            <div className={styles.wrapper}>
                <div className={styles.label}>
                    <LabelTranslate value="winner" />:
                </div>

                <Content ref={winnerContentRef} data={winnerData} index={index} />
            </div>
        </div>
    );
};

export default TopWinner;
