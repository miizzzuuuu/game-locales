import styles from './styles.module.scss';

const Loading = () => {
    return (
        <div className={styles.loading}>
            <p className={styles['loading-text']}>Loading...</p>
        </div>
    );
};

export default Loading;
