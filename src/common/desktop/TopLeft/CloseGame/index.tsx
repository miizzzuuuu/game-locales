import { useAppSelector } from '../../../../store/hooks';
import { selectLobbyUrl } from '../../../../store/slice/playerSlice';
import Button from '../../../components/Button';
import SVGIconX from '../../../components/SVG/SVGIconX';
import { handleBackToLobby } from '../../../utils/GameHelper';
import styles from './styles.module.scss';

const CloseGame = () => {
    const lobbyUrl = useAppSelector(selectLobbyUrl);

    return (
        <Button className={styles.close} onClick={() => handleBackToLobby(lobbyUrl)}>
            <SVGIconX />
        </Button>
    );
};

export default CloseGame;
