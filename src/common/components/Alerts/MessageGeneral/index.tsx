import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
    selectMessageType,
    selectMessageValue,
    setMessage,
} from '../../../../store/slice/gameStateSlice';
import { useAppTranslate } from '../../../../services/i18next/hooks';
import { useKeyboard } from '../../../hooks/useKeyboard';
import Message from '../Message';

const MessageGeneral = () => {
    const dispatch = useAppDispatch();
    const { t } = useAppTranslate();

    const message = useAppSelector(selectMessageValue);
    const messageType = useAppSelector(selectMessageType);

    const handleKeyboard = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'd') {
                dispatch(
                    setMessage({
                        value: t('bet-confirmed'),
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
            value={message}
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
