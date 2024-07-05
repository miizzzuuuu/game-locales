import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    label: ReactNode;
}

const BetText = ({ label }: IProps) => {
    return (
        <div className={styles.container}>
            <span className={styles.text}>{label}</span>
        </div>
    );
};

export default BetText;
