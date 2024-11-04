import { useEffect } from 'react';
import { Sound } from '../../services/sound';
import { useFocus } from './useFocus';

function useSettingSound() {
    const isFocus = useFocus();

    useEffect(() => {
        const handleEnableSound = () => {
            Sound.enablePlay = true;
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

        if (isFocus) {
            Sound.isFocus = true;
        } else {
            Sound.isFocus = false;
        }
    }, [isFocus]);
}

export { useSettingSound };
