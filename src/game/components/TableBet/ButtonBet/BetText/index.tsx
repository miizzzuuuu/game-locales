import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { getBasePcode } from '../../../../../common/utils/GameHelper';
import styles from './styles.module.scss';

interface IProps {
    label: string;
}

const BetText = ({ label }: IProps) => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <span className={styles.text}>{t(`${getBasePcode()}.${label}`, { ns: 'game' })}</span>
        </div>
    );
};

const MemoizedBetText = memo(BetText);
export default MemoizedBetText;
