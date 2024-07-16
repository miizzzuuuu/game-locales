import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import HistoryResult from '../HistoryResult';
import TableBetWild from '../MobilePortraitWild/TableBetWild';
import RoadMap from '../RoadMap';
// import TableBet from '../TableBet';
import styles from './styles.module.scss';

const MainArea = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const betIsOpen = useAppSelector(selectBetIsOpen);

    return (
        <div className={`${styles['main-area']}${deviceClassName}`}>
            {/* <div className={styles['panel-history']}>{betIsOpen && <HistoryResult />}</div> */}

            <div className={styles['panel-bet']}>
                <TableBetWild />

            </div>
            <div className={styles['panel-history']}>

                <RoadMap tableSection={"more"} />
            </div>
        </div>
    );
};

export default MainArea;
