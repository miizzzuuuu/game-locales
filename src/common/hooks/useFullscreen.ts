import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectDevice } from '../../store/slice/windowSlice';
import { sendMessageToParent } from '../utils/FunctionHelper';

function useFullscreen() {
    const device = useAppSelector(selectDevice);

    useEffect(() => {
        const toggleFullScreen = () => {
            const inIframe = () => window.self !== window.top;

            if (device === 'desktop' || window.isIOS || document.fullscreenElement || inIframe()) {
                if (inIframe()) {
                    sendMessageToParent({
                        source: 'LIVE_GAME',
                        type: 'CLICK_GAME',
                    });
                }
                return;
            }

            void document.documentElement.requestFullscreen();
        };

        document.addEventListener('click', toggleFullScreen);

        return () => {
            document.removeEventListener('click', toggleFullScreen);
        };
    }, [device]);
}

export { useFullscreen };
