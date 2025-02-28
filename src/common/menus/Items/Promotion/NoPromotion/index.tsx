import LabelTranslate from '../../../../components/LabelTranslate';
import styles from './styles.module.scss';

const NoPromotion = () => {
    return (
        <div className={styles.content}>
            <LabelTranslate value="no-promotion" className={styles.text} />
        </div>
    );
};

export default NoPromotion;
