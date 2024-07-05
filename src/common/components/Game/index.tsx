import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import AlertUI from '../AlertUI';
import GameUI from '../GameUI';
import Streaming from '../Streaming';
import styles from './styles.module.scss';

function Game() {
    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles, device);

    return (
        <div className={`${styles['game-area']}${deviceClassName}`}>
            <Streaming />

            <GameUI />

            <AlertUI />
        </div>
    );
}

export default Game;
