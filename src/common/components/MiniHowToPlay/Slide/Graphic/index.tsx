import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const Graphic = ({ children }: PropsWithChildren) => {
    return <div className={styles.container}>{children}</div>;
};

export default Graphic;
