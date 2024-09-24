import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import HistoryResult from '../HistoryResult';
import TableBet from '../TableBet';
import styles from './styles.module.scss';

const MainArea = () => {
    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={`${styles['main-area']}`}>
            <div className={styles['panel-history']}>{betIsOpen && <HistoryResult />}</div>

            <div className={styles['panel-bet']}>
                <TableBet />
            </div>
        </div>
    );
};

export default MainArea;
