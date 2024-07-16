import { useLayoutEffect } from 'react';

type Handler = () => void | (() => void)[];

export const useWindowResize = <T extends Handler>(handler: T) => {
    useLayoutEffect(() => {
        const handleResize = () => {
            actionResize();
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
        window.addEventListener('orientationchange', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
        };
    }, [handler]);
};
