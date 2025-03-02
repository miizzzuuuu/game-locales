import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../../store/hooks';
import { selectTotalBet } from '../../../../../../../../store/slice/bets';
import SVGBackgroundTotalBet from '../../../../../../TotalBet/SVG/SVGBackgroundTotalBet';
import { formatNumber } from '../../../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const TotalBetMobile = () => {
    const { t, i18n } = useTranslation();

    const totaBet = useAppSelector(selectTotalBet);

    return (
        <>
            <SVGBackgroundTotalBet className={styles.background} />
            <div className={styles.content}>
                <span className={styles.desc}>{t('total-bet')}</span>

                <span className={styles.value}>{formatNumber(totaBet, i18n.language)}</span>
            </div>
        </>
    );
};

export default TotalBetMobile;
