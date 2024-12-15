import ButtonHideChip from '../../../components/ButtonHideChip';
import ButtonMenu from '../../../components/ButtonMenu';
import ButtonPattern from '../../../components/ButtonPattern';
import styles from './style.module.scss';

const PanelLeft = () => {
    return (
        <div className={styles['panel-left']}>
            <ButtonHideChip />

            {/* <ButtonFavorite />
            <ButtonSatatistic /> */}

            <ButtonPattern />
            <ButtonMenu />
        </div>
    );
};

export default PanelLeft;
