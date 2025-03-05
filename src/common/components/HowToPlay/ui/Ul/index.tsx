import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const Ul = ({ children }: PropsWithChildren) => {
    return <ul className={styles.ul}>{children}</ul>;
};

export default Ul;
