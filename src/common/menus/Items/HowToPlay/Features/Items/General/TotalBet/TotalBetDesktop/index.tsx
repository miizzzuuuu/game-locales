import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../../../store/hooks';
import { selectTotalBet } from '../../../../../../../../../store/slice/bets';
import {
    selectCurrency,
    selectShowCurrency,
} from '../../../../../../../../../store/slice/playerSlice';
import { formatCurrency } from '../../../../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const TotalBetDesktop = () => {
    const { t, i18n } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);
    const totaBet = useAppSelector(selectTotalBet);

    return (
        <div className={`${styles['user-info']}`}>
            <div className={styles['label-wrapper']}>
                <span className={styles.label}>{t('total-bet')}</span>
            </div>

            <span className={styles.value}>
                {formatCurrency(totaBet, currency, i18n.language, !showCurrency)}
            </span>
        </div>
    );
};

export default TotalBetDesktop;
