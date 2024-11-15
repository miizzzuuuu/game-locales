import { useState } from 'react';
import ButtonAction from '../../components/ButtonAction';
import SVGIconFullscreen from './SVG/SVGIconFullscreen';
import SVGIconExitFullscreen from './SVG/SVGIconExitFullscreen';

const ButtonFullscreen = () => {
    const [isFullsSreen, setFullScreen] = useState(false);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullScreen(true);
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
            setFullScreen(false);
        }
    }

    return (
        <ButtonAction
            icon={isFullsSreen ? <SVGIconExitFullscreen /> : <SVGIconFullscreen />}
            borderColor={isFullsSreen ? '#00C3D8' : undefined}
            onClick={toggleFullScreen}
        />
    );
};

export default ButtonFullscreen;
