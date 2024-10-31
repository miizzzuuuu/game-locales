import styles from './styles.module.scss';

const version = '1.0.0';

const Version = () => {
    return <span className={styles.version}>v{version}</span>;
};

export default Version;
