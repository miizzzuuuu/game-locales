import { useEffect } from 'react';
import { Sound } from '../../services/sound';
import { useFocus } from './useFocus';

function useSettingSound() {
    const isFocus = useFocus();

    useEffect(() => {
        const handleEnableSound = () => {
            Sound.enablePlay = true;

            const streamIframe: HTMLIFrameElement = document.querySelector('#game-streaming')!;
            if (streamIframe) {
                streamIframe.src = streamIframe.src + '';
            }
        };

        document.addEventListener('mousedown', handleEnableSound, {
            once: true,
        });

        return () => {
            document.removeEventListener('mousedown', handleEnableSound);
        };
    }, []);

    useEffect(() => {
        console.log('is focus', isFocus);

        Sound.isFocus = isFocus;
    }, [isFocus]);
}

export { useSettingSound };
