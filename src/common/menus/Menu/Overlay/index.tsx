import { MenuPageProps } from '..';
import styles from './styles.module.scss';

const Overlay = ({ handleClose }: MenuPageProps) => {
    return <div className={styles['menu-overlay']} onClick={handleClose}></div>;
};

export default Overlay;
