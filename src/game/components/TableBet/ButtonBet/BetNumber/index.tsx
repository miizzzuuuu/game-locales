import styles from './styles.module.scss';

interface IProps {
    button: string;
}

const BetNumber = ({ button }: IProps) => {
    return (
        <div className={styles.container}>
            <span className={styles.button}>{Number(button)}</span>

            <span className={styles.payout}>24:1</span>
        </div>
    );
};

export default BetNumber;
