import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
import TotalBet from '../TotalBet';
import Game from './Game';
import GameLandscape from './GameLandscape';
import User from './User';
import styles from './styles.module.scss';

const Footer = () => {
    const device = useAppSelector(selectDevice);

    return (
        <div className={styles.footer}>
            <User />

            {device === 'mobile-portrait' ? (
                <>
                    <Game />
                    <TotalBet />
                </>
            ) : (
                <GameLandscape />
            )}
        </div>
    );
};

export default Footer;
