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
import { selectTime, setTime } from '../../../store/slice/timerSlice';
import { dummyLoadNewValue } from '../../dummy';
import { useKeyboard } from '../../hooks/useKeyboard';
import Menu from '../../menus/Menu';
import { FunctionHelper } from '../../utils/FunctionHelper';
import { useSocket } from '../../../services/socket/hooks';
import { selectNickname, selectOperatorId } from '../../../store/slice/playerSlice';

function Game() {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

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
            dispatch(setTime(0));
        }
    }, []);

    useKeyboard(handleKeyboardTest);

    const listenerCloseTimerHandler = useCallback(() => {
        console.log('listenerCloseTimerHandler');

        if (time != 0) {
            console.log('close game');
            dispatch(setTime(0));
        }
    }, [time]);

    useSocket({ nickname, operatorId, listenerCloseTimerHandler });

    return (
        <div className={`${styles['game-area']}${deviceClassName}`}>
            <Streaming />
            <Timer />
            <GameUI />
            <AlertUI />
            <Menu />
        </div>
    );
}

export default Game;
