import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    children?: ReactNode | undefined;
}

export const MenuContentContainer = ({ children }: IProps) => {
    return <div className={styles.container}>{children}</div>;
};
