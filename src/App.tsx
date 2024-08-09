import { useCallback, useEffect, useState } from 'react';
import { LoadingHelper } from './common/utils/LoadingHelper';
import { useWindowResize } from './common/hooks/useWindowResize';
import { useAutoResize } from './common/hooks/useAutoResize';
import { setDeviceType, setOrientation } from './store/slice/windowSlice';
import { useAppDispatch } from './store/hooks';
import { useSessionCheck, useFetchPlayer } from './common/hooks/useFetchPlayer';
import { useFetchSettings } from './common/hooks/useFetchSettings';
import { useFetchLastbets } from './common/hooks/useFetchLastbets';
import { useFetchGame } from './common/hooks/useFetchGame';

import ResizeOverlay from './common/components/ResizeOverlay';
import Game from './common/components/Game';
import { useFetchTimer } from './common/hooks/useFetchTimer';
import { useLanguage } from './common/hooks/useLanguage';
import { useSettingSound } from './common/hooks/useSettingSound';
import { useFocus } from './common/hooks/useFocus';
import useFullscreen from './common/hooks/useFullscreen';

function App() {
    const dispatch = useAppDispatch();

    const [showOverlayResize, setShowOverlayResize] = useState(false);

    const [showGame, setShowGame] = useState(false);
    const { finish: finishGetPlayer } = useFetchPlayer();
    const { finish: finishGetSettings } = useFetchSettings();
    const { finish: finishGetLastbets } = useFetchLastbets();
    const { finish: finishGetGame } = useFetchGame();
    const { finish: finishGetTimer } = useFetchTimer();

    useEffect(() => {
        if (
            finishGetPlayer &&
            finishGetSettings &&
            finishGetLastbets &&
            finishGetGame &&
            finishGetTimer
        ) {
            setShowGame(true);

            LoadingHelper.finish();
        }
    }, [finishGetPlayer, finishGetSettings, finishGetLastbets, finishGetGame, finishGetTimer]);

    useSessionCheck();
    const { deviceType, orientation } = useAutoResize();

    useEffect(() => {
        dispatch(setDeviceType(deviceType));
    }, [deviceType, dispatch]);

    useEffect(() => {
        dispatch(setOrientation(orientation));
    }, [orientation, dispatch]);

    useFocus();
    useSettingSound();
    useFullscreen();

    const handleOverlayResize = useCallback(() => {
        setShowOverlayResize(true);

        setTimeout(() => {
            setShowOverlayResize(false);
        }, 350);
    }, []);

    useWindowResize(handleOverlayResize, false);

    useLanguage();

    return (
        <div className={`app ${deviceType}`}>
            {showGame && <Game />}

            {showOverlayResize && <ResizeOverlay />}
        </div>
    );
}

export default App;
