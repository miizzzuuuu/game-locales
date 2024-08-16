import { useCallback } from 'react';
import { DisplayHelper } from '../../utils/DisplayHelper';
import AlertUI from '../AlertUI';
import GameUI from '../GameUI';
import Streaming from '../Streaming';
import Timer from '../Timer';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { gameResultAction, loadNewValueAction } from '../../../store/actions/socketAction';
import { setWinAmount } from '../../../store/slice/resultSlice';
import { closeTime, selectTime } from '../../../store/slice/timerSlice';
import { dummyLoadNewValue, newSetDummy, topWinnerDummy } from '../../dummy';
import { useKeyboard } from '../../hooks/useKeyboard';
import Menu from '../../menus/Menu';
import { FunctionHelper } from '../../utils/FunctionHelper';
import { useSocket } from '../../../services/socket/hooks';
import { selectNickname, selectOperatorId } from '../../../store/slice/playerSlice';
import TopWinner from '../TopWinner';
import { setTopWinner } from '../../../store/slice/topWinnerSlice';
import { GameHelper } from '../../utils/GameHelper';
import { setNewSet } from '../../../store/slice/gameSlice';

function Game() {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);
    const isLetterOrPillarBoxActive = DisplayHelper.getLetterOrPillarBoxActive();

    const dispatch = useAppDispatch();

    const nickname = useAppSelector(selectNickname);
    const operatorId = useAppSelector(selectOperatorId);
    const time = useAppSelector(selectTime);

    const handleKeyboardTest = useCallback((e: KeyboardEvent) => {
        if (e.key === 'l') {
            dispatch(loadNewValueAction(dummyLoadNewValue));
        }
        if (e.key === 'r') {
            dispatch(
                gameResultAction({
                    ...dummyLoadNewValue,
                    win: FunctionHelper.getRandomInt(1, 25).toString().padStart(2, '0'),
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

        if (e.key === 'n') {
            dispatch(setNewSet(newSetDummy.status));
        }
        if (e.key === 'm') {
            dispatch(setNewSet(false));
        }
    }, []);

    useKeyboard(handleKeyboardTest);

    const listenerCloseTimerHandler = useCallback(() => {
        console.log('listenerCloseTimerHandler');

        if (time != 0) {
            console.log('close game');
            dispatch(closeTime());
        }
    }, [time]);

    useSocket({ nickname, operatorId, listenerCloseTimerHandler });

    return (
        <div
            className={`${styles['game-area']}${deviceClassName}${isLetterOrPillarBoxActive || GameHelper.activeLetterBox ? ` ${styles.box}` : ''}`}
        >
            <Streaming />
            <Timer />
            <GameUI />
            <TopWinner />
            <AlertUI />
            <Menu />
        </div>
    );
}

export default Game;
