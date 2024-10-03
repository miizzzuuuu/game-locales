import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../store/hooks';
import { selectTotalBet } from '../../../store/slice/bets';

import { StringHelper } from '../../utils/StringHelper';
import LabelTranslate from '../LabelTranslate';
import SVGBackgroundTotalBet from './SVG/SVGBackgroundTotalBet';

import styles from './styles.module.scss';

const TotalBet = () => {
    const { i18n } = useTranslation();

    const totaBet = useAppSelector(selectTotalBet);

    return (
        <div className={`${styles['total-bet']}`}>
            <SVGBackgroundTotalBet className={styles.background} />

            <div className={styles.content}>
                <LabelTranslate value="total-bet" className={styles.desc} />

                <span className={styles.value}>
                    {StringHelper.formatNumber(totaBet, i18n.language)}
                </span>
            </div>
        </div>
    );
};

export default TotalBet;
