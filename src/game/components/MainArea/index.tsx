import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import styles from './styles.module.scss';
import './../External/components/css/styles.css';
import './../External/components/css/animation.css';
import { Panel } from './panel';
import { useAppSelector } from '../../../store/hooks';
import RoadMap from '../RoadMap/BaccaratRoads';
import TableBetWild from '../TableBet/TableBetWild';
import { selectGameNewSet } from '../../../store/slice/gameSlice';
import { selectShowPatternUI } from '../../../store/slice/gameStateSlice';

const MainArea = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const isLandscape = DisplayHelper.getOrientation() == 'landscape';
    const showPatternUI = useAppSelector(selectShowPatternUI);

    const gameNewSet = useAppSelector(selectGameNewSet);

    if (isLandscape) {
        return (
            <div className={`${styles['main-area']}${deviceClassName}`}>
                <Panel className={`container-center-board`}>
                    <Panel
                        className={`landscape-top-board ${showPatternUI == true ? 'open' : 'close'}`}
                    >
                        <RoadMap activeColumns={18} isLandscape={true} />
                    </Panel>
                 
                    <div className={styles['panel-bet']}>
                        <TableBetWild />
                    </div>
                    <Panel className="landscape-bottom-board">{/* <BoardInfoFooter /> */}</Panel>
                </Panel>
            </div>
        );
    }

    return (
        <div className={`${styles['main-area']}${deviceClassName}`}>
          
            <div className={styles['panel-bet']}>
                <TableBetWild />
            </div>

            <div style={{ height: '100%', maxHeight: '17rem', opacity: gameNewSet ? '0.6' : '1' }}>
                <RoadMap activeColumns={18} />
            </div>
        </div>
    );
};

export default MainArea;