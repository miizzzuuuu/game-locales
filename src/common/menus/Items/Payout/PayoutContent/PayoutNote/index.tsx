import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

interface IProps {
    title?: string;
    content?: string;
}

const PayoutNote = ({ title, content }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={styles['payout-note']}>
            <div className={styles['payout-note-title']}>{t(title ?? 'note')}</div>

            <div>{content && t(content)}</div>
        </div>
    );
};

export default PayoutNote;
