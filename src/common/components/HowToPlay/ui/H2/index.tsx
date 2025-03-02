import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const H2 = ({ children }: PropsWithChildren) => {
    return <h2 className={styles.h1}>{children}</h2>;
};

export default H2;
