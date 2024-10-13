import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectGameNewSet } from '../../../store/slice/gameSlice';
import { selectShowPatternUI } from '../../../store/slice/gameStateSlice';
import RoadMap from '../RoadMap/BaccaratRoads';
import TableBetV2 from '../TableBetV2';
import './../External/components/css/animation.css';
import './../External/components/css/styles.css';
import styles from './styles.module.scss';

const MainArea = () => {
    const isLandscape = DisplayHelper.getOrientation() == 'landscape';
    const showPatternUI = useAppSelector(selectShowPatternUI);

    const gameNewSet = useAppSelector(selectGameNewSet);

    if (isLandscape) {
        return (
            <div className={styles['main-area']}>
                <div className={`container-center-board`}>
                    <div
                        className={`landscape-top-board ${showPatternUI == true ? 'open' : 'close'}`}
                    >
                        <RoadMap activeColumns={18} isLandscape={true} />
                    </div>

                    <div className={styles['panel-bet']}>
                        <TableBetV2 />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles['main-area']}>
            <div className={styles['panel-bet']}>
                <TableBetV2 />
            </div>

            <div style={{ height: '100%', maxHeight: '17rem', opacity: gameNewSet ? '0.6' : '1' }}>
                <RoadMap activeColumns={18} />
            </div>
        </div>
    );
};

export default MainArea;
