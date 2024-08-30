import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const Content = ({ children }: PropsWithChildren) => {
    return <div className={styles.content}>{children}</div>;
};

export default Content;
