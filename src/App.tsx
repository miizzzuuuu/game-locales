import { useCallback, useEffect, useState } from 'react';
import Game from './common/components/Game';
import MiniHowToPlay from './common/components/MiniHowToPlay';
import ResizeOverlay from './common/components/ResizeOverlay';
import { useAutoResize } from './common/hooks/useAutoResize';
import { useFetchGame } from './common/hooks/useFetchGame';
import { useFetchPlayer } from './common/hooks/useFetchPlayer';
import { useFetchSettings } from './common/hooks/useFetchSettings';
import { useFetchTimer } from './common/hooks/useFetchTimer';
import { useFocus } from './common/hooks/useFocus';
import { useFullscreen } from './common/hooks/useFullscreen';
import { useSettingSound } from './common/hooks/useSettingSound';
import { useWindowResize } from './common/hooks/useWindowResize';
import { Features } from './common/utils/Features';
import { finishLoading } from './common/utils/LoadingHelper';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectShowMiniHowToPlay } from './store/slice/gameStateSlice';
import { setDeviceType, setOrientation } from './store/slice/windowSlice';

const MiniHowToPlayComponents = Features.MINI_HOW_TO_PLAY ? <MiniHowToPlay /> : null;

function App() {
    const dispatch = useAppDispatch();

    const [showOverlayResize, setShowOverlayResize] = useState(false);

    const [showGame, setShowGame] = useState(false);
    const showMiniHowToPlay = useAppSelector(selectShowMiniHowToPlay);

    const { finish: finishGetPlayer } = useFetchPlayer();
    const { finish: finishGetSettings } = useFetchSettings();
    const { finish: finishGetGame } = useFetchGame();
    const { finish: finishGetTimer } = useFetchTimer();

    useEffect(() => {
        if (finishGetPlayer && finishGetSettings && finishGetGame && finishGetTimer) {
            setShowGame(true);

            finishLoading();
        }
    }, [finishGetPlayer, finishGetSettings, finishGetGame, finishGetTimer]);

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

    return (
        <div className={`app ${deviceType}`}>
            {showGame && <Game />}

            {showGame && showMiniHowToPlay ? MiniHowToPlayComponents : null}

            {showOverlayResize && <ResizeOverlay />}
        </div>
    );
}

export default App;
