import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../../store/hooks';
import { selectTotalBetAdd } from '../../../../../../../../store/slice/bets';
import {
    selectBalance,
    selectCurrency,
    selectNickname,
} from '../../../../../../../../store/slice/playerSlice';
import { formatCurrency } from '../../../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const Username = () => {
    const { i18n } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const nickname = useAppSelector(selectNickname);
    const balance = useAppSelector(selectBalance);
    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    return (
        <div className={`${styles['user-info']}`}>
            <div className={styles['label-wrapper']}>
                <span className={styles.label}>{nickname}</span>
            </div>

            <span className={styles.value}>
                {formatCurrency(balance - totalBetAdd, currency, i18n.language)}
            </span>
        </div>
    );
};

export default Username;
