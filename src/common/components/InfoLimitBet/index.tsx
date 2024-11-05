import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import { selectMax50, selectMin } from '../../../store/slice/gameSlice';
import { formatCurrency, formatNumber } from '../../utils/StringHelper';
import styles from './styles.module.scss';
import { selectCurrency } from '../../../store/slice/playerSlice';

const InfoLimitBet = () => {
    const { i18n } = useTranslation();

    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);

    return (
        <div className={styles.info}>
            <span className={styles.text}>
                {formatCurrency(min, currency, i18n.language)}-{formatNumber(max50, i18n.language)}
            </span>
        </div>
    );
};

export default InfoLimitBet;
