import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import {
    resetConfirmBet,
    selectConfirmBetError,
    selectConfirmBetStatus,
} from '../../../../../store/slice/bets';
import { selectTimerIsClose } from '../../../../../store/slice/timerSlice';

function useConfirmBet() {
    const dispatch = useAppDispatch();

    const { t } = useTranslation();

    const [message, setMessage] = useState<{
        value: null | string;
        type: 'danger' | 'warning' | 'none';
    }>({
        value: null,
        type: 'none',
    });

    const confirmBetStatus = useAppSelector(selectConfirmBetStatus);
    const confirmBetError = useAppSelector(selectConfirmBetError);
    const betIsClose = useAppSelector(selectTimerIsClose);

    useEffect(() => {
        if (confirmBetStatus === 'pending') {
            setMessage({
                value: 'SUBMITING...',
                type: 'none',
            });
            dispatch(resetConfirmBet());
            return;
        }

        if (confirmBetStatus === 'fulfilled') {
            setMessage({
                value: t('bet-accepted'),
                type: 'warning',
            });
            dispatch(resetConfirmBet());
            return;
        }

        if (confirmBetStatus === 'rejected') {
            setMessage({
                value: confirmBetError ?? t('bet-error'),
                type: 'danger',
            });
            dispatch(resetConfirmBet());
            return;
        }
    }, [confirmBetStatus, confirmBetError, dispatch, t]); // tambahkan 't' ke dependency array

    useEffect(() => {
        if (confirmBetStatus === 'idle' && betIsClose) {
            setMessage({
                value: t('bet-closed'),
                type: 'danger',
            });
            dispatch(resetConfirmBet());
        }
    }, [confirmBetStatus, betIsClose, dispatch, t]);

    const handleClose = () => {
        // dispatch(resetConfirmBet());

        setMessage({
            value: null,
            type: 'none',
        });
    };

    return {
        messageConfirmBet: message,
        messageConfirmBetHandleClose: handleClose,
    };
}

export { useConfirmBet };
