import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectMessageType,
    selectMessageValue,
    setMessage,
} from '../../../../store/slice/gameStateSlice';
import { useKeyboard } from '../../../hooks/useKeyboard';
import Message from '../Message';

const MessageGeneral = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const message = useAppSelector(selectMessageValue);
    const messageType = useAppSelector(selectMessageType);

    const handleKeyboard = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'd') {
                dispatch(
                    setMessage({
                        value: t('bet-accepted'),
                        type: 'warning',
                    }),
                );
            }

            if (e.key === 'f') {
                dispatch(
                    setMessage({
                        value: t('bet-error'),
                        type: 'danger',
                    }),
                );
            }

            if (e.key === 'g') {
                dispatch(
                    setMessage({
                        value: 'SUBMITING...',
                        type: 'none',
                    }),
                );
            }
        },
        [t, dispatch],
    );

    useKeyboard(handleKeyboard);

    if (!message) {
        return null;
    }

    return (
        <Message
            value={
                messageType.includes('win-') && message !== 'tie'
                    ? `${message} ${t('win')}`
                    : message
            }
            type={messageType}
            handleClose={() =>
                dispatch(
                    setMessage({
                        value: '',
                        type: 'none',
                    }),
                )
            }
        />
    );
};

export default MessageGeneral;
