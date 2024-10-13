import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../../store/hooks';
import {
    selectBalance,
    selectCurrency,
    selectNickname,
} from '../../../../../../../../store/slice/playerSlice';
import { StringHelper } from '../../../../../../../utils/StringHelper';
import styles from './styles.module.scss';
import { selectTotalBetAdd } from '../../../../../../../../store/slice/bets';

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
                {StringHelper.formatCurrency(balance - totalBetAdd, currency, i18n.language)}
            </span>
        </div>
    );
};

export default Username;
