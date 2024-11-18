import { useAppSelector } from '../../../store/hooks';
import { selectTopWinner } from '../../../store/slice/topWinnerSlice';
import Content from './Content';
import styles from './styles.module.scss';

const WinnerArea = () => {
    const winnerData = useAppSelector(selectTopWinner);

    return <div className={styles['winner-area']}>{winnerData.length > 0 && <Content />}</div>;
};

export default WinnerArea;
