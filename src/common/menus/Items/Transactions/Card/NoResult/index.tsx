import LabelTranslate from '../../../../../components/LabelTranslate';

import styles from './styles.module.scss';

const NoResult = () => {
    return (
        <div className={styles.result}>
            <div className={styles['no-data']}>
                <LabelTranslate value="no-results-yet" />
            </div>
        </div>
    );
};

export default NoResult;
