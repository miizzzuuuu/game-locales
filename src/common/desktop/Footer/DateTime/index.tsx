import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { getLoacale } from '../../../utils/LangHelper';
import styles from './styles.module.scss';

const DateTime = () => {
    const { i18n } = useTranslation();
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = new Date().toLocaleString(getLoacale(i18n.language), {
                hour12: false,
            });
        }

        const interval = setInterval(() => {
            if (ref.current) {
                ref.current.textContent = new Date().toLocaleString(getLoacale(i18n.language), {
                    hour12: false,
                });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [i18n.language]);

    return <span className={styles.timer} ref={ref} />;
};

export default DateTime;
