import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../../store/hooks';
import { selectMax50, selectMin } from '../../../../../../../../store/slice/gameSlice';
import { selectCurrency } from '../../../../../../../../store/slice/playerSlice';
import LabelTranslate from '../../../../../../../components/LabelTranslate';
import { formatCurrency, formatNumber } from '../../../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const LimitBet = () => {
    const { i18n } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);

    const value = `${formatCurrency(min, currency, i18n.language)}-${formatNumber(max50, i18n.language)}`;

    return (
        <div className={`${styles['user-info']} ${styles.right}`}>
            <div className={styles['label-wrapper']}>
                <span className={styles.label}>#2490121</span>
                <LabelTranslate className={styles['label-second']} value="htp.general.game-name" />
            </div>

            <span className={styles.value}>{value}</span>
        </div>
    );
};

export default LimitBet;
