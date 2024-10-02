import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectDevice } from '../../store/slice/windowSlice';

function useFullscreen() {
    const device = useAppSelector(selectDevice);

    useEffect(() => {
        const toggleFullScreen = () => {
            if (device === 'desktop' || window.isIOS || document.fullscreenElement) {
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
