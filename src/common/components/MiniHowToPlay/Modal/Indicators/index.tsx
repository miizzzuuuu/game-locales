import { ModalProps } from '..';
import Button from '../../../Button';
import SVGNext from './SVG/SVGNext';
import SVGPrev from './SVG/SVGPrev';

import styles from './styles.module.scss';

interface DotProps {
    isActive?: boolean;
}

interface IProps extends ModalProps {
    activeIndex: number;
    handleSlideClick: (direction: 'prev' | 'next') => void;
}

const Dot = ({ isActive }: DotProps) => {
    return <div className={`${styles.dot}${isActive ? ` ${styles.active}` : ''}`}></div>;
};

const Indicators = ({ data, activeIndex, handleSlideClick }: IProps) => {
    return (
        <div className={styles.indicator}>
            <Button
                className={styles.arrow}
                disabled={activeIndex === 0}
                onClick={() => {
                    handleSlideClick('prev');
                }}
            >
                <SVGPrev />
            </Button>

            <div className={styles['dot-wrapper']}>
                {data.map((_, idx) => (
                    <Dot key={idx} isActive={activeIndex === idx} />
                ))}
            </div>

            <Button
                className={styles.arrow}
                disabled={activeIndex === data.length - 1}
                onClick={() => {
                    handleSlideClick('next');
                }}
            >
                <SVGNext />
            </Button>
        </div>
    );
};

export default Indicators;
