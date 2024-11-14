import ButtonHTP from '../ButtonHTP';
import ButtonPromotion from '../ButtonPromotion';
import ButtonSettings from '../ButtonSettings';
import ButtonTransactions from '../ButtonTransactions';
import styles from './styles.module.scss';

const TopLeft = () => {
    return (
        <div className={styles.container}>
            <ButtonTransactions />
            <ButtonHTP />
            <ButtonPromotion />
            <ButtonSettings />
        </div>
    );
};

export default TopLeft;
