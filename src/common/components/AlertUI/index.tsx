import styles from './styles.module.scss';
import MessageYouWin from '../Alerts/MessageYouWin';
import MessageGeneral from '../Alerts/MessageGeneral';
import MessageSubmitBet from '../Alerts/MessageSubmitBet';
import Result from '../../../game/components/Result';
import NewSet from '../Alerts/NewSet';

const AlertUI = () => {
    return (
        <div className={styles['alert-ui']}>
            <MessageGeneral />
            <MessageSubmitBet />
            <Result />
            <MessageYouWin />
            <NewSet />
        </div>
    );
};

export default AlertUI;
