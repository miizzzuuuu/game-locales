import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const Section = ({ children }: PropsWithChildren) => {
    return <div className={styles.section}>{children}</div>;
};

export default Section;
