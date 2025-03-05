import { ReactNode } from 'react';
import styles from './styles.module.scss';

type IProps = {
    children?: ReactNode;
    className?: string;
};

const Section = ({ children, className }: IProps) => {
    return <div className={`${styles.section}${className ? ` ${className}` : ''}`}>{children}</div>;
};

export default Section;
