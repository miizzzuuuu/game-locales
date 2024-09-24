import { CSSProperties, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface IProps {
    isActive: boolean;
    animationData: unknown;
    style?: CSSProperties;
}

const Graphic = ({ isActive, animationData, style }: IProps) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (isActive) {
            lottieRef.current?.play();
        } else {
            lottieRef.current?.stop();
        }
    }, [isActive]);

    return (
        <div className={styles.container}>
            <Lottie
                animationData={animationData}
                loop
                autoplay={false}
                lottieRef={lottieRef}
                style={style}
            />
        </div>
    );
};

export default Graphic;
