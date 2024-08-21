import { DisplayHelper } from '../../../common/utils/DisplayHelper';
// import { BoardInfoGame } from '../External/components/implement/boardinfo';
// import { SummaryIndex } from '../External/components/implement/summaryindex';
// import RoadMap from '../Roadmap';
import styles from './styles.module.scss';
import './../External/components/css/styles.css';
import './../External/components/css/animation.css';

// import { useAppDispatch, useAppSelector } from '../../../store/hooks';
// import { selectOpenDetailBet } from '../../../store/slice/menuSlice';
// import { selectIsLandscape } from '../../../store/slice/windowSlice';
// import { selectBetIsOpen } from '../../../store/slice/timerSlice';
// import { BoardInfoFooter } from '../External/components/implement/boardinfofooter';
import { Panel } from './panel';
import { useAppSelector } from '../../../store/hooks';
// import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import RoadMap from '../RoadMap/BaccaratRoads';
import TableBetWild from '../MobilePortraitWild/TableBetWild';
import { selectGameNewSet } from '../../../store/slice/gameSlice';
import { selectShowPatternUI } from '../../../store/slice/gameStateSlice';

const MainArea = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    // const dispatch = useAppDispatch();
    // const detailBetOpen = useAppSelector(selectOpenDetailBet);
    const isLandscape = DisplayHelper.getOrientation() == 'landscape';
    // const betIsOpen = useAppSelector(selectBetIsOpen);
    const showPatternUI = useAppSelector(selectShowPatternUI);
    // const slotPlayer = useAppSelector(selectPlayerCards);
    // const slotBanker = useAppSelector(selectBankerCards);
    // const slotSubmit = useAppSelector(selectSubmitCards);
    // const slotWinner = useAppSelector(selectWinnerBoard);

    const gameNewSet = useAppSelector(selectGameNewSet);

    // useEffect(
    //     function () {
    //         if (slotSubmit && slotWinner != '') {
    //             dispatch(
    //                 setMessage({
    //                     value: `${slotWinner.toUpperCase()} WIN`,
    //                     type:
    //                         slotWinner.toLowerCase() == 'player'
    //                             ? 'none'
    //                             : slotWinner.toLowerCase() == 'banker'
    //                               ? 'danger'
    //                               : 'warning',
    //                 }),
    //             );
    //         }
    //     },
    //     [slotSubmit, slotWinner],
    // );

    if (isLandscape) {
        return (
            <div className={`${styles['main-area']}${deviceClassName}`}>
                <Panel className={`container-center-board`}>
                    <Panel
                        className={`landscape-top-board ${showPatternUI == true ? 'open' : 'close'}`}
                    >
                        <RoadMap activeColumns={21} isLandscape={true} />
                    </Panel>
                    {/* <Panel className="landscape-center-board">
                        <TableBetWild />
                    </Panel> */}
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
            {/* <PanelTopToggle
                onClick={() => {
                    dispatch(toggleDetailBet());
                    console.log('active bet detail');
                }}
            >
                <Label
                    value={detailBetOpen ? 'Less Bet' : 'More Bet'}
                    style={{
                        margin: '0',
                        color: '#FFF',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '0.009rem',
                        textTransform: 'uppercase',
                    }}
                />
                <Chevron reverse={detailBetOpen} />
            </PanelTopToggle> */}
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

// import { DisplayHelper } from '../../../common/utils/DisplayHelper';
// import { useAppSelector } from '../../../store/hooks';
// import { selectBetIsOpen } from '../../../store/slice/timerSlice';
// import HistoryResult from '../HistoryResult';
// import TableBetWild from '../MobilePortraitWild/TableBetWild';
// import RoadMap from '../RoadMap';
// // import TableBet from '../TableBet';
// import styles from './styles.module.scss';

// const MainArea = () => {
//     const deviceClassName = DisplayHelper.getDeviceClassName(styles);

//     const betIsOpen = useAppSelector(selectBetIsOpen);

//     return (
//         <div className={`${styles['main-area']}${deviceClassName}`}>
//             {/* <div className={styles['panel-history']}>{betIsOpen && <HistoryResult />}</div> */}

//             <div className={styles['panel-bet']}>
//                 <TableBetWild />

//             </div>
//             {/* <div className={styles['panel-history']}>

//             </div> */}
//                 <RoadMap tableSection={"more"} />
//         </div>
//     );
// };

// export default MainArea;
