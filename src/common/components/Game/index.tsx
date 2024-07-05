import { DisplayHelper } from '../../utils/DisplayHelper';
import AlertUI from '../AlertUI';
import GameUI from '../GameUI';
import Streaming from '../Streaming';
import styles from './styles.module.scss';

function Game() {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return (
        <div className={`${styles['game-area']}${deviceClassName}`}>
            <Streaming />

            <GameUI />

            <AlertUI />
        </div>
    );
}

export default Game;
