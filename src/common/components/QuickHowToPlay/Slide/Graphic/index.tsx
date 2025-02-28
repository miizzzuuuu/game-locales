import Lottie, { ILottie } from '@lottielab/lottie-player/react';
import { CSSProperties, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

interface IProps {
    isActive: boolean;
    animationSrc: string;
    style?: CSSProperties;
    className?: string;
}

const Graphic = ({ isActive, animationSrc, style, className }: IProps) => {
    const lottieRef = useRef<ILottie>(null);

    useEffect(() => {
        if (isActive) {
            if (lottieRef.current) {
                lottieRef.current.play();
            }
        } else {
            if (lottieRef.current) {
                lottieRef.current.stop();
            }
        }
    }, [isActive]);

    return (
        <div className={styles.container}>
            <Lottie
                src={animationSrc}
                loop
                autoplay
                style={style}
                className={className}
                ref={lottieRef}
            />
        </div>
    );
};

export default Graphic;
