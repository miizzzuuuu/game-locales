import ButtonHideChip from '../../../components/ButtonHideChip';
import ButtonSatatistic from '../../../components/ButtonSatatistic';
import styles from './styles.module.scss';

const PanelTop = () => {
    return (
        <div className={styles['panel-top']}>
            <ButtonHideChip />
            {/* <ButtonFavorite /> */}
            <ButtonSatatistic />
        </div>
    );
};

export default PanelTop;
