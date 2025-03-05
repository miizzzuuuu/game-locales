import Result from '../../../game/components/ResultDTWild';
import { FEATURES } from '../../utils/Features';
import MessageGeneral from '../Alerts/MessageGeneral';
import MessageSubmitBet from '../Alerts/MessageSubmitBet';
import MessageYouWin from '../Alerts/MessageYouWin';
import NewSet from '../Alerts/NewSet';
import PopupMessage from '../Alerts/PopupMessage';
import styles from './styles.module.scss';

const NewSetComponent = () => {
    return FEATURES.SHUFFLE_THE_CARDS ? <NewSet /> : null;
};

const AlertUI = () => {
    return (
        <div className={styles['alert-ui']}>
            <MessageGeneral />
            <MessageSubmitBet />
            <Result />
            <MessageYouWin />
            <PopupMessage />

            <NewSetComponent />
        </div>
    );
};

export default AlertUI;
