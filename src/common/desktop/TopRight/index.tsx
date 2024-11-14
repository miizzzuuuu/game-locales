import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../store/slice/gameSlice';
import { selectCurrency } from '../../../store/slice/playerSlice';
import { formatCurrency, formatNumber } from '../../utils/StringHelper';
import styles from './styles.module.scss';
import CloseGame from './CloseGame';

const TopRight = () => {
    const { i18n } = useTranslation();

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);

    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.game}>
                    <span className={styles.period}>#{period}</span>
                    <span>{gameName}</span>
                </div>

                <span className={styles.limit}>
                    {formatCurrency(min, currency, i18n.language)}-
                    {formatNumber(max50, i18n.language)}
                </span>
            </div>

            <CloseGame />
        </div>
    );
};

export default TopRight;
