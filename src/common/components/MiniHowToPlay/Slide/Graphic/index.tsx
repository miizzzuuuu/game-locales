import Lottie, { ILottie } from '@lottielab/lottie-player/react';
import { CSSProperties, useEffect, useRef } from 'react';
import styles from './styles.module.scss';

interface IProps {
    isActive: boolean;
    animationSrc: string;
    style?: CSSProperties;
}

const Graphic = ({ isActive, animationSrc, style }: IProps) => {
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
            <Lottie src={animationSrc} loop autoplay style={style} ref={lottieRef} />
        </div>
    );
};

export default Graphic;
