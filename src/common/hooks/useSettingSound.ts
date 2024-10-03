import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Sound } from '../../services/sound';
import { selectFocus } from '../../store/slice/windowSlice';

function useSettingSound() {
    const isFocus = useAppSelector(selectFocus);

    // start sound setting
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
        if (isFocus) {
            Sound.isFocus = true;
        } else {
            Sound.isFocus = false;
        }
    }, [isFocus]);
    // end sound setting
}

export { useSettingSound };
