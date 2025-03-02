import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../store/hooks';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../../../../../store/slice/gameSlice';
import { selectCurrency, selectShowCurrency } from '../../../../../../../store/slice/playerSlice';
import { selectDevice } from '../../../../../../../store/slice/windowSlice';
import { SVGIconChevronDown } from '../../../../../SVG/SVGIconChevronDown';
import { formatCurrency, formatNumber } from '../../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const LimitBet = () => {
    const { i18n } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const device = useAppSelector(selectDevice);

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);

    const value = `${formatCurrency(min, currency, i18n.language, !showCurrency)}-${formatNumber(max50, i18n.language)}`;

    return (
        <div className={styles['user-info']}>
            <div className={styles['label-wrapper']}>
                <span className={styles.label}>#{period}</span>
                <span className={styles['label-second']}>{gameName}</span>
            </div>

            <div className={styles.limit}>
                <span className={styles.value}>{value}</span>
                {device === 'desktop' && (
                    <div className={styles.icon}>
                        <SVGIconChevronDown style={{ width: '100%' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LimitBet;
