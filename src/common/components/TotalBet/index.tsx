import { useAppSelector } from '../../../store/hooks';
import { selectTotalBet } from '../../../store/slice/bets';
import { DisplayHelper } from '../../utils/DisplayHelper';
import { StringHelper } from '../../utils/StringHelper';
import LabelTranslate from '../LabelTranslate';
import SVGBackgroundTotalBet from './SVG/SVGBackgroundTotalBet';

import styles from './styles.module.scss';

const TotalBet = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const totaBet = useAppSelector(selectTotalBet);

    return (
        <div className={`${styles['total-bet']}${deviceClassName}`}>
            <SVGBackgroundTotalBet className={styles['background']} />

            <div className={styles['content']}>
                <LabelTranslate value="total-bet" className={styles['desc']} />

                <span className={styles['value']}>{StringHelper.formatNumber(totaBet)}</span>
            </div>
        </div>
    );
};

export default TotalBet;
