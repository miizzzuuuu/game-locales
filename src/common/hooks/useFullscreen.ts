import { useEffect } from 'react';
import { DisplayHelper } from '../utils/DisplayHelper';
import { useAppSelector } from '../../store/hooks';
import { selectDevice } from '../../store/slice/windowSlice';

const isDev = import.meta.env.DEV;

const useFullscreen = () => {
    const device = useAppSelector(selectDevice);

    useEffect(() => {
        const toggleFullScreen = () => {
            if (isDev || device === 'desktop') {
                return;
            }

            const isIOS = DisplayHelper.checkIOS();

            if (!document.fullscreenElement && !isIOS) {
                document.documentElement.requestFullscreen();
            }
        };

        document.addEventListener('click', toggleFullScreen);

        return () => {
            document.removeEventListener('click', toggleFullScreen);
        };
    }, [device]);
};

export default useFullscreen;
