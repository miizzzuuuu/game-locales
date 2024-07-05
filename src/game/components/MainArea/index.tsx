import { DisplayHelper } from '../../../common/utils/DisplayHelper';
import TableBet from '../TableBet';
import styles from './styles.module.scss';

const MainArea = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return (
        <div className={`${styles['main-area']}${deviceClassName}`}>
            <div className={styles['panel-history']}>History Result</div>

            <div className={styles['panel-bet']}>
                <TableBet />
            </div>
        </div>
    );
};

export default MainArea;
