import TableBet from '../TableBet';
import styles from './styles.module.scss';

const MainAreaDesktop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}></div>
            <div className={styles.panel}>
                <TableBet />
            </div>
            <div className={styles.right}></div>
        </div>
    );
};

export default MainAreaDesktop;
