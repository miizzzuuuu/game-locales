import Message from '../Message';
import { useConfirmBet } from './hooks/useConfirmBet';

const MessageSubmitBet = () => {
    const {
        messageConfirmBet: { value: messageConfirmBetValue, type: messageConfirmBetType },
        messageConfirmBetHandleClose,
    } = useConfirmBet();

    if (!messageConfirmBetValue) {
        return null;
    }

    return (
        <Message
            value={messageConfirmBetValue}
            type={messageConfirmBetType}
            handleClose={messageConfirmBetHandleClose}
        />
    );
};

export default MessageSubmitBet;
