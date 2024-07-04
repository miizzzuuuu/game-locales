import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import styles from './styles.module.scss';

function Game() {
    const devices = useAppSelector(selectDevice);

    return (
        <div className={`${styles['game-area']} ${styles[devices]}`}>
            <p>GAME</p>
        </div>
    );
}

export default Game;
