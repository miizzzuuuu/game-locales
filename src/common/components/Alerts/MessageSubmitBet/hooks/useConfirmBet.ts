import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import { useAppTranslate } from '../../../../../services/i18next/hooks';
import {
    resetConfirmBet,
    selectConfirmBetError,
    selectConfirmBetStatus,
} from '../../../../../store/slice/betAddSlice';

export const useConfirmBet = () => {
    const dispatch = useAppDispatch();

    const { t } = useAppTranslate();

    const [message, setMessage] = useState<{ value: string; type: 'danger' | 'warning' | 'none' }>({
        value: '',
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
                value: confirmBetError || t('bet-error'),
                type: 'danger',
            });
            return;
        }
    }, [confirmBetStatus, confirmBetError]);

    const handleClose = () => {
        dispatch(resetConfirmBet());

        setMessage({
            value: '',
            type: 'none',
        });
    };

    return {
        messageConfirmBet: message,
        messageConfirmBetHandleClose: handleClose,
    };
};
