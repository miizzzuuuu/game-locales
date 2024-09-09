import { useEffect } from 'react';

type Handler = (event: KeyboardEvent) => void;

const isDev = import.meta.env.DEV;

function useKeyboard(handler: Handler) {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isDev) {
                return;
            }

            handler(event);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handler]);
}

export { useKeyboard };
