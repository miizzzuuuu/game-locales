import { useCallback, useEffect, useState } from 'react';
import { LoadingHelper } from './utils/LoadingHelper';
import { useWindowResize } from './common/hooks/useWindowResize';
import { useAutoResize } from './common/hooks/useAutoResize';
import { setDeviceType, setOrientation } from './store/slice/windowSlice';
import { useAppDispatch } from './store/hooks';
import { useFetchPlayer } from './common/hooks/useFetchPlayer';
import { useFetchSettings } from './common/hooks/useFetchSettings';
import { useFetchLastbets } from './common/hooks/useFetchLastbets';
import { useFetchGame } from './common/hooks/useFetchGame';

import ResizeOverlay from './common/components/ResizeOverlay';
import Game from './common/components/Game';

function App() {
    const dispatch = useAppDispatch();

    const [showOverlayResize, setShowOverlayResize] = useState(false);

    const [showGame, setShowGame] = useState(false);
    const { finish: finishGetPlayer } = useFetchPlayer();
    const { finish: finishGetSettings } = useFetchSettings();
    const { finish: finishGetLastbets } = useFetchLastbets();
    const { finish: finishGetGame } = useFetchGame();

    useEffect(() => {
        if (finishGetPlayer && finishGetSettings && finishGetLastbets && finishGetGame) {
            setShowGame(true);

            LoadingHelper.finish();
        }
    }, [finishGetPlayer, finishGetSettings, finishGetLastbets, finishGetGame]);

    const { deviceType, orientation } = useAutoResize();

    useEffect(() => {
        dispatch(setDeviceType(deviceType));
    }, [deviceType, dispatch]);

    useEffect(() => {
        dispatch(setOrientation(orientation));
    }, [orientation, dispatch]);

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

            {showOverlayResize && <ResizeOverlay />}
        </div>
    );
}

export default App;
