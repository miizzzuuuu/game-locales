import Result from '../../../game/components/Result';
import { Features } from '../../utils/Features';
import MessageGeneral from '../Alerts/MessageGeneral';
import MessageSubmitBet from '../Alerts/MessageSubmitBet';
import MessageYouWin from '../Alerts/MessageYouWin';
import NewSet from '../Alerts/NewSet';
import styles from './styles.module.scss';

const AlertUI = () => {
    return (
        <div className={styles['alert-ui']}>
            <MessageGeneral />
            <MessageSubmitBet />
            <Result />
            <MessageYouWin />

            {Features.SHUFFLE_THE_CARDS && <NewSet />}
        </div>
    );
};

export default AlertUI;
