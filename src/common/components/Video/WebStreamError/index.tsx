import LabelTranslate from '../../LabelTranslate';
import styles from './styles.module.scss';

const WebStreamError = () => {
    return (
        <div className={styles.container}>
            <LabelTranslate value="streaming-error" className={styles.text} />
        </div>
    );
};

export default WebStreamError;
