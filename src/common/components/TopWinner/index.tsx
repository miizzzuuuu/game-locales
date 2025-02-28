import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Content from './Content';
import { useTopWinner } from './hooks/useTopWinner';
import styles from './styles.module.scss';

const TopWinner = () => {
    const { t } = useTranslation();
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
                <div className={styles.label}>{t('winner')}</div>

                <Content ref={winnerContentRef} data={winnerData} index={index} />
            </div>
        </div>
    );
};

export default TopWinner;
