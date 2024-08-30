import { AnimationEventHandler, useState } from 'react';
import MiniHowToPlayContent from '../../../game/components/MiniHowToPlayContent';
import styles from './styles.module.scss';
import { setShowMiniHowToPlay } from '../../../store/slice/gameStateSlice';
import { useAppDispatch } from '../../../store/hooks';

const MiniHowToPlay = () => {
    const dispatch = useAppDispatch();
    const [showUI, setShowUI] = useState(true);

    const handleModalAnimationEnd: AnimationEventHandler = (e) => {
        if (e.animationName.indexOf('close-background-modal') >= 0) {
            dispatch(setShowMiniHowToPlay(false));
        }
    };

    return (
        <div
            className={`${styles['mini-how-to-play']}${!showUI ? ` ${styles.close}` : ''}`}
            onAnimationEnd={handleModalAnimationEnd}
        >
            <MiniHowToPlayContent showUI={showUI} setShowUI={setShowUI} />
        </div>
    );
};

export default MiniHowToPlay;
