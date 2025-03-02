import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../../../../store/hooks';
import { selectTotalBet } from '../../../../../../../../store/slice/bets';
import { formatNumber } from '../../../../../../../utils/StringHelper';
import styles from './styles.module.scss';

const TotalBetLandscape = () => {
    const { t, i18n } = useTranslation();

    const totaBet = useAppSelector(selectTotalBet);

    return (
        <>
            <span className={styles.label}>{t('total-bet')}: </span>
            <span className={styles.value}>{formatNumber(totaBet, i18n.language)}</span>
        </>
    );
};

export default TotalBetLandscape;
