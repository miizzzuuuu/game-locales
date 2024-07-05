import { useEffect } from 'react';

type Handler = (event: KeyboardEvent) => void;

export const useKeyboard = (handler: Handler) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            handler(event);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handler]);
};
