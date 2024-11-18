import styles from './styles.module.scss';

interface IProps {
    topValue: string;
    bottomValue: string;
    isTotalBet?: boolean;
}

const Info = ({ topValue, bottomValue, isTotalBet }: IProps) => {
    return (
        <div className={`${styles.wrapper}${isTotalBet ? ` ${styles['total-bet']}` : ''}`}>
            <span className={styles.top}>{topValue}</span>
            <span className={styles.bottom}>{bottomValue}</span>
        </div>
    );
};

export default Info;
