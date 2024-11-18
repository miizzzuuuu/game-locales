import Button from '../../../components/Button';
import SVGIconX from '../../../components/SVG/SVGIconX';
import { handleBackToLobby } from '../../../utils/GameHelper';
import styles from './styles.module.scss';

const CloseGame = () => {
    return (
        <Button className={styles.close} onClick={handleBackToLobby}>
            <SVGIconX />
        </Button>
    );
};

export default CloseGame;
