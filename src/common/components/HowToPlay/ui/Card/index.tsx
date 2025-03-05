import { ReactNode } from 'react';
import styles from './styles.module.scss';

type IProps = {
    children?: ReactNode;
    className?: string;
};

const Card = ({ children, className }: IProps) => {
    return <div className={`${styles.card}${className ? ` ${className}` : ''}`}>{children}</div>;
};

export default Card;
