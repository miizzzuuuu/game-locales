import { Dispatch, SetStateAction } from 'react';
import { ModalProps } from '..';
import Button from '../../../Button';
import SVGNext from './SVG/SVGNext';
import SVGPrev from './SVG/SVGPrev';

import styles from './styles.module.scss';

interface IProps extends ModalProps {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

interface DotProps {
    index: number;
    activeIndex: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

const Dot = ({ index: index, activeIndex, setIndex }: DotProps) => {
    const isActive = index === activeIndex;

    return (
        <div
            className={`${styles.dot}${isActive ? ` ${styles.active}` : ''}`}
            onClick={() => {
                if (isActive) return;

                setIndex(index);
            }}
        ></div>
    );
};

const Indicators = ({ data, index: activeIndex, setIndex }: IProps) => {
    return (
        <div className={styles.indicator}>
            <Button
                className={styles.arrow}
                disabled={activeIndex === 0}
                onClick={() => {
                    if (activeIndex === 0) return;

                    setIndex((prev) => prev - 1);
                }}
            >
                <SVGPrev />
            </Button>

            <div className={styles['dot-wrapper']}>
                {data.map((_, idx) => (
                    <Dot key={idx} index={idx} activeIndex={activeIndex} setIndex={setIndex} />
                ))}
            </div>

            <Button
                className={styles.arrow}
                disabled={activeIndex === data.length - 1}
                onClick={() => {
                    if (activeIndex === data.length - 1) return;

                    setIndex((prev) => prev + 1);
                }}
            >
                <SVGNext />
            </Button>
        </div>
    );
};

export default Indicators;
