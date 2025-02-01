import { useState } from 'react';
import ButtonAction from '../../components/ButtonAction';
import SVGIconExitFullscreen from './SVG/SVGIconExitFullscreen';
import SVGIconFullscreen from './SVG/SVGIconFullscreen';

const ButtonFullscreen = () => {
    const [isFullsSreen, setFullScreen] = useState(false);

    function toggleFullScreen() {
        if (!document.fullscreenElement) {
            void document.documentElement.requestFullscreen();
            setFullScreen(true);
        } else if (document.exitFullscreen) {
            void document.exitFullscreen();
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
