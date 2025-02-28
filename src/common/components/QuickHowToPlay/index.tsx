import { AnimationEventHandler, useState } from 'react';
import QuickHowToPlayContent from '../../../game/components/QuickHowToPlayContent';
import { useAppDispatch } from '../../../store/hooks';
import { setShowMiniHowToPlay } from '../../../store/slice/gameStateSlice';
import styles from './styles.module.scss';

const QuickHowToPlay = () => {
    const dispatch = useAppDispatch();
    const [showUI, setShowUI] = useState(true);

    const handleModalAnimationEnd: AnimationEventHandler = (e) => {
        if (e.animationName === 'fadeOut') {
            dispatch(setShowMiniHowToPlay(false));
        }
    };

    return (
        <div
            className={`${styles['mini-how-to-play']}${!showUI ? ` ${styles.close}` : ''}`}
            onAnimationEnd={handleModalAnimationEnd}
        >
            <QuickHowToPlayContent showUI={showUI} setShowUI={setShowUI} />
        </div>
    );
};

export default QuickHowToPlay;
