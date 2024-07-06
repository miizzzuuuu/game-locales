import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    children?: ReactNode | undefined;
}

const CardContainer = ({ children }: IProps) => {
    return <div className={styles.container}>{children}</div>;
};

export default CardContainer;
