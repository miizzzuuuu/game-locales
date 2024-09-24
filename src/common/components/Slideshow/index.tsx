import { useState, useRef } from 'react';
import styles from './styles.module.scss';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
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
            setIndex(index - 1);
            isDraggingRef.current = false;
        } else if (diff < -50 && index < colors.length - 1) {
            setIndex(index + 1);
            isDraggingRef.current = false;
        }
    };

    const handleEnd = () => {
        isDraggingRef.current = false;
    };

    return (
        <div className={styles.container}>
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
                    ref={sliderRef}
                >
                    {colors.map((backgroundColor, idx) => (
                        <div
                            className={styles.slide}
                            key={idx}
                            style={{ backgroundColor }}
                            draggable={false}
                        />
                    ))}
                </div>

                <div className={styles['slideshow-dots']}>
                    {colors.map((_, idx) => (
                        <div
                            key={idx}
                            className={`${styles['slideshow-dot']}${index === idx ? ` ${styles.active}` : ''}`}
                            onClick={() => setIndex(idx)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slideshow;
