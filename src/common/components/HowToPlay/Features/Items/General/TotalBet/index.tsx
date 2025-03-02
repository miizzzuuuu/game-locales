import { useAppSelector } from '../../../../../../../store/hooks';
import { selectDevice } from '../../../../../../../store/slice/windowSlice';
import styles from './styles.module.scss';
import TotalBetDesktop from './TotalBetDesktop';
import TotalBetLandscape from './TotalBetLandscape';
import TotalBetMobile from './TotalBetMobile';

const TotalBet = () => {
    const device = useAppSelector(selectDevice);

    return (
        <div className={styles['total-bet']}>
            {device === 'mobile-portrait' && <TotalBetMobile />}
            {device === 'mobile-landscape' && <TotalBetLandscape />}
            {device === 'desktop' && <TotalBetDesktop />}
        </div>
    );
};

export default TotalBet;
