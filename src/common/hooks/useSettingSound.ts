import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectEnableGameSound, selectVolumeGameSound } from '../../store/slice/settingsSlice';
import { Sound } from '../../services/sound';
import { selectFocus } from '../../store/slice/windowSlice';

function useSettingSound() {
    const [allowPlayAudio, setAllowPlayAudio] = useState(false);
    const enableSoundGame = useAppSelector(selectEnableGameSound);
    const volumeGameSound = useAppSelector(selectVolumeGameSound);

    const isFocus = useAppSelector(selectFocus);

    // start sound setting
    useEffect(() => {
        const handleEnableSound = () => {
            setAllowPlayAudio(true);
        };

        document.addEventListener('mousedown', handleEnableSound, {
            once: true,
        });

        return () => {
            document.removeEventListener('mousedown', handleEnableSound);
        };
    }, []);

    useEffect(() => {
        if (allowPlayAudio) {
            if (isFocus) {
                Sound.playMusic();
                Sound.enablePlay = true;
            } else {
                Sound.stopMusic();
                Sound.enablePlay = false;
            }
        }
    }, [isFocus, allowPlayAudio]);

    useEffect(() => {
        Sound.volumeSound = volumeGameSound;
        Sound.volumeMusic = volumeGameSound;
    }, [volumeGameSound]);

    useEffect(() => {
        Sound.enableSound = enableSoundGame;

        if (!enableSoundGame) {
            Sound.stopMusic();
        }

        if (allowPlayAudio) {
            Sound.enablePlay = allowPlayAudio;
        }

        if (enableSoundGame && allowPlayAudio) {
            Sound.playMusic();
        }

        return () => {
            Sound.clear();
        };
    }, [enableSoundGame, allowPlayAudio]);
    // end sound setting
}

export { useSettingSound };
