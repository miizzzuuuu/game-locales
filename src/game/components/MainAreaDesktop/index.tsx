// import TableBet from '../TableBet';
import { useDummy } from '../MainArea/hooks/useDummy';
import HistoryResult from '../RoadMap/desktop/HistoryResult';
import Roadmap from '../RoadMap/desktop/Roadmap';
import TableBetV2 from '../TableBetV2';
import styles from './styles.module.scss';

const MainAreaDesktop = () => {
    useDummy();

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Roadmap activeColumns={24} />
            </div>
            <div className={styles.panel}>
                <TableBetV2 />
            </div>
            <div className={styles.right}>
                <HistoryResult activeColumns={24} />
            </div>
        </div>
    );
};

export default MainAreaDesktop;
