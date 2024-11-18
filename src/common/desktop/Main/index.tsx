import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const Main = ({ children }: PropsWithChildren) => {
    return <div className={styles.main}>{children}</div>;
};

export default Main;
