import Lottie from '@lottielab/lottie-player/react';
import styles from './styles.module.scss';
import SVGIconX from '../../menus/Panel/SVG/SVGIconX';
import { useState } from 'react';
import { sendMessageToParent } from '../../utils/FunctionHelper';
import { Features } from '../../utils/Features';
import { EventIdnlive } from '../../../types';

type IProps = {
    event: EventIdnlive;
};

const className = `${styles.wrapper} ${Features.LAYOUT_VERSION === 2 ? styles[`layout-2`] : Features.LAYOUT_VERSION === 3 ? styles['layout-3'] : styles[`layout-1`]}`;

const LuckyAngpao = ({ event }: IProps) => {
    const [showButton, setShowButton] = useState(true);

    const openPopup = () => {
        console.log('open popup');

        sendMessageToParent({
            source: 'LIVE_GAME',
            type: 'OPEN_MODAL_EVENT',
            payload: event,
        });
    };

    if (!showButton) {
        return null;
    }

    return (
        <div className={className}>
            <div className={styles.button} onClick={openPopup}>
                <Lottie
                    src={'https://cdn.lottielab.com/l/CFJWSVCPsAR1Du.json'}
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

export default LuckyAngpao;
