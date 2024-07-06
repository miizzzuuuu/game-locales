import { TwentyFourDHelper } from '../../utils/TwentyFourDHelper';
import { historyResultDummy } from './data';
import styles from './styles.module.scss';

const HistoryResult = () => {
    return (
        <div className={`${styles.wrapper} no-scrollbar`}>
            {historyResultDummy.map((data, idx) => {
                const color = TwentyFourDHelper.getColor(data.angka);
                const multiplier = data.thunder.data_thunder.prize_thunder;

                return (
                    <div
                        key={idx}
                        className={`${styles.item}${multiplier ? ` ${styles.thunder}` : ''}`}
                    >
                        <span className={`${styles.text} ${styles[color]}`}>{data.angka}</span>
                    </div>
                );
            })}
        </div>
    );
};

export default HistoryResult;
