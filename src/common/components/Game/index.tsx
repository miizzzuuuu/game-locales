import { useCallback } from 'react';
import { DisplayHelper } from '../../utils/DisplayHelper';
import AlertUI from '../AlertUI';
import GameUI from '../GameUI';
import Streaming from '../Streaming';
import Timer from '../Timer';
import styles from './styles.module.scss';
import { useAppDispatch } from '../../../store/hooks';
import { loadNewValueAction } from '../../../store/actions/socketAction';
import { setWinAmount } from '../../../store/slice/resultSlice';
import { setTime } from '../../../store/slice/timerSlice';
import { dummyLoadNewValue } from '../../dummy';
import { useKeyboard } from '../../hooks/useKeyboard';
import Menu from '../../menus/Menu';

function Game() {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const dispatch = useAppDispatch();

    const handleKeyboardTest = useCallback((e: KeyboardEvent) => {
        if (e.key === 'l') {
            dispatch(loadNewValueAction(dummyLoadNewValue));
        }
        if (e.key === 'w') {
            dispatch(setWinAmount(1000000));
        }
        if (e.key === 'c') {
            dispatch(setTime(0));
        }
    }, []);

    useKeyboard(handleKeyboardTest);

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
