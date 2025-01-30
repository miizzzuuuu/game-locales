import { useAppSelector } from '../../../store/hooks';
import { selectEventIdnliveList } from '../../../store/slice/eventIdnliveSlice';
import ButtonFullscreen from '../ButtonFullscreen';
import ButtonHTP from '../ButtonHTP';
import ButtonPromotion from '../ButtonPromotion';
import ButtonSettings from '../ButtonSettings';
import ButtonTransactions from '../ButtonTransactions';
import styles from './styles.module.scss';

const TopRight = () => {
    const eventsIdnliveList = useAppSelector(selectEventIdnliveList);

    return (
        <div className={styles.container}>
            <ButtonTransactions />
            <ButtonHTP />
            {eventsIdnliveList.length > 0 && <ButtonPromotion />}
            <ButtonSettings />
            <ButtonFullscreen />
        </div>
    );
};

export default TopRight;
