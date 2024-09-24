import Lottie, { LottieRef } from 'lottie-react';
import shufflingAnimation from '../../../../../assets/json/shuffle-animation.json';
import styles from './styles.module.scss';
import { AnimationEventHandler, useEffect, useRef } from 'react';

interface IProps {
    close?: boolean;
}

const ShufflingAnimation = ({ close }: IProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lottieRef: LottieRef = useRef(null);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'zoomIn') {
            lottieRef.current?.play();
        }
    };

    useEffect(() => {
        if (close) {
            if (containerRef.current) {
                containerRef.current.classList.add(styles.disapear);
            }
        }
    }, [close]);

    return (
        <div
            className={`${styles.container}`}
            ref={containerRef}
            onAnimationEnd={handleAnimationEnd}
        >
            <Lottie animationData={shufflingAnimation} autoplay={false} lottieRef={lottieRef} />
        </div>
    );
};

export default ShufflingAnimation;
