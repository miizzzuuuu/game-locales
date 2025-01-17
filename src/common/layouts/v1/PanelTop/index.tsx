import ButtonHideChip from '../../../components/ButtonHideChip';
import styles from './styles.module.scss';

const PanelTop = () => {
    return (
        <div className={styles['panel-top']}>
            <ButtonHideChip />

            {/* <ButtonFavorite />
            <ButtonSatatistic /> */}
        </div>
    );
};

export default PanelTop;
