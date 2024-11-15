import { useAppSelector } from '../../../store/hooks';
import { selectGameName, selectPeriod } from '../../../store/slice/gameSlice';
import LimitBet from './LimitBet';
import styles from './styles.module.scss';

const TopLeft = () => {
    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.game}>
                    <span className={styles.period}>#{period}</span>
                    <span>{gameName}</span>
                </div>

                <LimitBet />
            </div>

            {/* <CloseGame /> */}
        </div>
    );
};

export default TopLeft;
