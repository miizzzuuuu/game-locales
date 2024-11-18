import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getLoacale } from '../../../utils/LangHelper';
import styles from './styles.module.scss';

const DateTime = () => {
    const { i18n } = useTranslation();
    const ref = useRef<HTMLSpanElement>(null);
    const animationFrameId = useRef<number | null>(null);

    const updateTime = useCallback(() => {
        if (ref.current) {
            ref.current.textContent = new Date().toLocaleString(getLoacale(i18n.language), {
                hour12: false,
            });
        }
        animationFrameId.current = requestAnimationFrame(updateTime);
    }, [i18n.language]);

    useEffect(() => {
        updateTime(); // start the animation frame loop

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [updateTime]);

    return <span className={styles.timer} ref={ref} />;
};

export default DateTime;
