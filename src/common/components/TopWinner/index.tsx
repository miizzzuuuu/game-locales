import Content from './Content';
import styles from './styles.module.scss';

const TopWinner = () => {
    return (
        <div className={styles['top-winner']}>
            <div className={styles.wrapper}>
                <div className={styles.label}>Winner:</div>

                <Content />
            </div>
        </div>
    );
};

export default TopWinner;
