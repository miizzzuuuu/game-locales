import Lottie from '@lottielab/lottie-player/react';
import styles from './styles.module.scss';
import { useEffect, useRef } from 'react';

interface IProps {
    close?: boolean;
}

const ShufflingAnimation = ({ close }: IProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (close) {
            if (containerRef.current) {
                containerRef.current.classList.add(styles.disapear);
            }
        }
    }, [close]);

    return (
        <div className={`${styles.container}`} ref={containerRef}>
            <Lottie src="https://cdn.lottielab.com/l/3uiMopx48Bwmkc.json" autoplay />
        </div>
    );
};

export default ShufflingAnimation;
