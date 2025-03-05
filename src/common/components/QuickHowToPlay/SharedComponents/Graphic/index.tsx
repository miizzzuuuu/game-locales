import Lottie, { ILottie } from '@lottielab/lottie-player/react';
import { CSSProperties, useRef } from 'react';
import styles from './styles.module.scss';

interface IProps {
    isActive: boolean;
    animationSrc: string;
    style?: CSSProperties;
    className?: string;
}

const Graphic = ({ animationSrc, style, className }: IProps) => {
    const lottieRef = useRef<ILottie>(null);

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
