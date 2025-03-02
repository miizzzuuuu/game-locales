import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const NoResult = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.result}>
            <div className={styles['no-data']}>
                <span>{t('no-results-yet')}</span>
            </div>
        </div>
    );
};

export default NoResult;
