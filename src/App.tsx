import { useCallback, useEffect, useState } from 'react';
import Game from './common/components/Game';
import MiniHowToPlay from './common/components/MiniHowToPlay';
import ResizeOverlay from './common/components/ResizeOverlay';
import { useAutoResize } from './common/hooks/useAutoResize';
import { useFetchGame } from './common/hooks/useFetchGame';
import { useFetchPlayer } from './common/hooks/useFetchPlayer';
import { useFetchSettings } from './common/hooks/useFetchSettings';
import { useFetchTimer } from './common/hooks/useFetchTimer';
import { useFullscreen } from './common/hooks/useFullscreen';
import { useSettingSound } from './common/hooks/useSettingSound';
import { useWindowResize } from './common/hooks/useWindowResize';
import { Features } from './common/utils/Features';
import { finishLoading } from './common/utils/LoadingHelper';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectShowMiniHowToPlay } from './store/slice/gameStateSlice';
import { setDeviceType, setOrientation } from './store/slice/windowSlice';
import { sendMessageToParent } from './common/utils/FunctionHelper';
import { useFetchEventList } from './common/hooks/useFetchEventList';

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
    const { finish: finishGetEventList } = useFetchEventList();

    useEffect(() => {
        if (
            finishGetPlayer &&
            finishGetSettings &&
            finishGetGame &&
            finishGetTimer &&
            finishGetEventList
        ) {
            setShowGame(true);

            finishLoading();
        }
    }, [finishGetPlayer, finishGetSettings, finishGetGame, finishGetTimer, finishGetEventList]);

    const { deviceType, orientation } = useAutoResize();

    useEffect(() => {
        dispatch(setDeviceType(deviceType));
    }, [deviceType, dispatch]);

    useEffect(() => {
        dispatch(setOrientation(orientation));
    }, [orientation, dispatch]);

    useSettingSound();
    useFullscreen();

    useEffect(() => {
        const listenMessage = (event: MessageEvent) => {
            if (event.data.source !== 'GAME_CONTAINER') return;

            console.log('Message from parent:', event.data);

            // Kirim pesan kembali ke parent
            sendMessageToParent(
                {
                    type: 'MESSAGE',
                    payload: { message: 'game connect to container' },
                    source: 'LIVE_GAME',
                },
                event.origin,
            );
        };

        window.addEventListener('message', listenMessage);

        return () => {
            window.removeEventListener('message', listenMessage);
        };
    }, []);

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
