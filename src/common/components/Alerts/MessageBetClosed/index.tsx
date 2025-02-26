import { useEffect } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectTotalBetAdd } from '../../../../store/slice/bets';
import { selectTimerIsClose } from '../../../../store/slice/timerSlice';

const MessageBetClosed = () => {
    const totalBetAdd = useAppSelector(selectTotalBetAdd);
    const betIsClode = useAppSelector(selectTimerIsClose);

    useEffect(() => {
        if (totalBetAdd === 0 && betIsClode) {
            console.log('betIsClode');
        }
    }, [totalBetAdd, betIsClode]);

    return <div></div>;
};

export default MessageBetClosed;
