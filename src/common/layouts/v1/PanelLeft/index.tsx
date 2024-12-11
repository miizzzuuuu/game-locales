import ButtonHideChip from '../../../components/ButtonHideChip';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonSatatistic from '../../../components/ButtonSatatistic';
import styles from './style.module.scss';

const PanelLeft = () => {
    return (
        <div className={styles['panel-left']}>
            <ButtonHideChip />
            {/* <ButtonFavorite /> */}
            <ButtonSatatistic />
            <ButtonMenu />
        </div>
    );
};

export default PanelLeft;
