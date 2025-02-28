import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    children?: ReactNode | undefined;
    className?: string;
}

export const MenuContentContainer = ({ children, className }: IProps) => {
    return (
        <div className={`${styles.container}${className ? ` ${className}` : ''}`}>{children}</div>
    );
};
