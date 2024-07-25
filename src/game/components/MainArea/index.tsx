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
import { selectBetIsOpen } from '../../../store/slice/timerSlice';
import RoadMap from '../RoadMap/BaccaratRoads';
import TableBetWild from '../MobilePortraitWild/TableBetWild';


const MainArea = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    // const dispatch = useAppDispatch();
    // const detailBetOpen = useAppSelector(selectOpenDetailBet);
    const isLandscape = DisplayHelper.getOrientation() == "landscape";
    const betIsOpen = useAppSelector(selectBetIsOpen);
    const roadmapOpen = useAppSelector((state) => state.history.showPatternUI);
    // const slotPlayer = useAppSelector(selectPlayerCards);
    // const slotBanker = useAppSelector(selectBankerCards);
    // const slotSubmit = useAppSelector(selectSubmitCards);
    // const slotWinner = useAppSelector(selectWinnerBoard);

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
                <Panel
                    className={`container-center-board ${betIsOpen == true ? 'openpanel' : 'closepanel'
                        }`}
                >
                    <Panel
                        className={`landscape-top-board ${roadmapOpen == true ? 'open' : 'close'}`}
                    >
                        <RoadMap isLandscape={true} />
                    </Panel>
                    {/* <Panel className="landscape-center-board">
                        <TableBetWild />
                    </Panel> */}
                    <div className={styles['panel-bet']}>
                        <TableBetWild />

                    </div>
                    <Panel className="landscape-bottom-board">
                        {/* <BoardInfoFooter /> */}
                    </Panel>
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
            <RoadMap />
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
