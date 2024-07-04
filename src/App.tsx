import { useCallback, useEffect, useState } from 'react';
import { useTimeout } from './common/hooks/useTimeout';
import { LoadingHelper } from './utils/LoadingHelper';
import GameOverlay from './common/components/GameOverlay';
import { useWindowResize } from './common/hooks/useWindowResize';
import { useAutoResize } from './common/hooks/useAutoResize';
import { setDeviceType, setOrientation } from './store/slice/windowSlice';
import { useAppDispatch } from './store/hooks';
import Game from './common/components/Game';

function App() {
    const dispatch = useAppDispatch();

    const [showOverlayResize, setShowOverlayResize] = useState(false);

    useTimeout(() => {
        LoadingHelper.finish();
    }, 3000);

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
        <div className="app">
            <Game />

            {showOverlayResize && <GameOverlay />}
        </div>
    );
}

export default App;
