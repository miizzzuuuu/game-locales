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
import { setTime } from '../../../store/slice/timerSlice';
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

    const handleKeyboardTest = useCallback((e: KeyboardEvent) => {
        if (e.key === 'l') {
            dispatch(loadNewValueAction(dummyLoadNewValue));
        }
        if (e.key === 'r') {
            dispatch(gameResultAction(FunctionHelper.getRandomInt(1, 25)));
        }
        if (e.key === 'w') {
            dispatch(setWinAmount(1000000));
        }
        if (e.key === 'c') {
            dispatch(setTime(0));
        }
    }, []);

    useKeyboard(handleKeyboardTest);

    useSocket({ nickname, operatorId });

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
