import { useLayoutEffect } from 'react';

type Handler = () => void | (() => void)[];

export const useWindowResize = <T extends Handler>(handler: T, delay: boolean = true) => {
    useLayoutEffect(() => {
        const handleResize = () => {
            if (delay) {
                setTimeout(() => {
                    actionResize();
                }, 300);
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
    }, [handler]);
};
