import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import { selectTotalBet } from '../../../store/slice/bets';
import { formatNumber } from '../../utils/StringHelper';
import SVGBackgroundTotalBet from './SVG/SVGBackgroundTotalBet';

import styles from './styles.module.scss';

const TotalBet = () => {
    const { t, i18n } = useTranslation();

    const totaBet = useAppSelector(selectTotalBet);

    return (
        <div className={`${styles['total-bet']}`}>
            <SVGBackgroundTotalBet className={styles.background} />

            <div className={styles.content}>
                <p className={styles.desc}>{t('total-bet')}</p>

                <span className={styles.value}>{formatNumber(totaBet, i18n.language)}</span>
            </div>
        </div>
    );
};

export default TotalBet;
