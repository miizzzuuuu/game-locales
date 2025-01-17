import { lazy, Suspense, useCallback } from 'react';
import { useSocket } from '../../../services/socket/hooks';
import { gameResultAction, loadNewValueAction } from '../../../store/actions/socketAction';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setNewSet } from '../../../store/slice/gameSlice';
import { setShowMiniHowToPlay } from '../../../store/slice/gameStateSlice';
import { selectNickname, selectOperatorId } from '../../../store/slice/playerSlice';
import { setWinAmount } from '../../../store/slice/resultSlice';
import { closeTime, selectTime } from '../../../store/slice/timerSlice';
import { selectTopWinner, setTopWinner } from '../../../store/slice/topWinnerSlice';
import { selectDevice } from '../../../store/slice/windowSlice';
import { dummyLoadNewValue, newSetDummy, santaCashBoxDummy, topWinnerDummy } from '../../dummy';
import { useKeyboard } from '../../hooks/useKeyboard';
import { getLetterOrPillarBoxActive } from '../../utils/DisplayHelper';
import { Features } from '../../utils/Features';
import { getRandomInt, sendMessageToParent } from '../../utils/FunctionHelper';
import AlertUI from '../AlertUI';
import GameUI from '../GameUI';
import Streaming from '../Streaming';
import Timer from '../Timer';
import TopWinner from '../TopWinner';
import Version from '../Version';
import styles from './styles.module.scss';

const Menu = lazy(() => import('../../menus/Menu'));

function Game() {
    const isLetterOrPillarBoxActive = getLetterOrPillarBoxActive();

    const dispatch = useAppDispatch();

    const device = useAppSelector(selectDevice);
    const nickname = useAppSelector(selectNickname);
    const operatorId = useAppSelector(selectOperatorId);
    const time = useAppSelector(selectTime);
    const winnerData = useAppSelector(selectTopWinner);

    const handleKeyboardTest = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'l') {
                dispatch(loadNewValueAction(dummyLoadNewValue));
            }
            if (e.key === 'r') {
                dispatch(
                    gameResultAction({
                        ...dummyLoadNewValue,
                        win: getRandomInt(1, 25).toString().padStart(2, '0'),
                    }),
                );
            }
            if (e.key === 'w') {
                dispatch(setWinAmount(1000000));
            }
            if (e.key === 'c') {
                dispatch(closeTime());
            }
            if (e.key === 't') {
                dispatch(
                    setTopWinner({
                        data: topWinnerDummy,
                        periode: 0,
                    }),
                );
            }
            if (e.key === 'p') {
                dispatch(setShowMiniHowToPlay(true));
            }
            if (e.key === 'n') {
                if (!Features.SHUFFLE_THE_CARDS) {
                    return;
                }

                dispatch(setNewSet(newSetDummy.status));
            }
            if (e.key === 'm') {
                if (!Features.SHUFFLE_THE_CARDS) {
                    return;
                }

                dispatch(setNewSet(false));
            }
            if (e.key === 'j') {
                sendMessageToParent({
                    source: 'LIVE_GAME',
                    type: 'GET_CASHDROP',
                    payload: santaCashBoxDummy,
                });
            }
        },
        [dispatch],
    );

    useKeyboard(handleKeyboardTest);

    const listenerCloseTimerHandler = useCallback(() => {
        console.log('listenerCloseTimerHandler');

        if (time != 0) {
            console.log('close game');
            dispatch(closeTime());
        }
    }, [time, dispatch]);

    useSocket({ nickname, operatorId, listenerCloseTimerHandler });

    if (device === 'desktop') {
    }

    return (
        <div
            className={`${styles['game-area']}${isLetterOrPillarBoxActive || Features.LETTER_BOX ? ` ${styles.box}` : ''}`}
        >
            <Streaming />
            <Version />
            <Timer />

            <GameUI />

            {device === 'desktop' ? null : <>{winnerData.length > 0 && <TopWinner />}</>}

            <AlertUI />

            <Suspense>
                <Menu />
            </Suspense>
        </div>
    );
}

export default Game;
