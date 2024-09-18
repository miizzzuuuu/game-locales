import { DisplayHelper } from '../../utils/DisplayHelper';
import TotalBet from '../TotalBet';
import Game from './Game';
import User from './User';

import styles from './styles.module.scss';

const Footer = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return (
        <div className={`${styles.footer}${deviceClassName}`}>
            <User />
            <Game />

            <TotalBet />
        </div>
    );
};

export default Footer;
