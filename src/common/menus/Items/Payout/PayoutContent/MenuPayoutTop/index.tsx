import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../store/hooks';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../../../../store/slice/gameSlice';
import { selectCurrency, selectShowCurrency } from '../../../../../../store/slice/playerSlice';
import { formatCurrency, formatNumber } from '../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const MenuPayoutTop = () => {
    const { i18n } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);

    return (
        <div className={styles['menu-payout-top']}>
            <div className={styles['menu-payout-info']}>
                <span className={styles['menu-payout-info-left']}>#{period}</span>
                <span>{gameName}</span>
            </div>

            <span className={styles['menu-payout-top-bottom']}>
                {formatCurrency(min, currency, i18n.language, !showCurrency)} -{' '}
                {formatNumber(max50, i18n.language)}
            </span>
        </div>
    );
};

export default MenuPayoutTop;
