import { useCallback, useEffect, useRef, useState } from 'react';
import Game from './common/components/Game';
import QuickHowToPlay from './common/components/QuickHowToPlay';
import ResizeOverlay from './common/components/ResizeOverlay';
import { useAutoResize } from './common/hooks/useAutoResize';
import { useFetchEventList } from './common/hooks/useFetchEventList';
import { useFetchGame } from './common/hooks/useFetchGame';
import { useFetchPlayer } from './common/hooks/useFetchPlayer';
import { useFetchSettings } from './common/hooks/useFetchSettings';
import { useFetchTimer } from './common/hooks/useFetchTimer';
import { useFullscreen } from './common/hooks/useFullscreen';
import { useSettingSound } from './common/hooks/useSettingSound';
import { useWindowResize } from './common/hooks/useWindowResize';
import { FEATURES } from './common/utils/Features';
import { sendMessageToParent } from './common/utils/FunctionHelper';
import { finishLoading } from './common/utils/LoadingHelper';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { selectShowMiniHowToPlay } from './store/slice/gameStateSlice';
import { addBalance } from './store/slice/playerSlice';
import { setDeviceType, setOrientation } from './store/slice/windowSlice';
import { MessageDataContainerToGame } from './types';

const MiniHowToPlayComponents = () => {
    return FEATURES.MINI_HOW_TO_PLAY ? <QuickHowToPlay /> : null;
};

function App() {
    const dispatch = useAppDispatch();

    const [showOverlayResize, setShowOverlayResize] = useState(false);

    const [showGame, setShowGame] = useState(false);

    const showMiniHowToPlay = useAppSelector(selectShowMiniHowToPlay);

    const { finish: finishGetPlayer } = useFetchPlayer();
    const { finish: finishGetSettings } = useFetchSettings();
    const { finish: finishGetGame } = useFetchGame();
    const { finish: finishGetTimer } = useFetchTimer();

    useFetchEventList();

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

    useSettingSound();
    useFullscreen();

    useEffect(() => {
        const listenMessage = (event: MessageEvent<MessageDataContainerToGame>) => {
            if (event.data.source !== 'GAME_CONTAINER') return;

            console.log('Message from parent:', event.data);

            if (event.data.type === 'GAME_LOADED') {
                // Kirim pesan kembali ke parent
                sendMessageToParent(
                    {
                        type: 'MESSAGE',
                        payload: { message: 'game connect to container' },
                        source: 'LIVE_GAME',
                    },
                    event.origin,
                );
            }

            if (event.data.type === 'EVENT_WIN') {
                const value = event.data.payload;
                dispatch(addBalance(value));
            }
        };

        window.addEventListener('message', listenMessage);

        return () => {
            window.removeEventListener('message', listenMessage);
        };
    }, [dispatch]);

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

    const handleOverlayResize = useCallback(() => {
        setShowOverlayResize(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setShowOverlayResize(false);
            timeoutRef.current = null;
        }, 350);
    }, []);

    useWindowResize(handleOverlayResize, false);

    return (
        <div className={`app ${deviceType}`}>
            {showGame && <Game />}

            {showGame && showMiniHowToPlay ? <MiniHowToPlayComponents /> : null}

            {showOverlayResize && <ResizeOverlay />}
        </div>
    );
}

export default App;
