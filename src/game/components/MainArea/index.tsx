import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import { selectDevice } from '../../../store/slice/windowSlice';
import HistoryResult from '../HistoryResult';
import TableBet from '../TableBet';
import styles from './styles.module.scss';

const MainArea = () => {
    const devices = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const betIsOpen = useAppSelector(selectBetIsOpen);
    const hideResult = devices === 'desktop' || devices === 'mobile-landscape';

    const showHistoryResult = hideResult ? betIsOpen : true;

    return (
        <div className={`${styles['main-area']}${deviceClassName}`}>
            <div className={styles['panel-history']}>{showHistoryResult && <HistoryResult />}</div>

            <div className={styles['panel-bet']}>
                <TableBet />
            </div>
        </div>
    );
};

export default MainArea;
