import styles from './styles.module.scss';

const Ornament = () => {
    return (
        <>
            <div className={`${styles.stick} ${styles.left}`}>
                <div className={styles.long}></div>
                <div className={styles['stick-top']}></div>
                <div className={styles['stick-bottom']}></div>
                <div className={styles['top-ornamen']}>
                    <div className={styles['top-ornamen-circle']}></div>
                </div>
                <div className={styles['bottom-ornamen']}>
                    <div className={styles['bottom-ornamen-circle']}></div>
                </div>
            </div>

            <div className={`${styles.stick} ${styles.right}`}>
                <div className={`${styles.long}`}></div>
                <div className={`${styles['stick-top']}`}></div>
                <div className={`${styles['stick-bottom']}`}></div>
                <div className={`${styles['top-ornamen']}`}>
                    <div className={`${styles['top-ornamen-circle']}`}></div>
                </div>
                <div className={`${styles['bottom-ornamen']}`}>
                    <div className={`${styles['bottom-ornamen-circle']}`}></div>
                </div>
            </div>
        </>
    );
};

export default Ornament;
