import LabelTranslate from '../../../../../components/LabelTranslate';
import styles from './styles.module.scss';

const MenuPayoutNote = () => {
    return (
        <div className={styles['payout-note']}>
            <LabelTranslate value="note" className={styles['payout-note-title']} />

            <LabelTranslate value="note-payout-and-limit" />
        </div>
    );
};

export default MenuPayoutNote;
