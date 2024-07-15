import { useAppSelector } from '../../../store/hooks';
import { selectTotalBetAdd } from '../../../store/slice/betAddSlice';
import { selectTotalBetSend } from '../../../store/slice/betSendSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import { StringHelper } from '../../utils/StringHelper';
import LabelTranslate from '../LabelTranslate';
import SVGBackgroundTotalBet from './SVG/SVGBackgroundTotalBet';

import styles from './styles.module.scss';

const TotalBet = () => {
    const totalPlaceBet = useAppSelector(selectTotalBetAdd);
    const totalSendBet = useAppSelector(selectTotalBetSend);

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return (
        <div className={`${styles['total-bet']}${deviceClassName}`}>
            <SVGBackgroundTotalBet className={styles['background']} />

            <div className={styles['content']}>
                <LabelTranslate value="total-bet" className={styles['desc']} />

                <span className={styles['value']}>
                    {StringHelper.formatMoneyOnlyNumber(totalPlaceBet + totalSendBet, 'id')}
                </span>
            </div>
        </div>
    );
};

export default TotalBet;
