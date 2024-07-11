import ButtonHideChip from '../../../components/ButtonHideChip';
import ButtonSatatistic from '../../../components/ButtonSatatistic';
import PanelUI from '../PanelUI';
import styles from './style.module.scss';

const PanelLeft = () => {
    return (
        <PanelUI className={styles['panel-left']}>
            <ButtonHideChip />
            <ButtonSatatistic />
        </PanelUI>
    );
};

export default PanelLeft;
