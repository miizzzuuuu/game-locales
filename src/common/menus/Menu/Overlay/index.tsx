import { MenuPageProps } from '..';
import { Sound } from '../../../../services/sound';
import styles from './styles.module.scss';

const Overlay = ({ handleClose }: MenuPageProps) => {
    return (
        <div
            className={styles['menu-overlay']}
            onClick={() => {
                Sound.playClick();
                handleClose();
            }}
        ></div>
    );
};

export default Overlay;
