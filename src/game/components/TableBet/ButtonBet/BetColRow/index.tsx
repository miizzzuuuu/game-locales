import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    label: ReactNode;
}

const BetColRow = ({ label }: IProps) => {
    return (
        <div className={styles.container}>
            <div className={styles['button-name']}>{label}</div>

            <span className={styles.payout}>6:1</span>
        </div>
    );
};

export default BetColRow;
