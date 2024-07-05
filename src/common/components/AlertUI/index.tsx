import styles from './styles.module.scss';
import MessageYouWin from '../Alerts/MessageYouWin';
import MessageGeneral from '../Alerts/MessageGeneral';
import MessageSubmitBet from '../Alerts/MessageSubmitBet';

const AlertUI = () => {
    return (
        <div className={styles['alert-ui']}>
            <MessageGeneral />
            <MessageSubmitBet />
            <MessageYouWin />
        </div>
    );
};

export default AlertUI;
