import Lottie, { LottieRef } from 'lottie-react';
import shufflingAnimation from '../../../../../assets/json/shuffle-animation.json';
import styles from './styles.module.scss';
import { AnimationEventHandler, useEffect, useRef } from 'react';
import { DisplayHelper } from '../../../../utils/DisplayHelper';

interface IProps {
    close?: boolean;
}

const ShufflingAnimation = ({ close }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const containerRef = useRef<HTMLDivElement>(null);
    const lottieRef: LottieRef = useRef(null);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('fadein') >= 0) {
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
            className={`${styles.container}${deviceClassName}`}
            ref={containerRef}
            onAnimationEnd={handleAnimationEnd}
        >
            <Lottie animationData={shufflingAnimation} autoplay={false} lottieRef={lottieRef} />
        </div>
    );
};

export default ShufflingAnimation;
