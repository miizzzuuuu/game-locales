import Lottie from '@lottielab/lottie-player/react';
import { useState } from 'react';
import SVGIconX from '../../components/SVG/SVGIconX';
import { Features } from '../../utils/Features';
import { sendMessageToParent } from '../../utils/FunctionHelper';
import styles from './styles.module.scss';

type IProps = {
    name: string;
};

const className = `${styles.wrapper} ${Features.LAYOUT_VERSION === 2 || Features.LAYOUT_VERSION === 3 ? styles[`layout-2`] : styles[`layout-1`]}`;

const SantaCashBox = ({ name }: IProps) => {
    const [showButton, setShowButton] = useState(true);

    const openPopup = () => {
        console.log('open popup');

        sendMessageToParent({
            source: 'LIVE_GAME',
            type: 'OPEN_MODAL_EVENT',
            payload: name,
        });
    };

    if (!showButton) {
        return null;
    }

    return (
        <div className={className}>
            <div onClick={openPopup}>
                <Lottie
                    src={'https://cdn.lottielab.com/l/ECUL6LyZTnUXRR.json'}
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
                />
            </div>

            <button className={styles.close} onClick={() => setShowButton(false)}>
                <SVGIconX className={styles['close-icon']} color="#fff" />
            </button>
        </div>
    );
};

export default SantaCashBox;
