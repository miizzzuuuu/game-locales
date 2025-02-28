import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const WebStreamError = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <span className={styles.text}>{t('streaming-error')}</span>
        </div>
    );
};

export default WebStreamError;
