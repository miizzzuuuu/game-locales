import styles from './styles.module.scss';

const version = import.meta.env.VITE_APP_VERSION;

const Version = () => {
    return <span className={styles.version}>v{version}</span>;
};

export default Version;
