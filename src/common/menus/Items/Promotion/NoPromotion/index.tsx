import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const NoPromotion = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.content}>
            <span className={styles.text}>{t('no-promotion')}</span>
        </div>
    );
};

export default NoPromotion;
