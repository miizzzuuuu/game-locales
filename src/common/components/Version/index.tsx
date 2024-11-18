import styles from './styles.module.scss';

const version = '1.0.1';

const Version = () => {
    return <span className={styles.version}>v{version}</span>;
};

export default Version;
