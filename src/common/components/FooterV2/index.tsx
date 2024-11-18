import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import { selectTotalBet, selectTotalBetAdd } from '../../../store/slice/bets';
import { selectBalance, selectCurrency, selectNickname } from '../../../store/slice/playerSlice';
import { formatCurrency, formatNumber } from '../../utils/StringHelper';
import styles from './styles.module.scss';
import { selectGameName, selectPeriod } from '../../../store/slice/gameSlice';

const Left = () => {
    const { i18n } = useTranslation();

    const nickname = useAppSelector(selectNickname);
    const balance = useAppSelector(selectBalance);
    const currency = useAppSelector(selectCurrency);

    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    return (
        <div className={styles.left}>
            <span className={`${styles['text-1']} ${styles['text-shadow']}`}>{nickname}</span>
            <span className={`${styles['text-3']} ${styles['text-shadow']}`}>
                {formatCurrency(balance - totalBetAdd, currency, i18n.language)}
            </span>
        </div>
    );
};

const Right = () => {
    const { i18n, t } = useTranslation();

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);

    const totaBet = useAppSelector(selectTotalBet);

    return (
        <div className={styles.right}>
            <div className={styles.game}>
                <span className={styles['text-2']}>#{period}</span>
                <span className={`${styles['text-1']} ${styles['text-shadow']}`}>{gameName}</span>
            </div>

            <div className={styles['total-bet']}>
                <span className={styles['text-4']}>{t('common.total-bet')}: </span>
                <span className={`${styles['text-5']} ${styles['text-shadow']}`}>
                    {formatNumber(totaBet, i18n.language)}
                </span>
            </div>
        </div>
    );
};

const FooterV2 = () => {
    return (
        <div className={styles.footer}>
            <Left />
            <Right />
        </div>
    );
};

export default FooterV2;
