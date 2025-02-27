import { useLayoutEffect } from 'react';

type Handler = () => void | (() => void)[];

const DELAY_RESIZE = 150;

function useWindowResize<T extends Handler>(handler: T, delay = true) {
    useLayoutEffect(() => {
        const handleResize = () => {
            if (delay) {
                setTimeout(() => {
                    actionResize();
                }, DELAY_RESIZE);
            } else {
                actionResize();
            }
        };

        const actionResize = () => {
            if (Array.isArray(handler)) {
                handler.forEach((handle: () => void) => handle());
            } else {
                handler();
            }
        };

        actionResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handler, delay]);
}

export { useWindowResize };
