import { Dispatch, SetStateAction, useRef } from 'react';
import Slide from '../Slide';
import styles from './styles.module.scss';
import { ModalProps } from '../Modal';

interface IProps extends ModalProps {
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
}

const Slider = ({ data, index, setIndex }: IProps) => {
    const startXRef = useRef(0);
    const isDraggingRef = useRef(false);

    const handleStart = (clientX: number) => {
        startXRef.current = clientX;
        isDraggingRef.current = true;
    };

    const handleMove = (clientX: number) => {
        if (!isDraggingRef.current) return;

        const diff = clientX - startXRef.current;

        if (diff > 50 && index > 0) {
            setIndex((prev) => prev - 1);
            isDraggingRef.current = false;
        } else if (diff < -50 && index < data.length - 1) {
            setIndex((prev) => prev + 1);
            isDraggingRef.current = false;
        }
    };

    const handleEnd = () => {
        isDraggingRef.current = false;
    };

    return (
        <div
            className={styles.slideshow}
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseMove={(e) => handleMove(e.clientX)}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            onTouchEnd={handleEnd}
        >
            <div
                className={styles['slideshow-slider']}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {data.map(({ title, graphic, content }, idx) => (
                    <Slide key={idx} title={title} graphic={graphic} content={content} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
