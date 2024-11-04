import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { useAppTranslate } from '../../../../../services/i18next/hooks';
import {
    resetConfirmBet,
    selectConfirmBetError,
    selectConfirmBetStatus,
} from '../../../../../store/slice/bets';

function useConfirmBet() {
    const dispatch = useAppDispatch();

    const { t } = useAppTranslate();

    const [message, setMessage] = useState<{
        value: null | string;
        type: 'danger' | 'warning' | 'none';
    }>({
        value: null,
        type: 'none',
    });

    const confirmBetStatus = useAppSelector(selectConfirmBetStatus);
    const confirmBetError = useAppSelector(selectConfirmBetError);

    useEffect(() => {
        if (confirmBetStatus === 'pending') {
            setMessage({
                value: 'SUBMITING...',
                type: 'none',
            });
            return;
        }

        if (confirmBetStatus === 'fulfilled') {
            setMessage({
                value: t('bet-confirmed'),
                type: 'warning',
            });
            return;
        }

        if (confirmBetStatus === 'rejected') {
            setMessage({
                value: confirmBetError ?? t('bet-error'),
                type: 'danger',
            });
            return;
        }
    }, [confirmBetStatus, confirmBetError, t]);

    const handleClose = () => {
        dispatch(resetConfirmBet());

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
