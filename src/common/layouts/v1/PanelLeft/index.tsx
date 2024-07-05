import ButtonMenu from '../../../components/ButtonMenu';
import styles from './style.module.scss';

const PanelLeft = () => {
    return (
        <div className={styles['panel-left']}>
            <ButtonMenu />
        </div>
    );
};

export default PanelLeft;
