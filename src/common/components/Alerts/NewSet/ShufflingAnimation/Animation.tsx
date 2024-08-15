import Lottie from 'lottie-react';
import shufflingAnimation from '../../../../../assets/json/shuffle-animation.json';
import styles from './styles.module.scss';

const ShufflingAnimation = () => {
    return (
        <div className={styles.container}>
            <Lottie animationData={shufflingAnimation} />
        </div>
    );
};

export default ShufflingAnimation;
