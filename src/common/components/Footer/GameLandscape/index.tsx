import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/hooks';
import { selectTotalBet } from '../../../../store/slice/bets';
import { selectGameName, selectPeriod } from '../../../../store/slice/gameSlice';
import { formatNumber } from '../../../utils/StringHelper';
import styles from './styles.module.scss';

const GameLandscape = () => {
    const { i18n, t } = useTranslation();

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const totaBet = useAppSelector(selectTotalBet);

    return (
        <div className={styles.right}>
            <div className={styles.game}>
                <span className={styles['text-2']}>#{period}</span>
                <span className={styles['text-1']}>{gameName}</span>
            </div>

            <div className={styles['total-bet']}>
                <span className={styles['text-4']}>{t('common.total-bet')}: </span>
                <span className={styles['text-5']}>{formatNumber(totaBet, i18n.language)}</span>
            </div>
        </div>
    );
};

export default GameLandscape;
