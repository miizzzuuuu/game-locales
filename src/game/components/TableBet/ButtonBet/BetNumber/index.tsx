import { memo } from 'react';
import styles from './styles.module.scss';

interface IProps {
    button: string;
}

const BetNumber = ({ button }: IProps) => {
    return (
        <div className={styles.container}>
            <span className={styles['button-name']}>{Number(button)}</span>

            <span className={styles.payout}>24:1</span>
        </div>
    );
};

export default memo(BetNumber);
