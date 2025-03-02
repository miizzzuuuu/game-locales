import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const P = ({ children }: PropsWithChildren) => {
    return <p className={styles.p}>{children}</p>;
};

export default P;
