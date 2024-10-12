import TotalBet from '../TotalBet';
import Game from './Game';
import User from './User';

import styles from './styles.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <User />
            <Game />

            <TotalBet />
        </div>
    );
};

export default Footer;
