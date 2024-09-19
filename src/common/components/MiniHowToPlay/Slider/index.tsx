import { CSSProperties, forwardRef } from 'react';
import Slide from '../Slide';
import styles from './styles.module.scss';
import { ModalProps } from '../Modal';

const Slider = forwardRef<HTMLDivElement, ModalProps>(({ data }, sliderRef) => {
    return (
        <div
            className={`${styles.slider} no-scrollbar`}
            style={{ '--column': 3 } as CSSProperties}
            ref={sliderRef}
        >
            {data.map((value, idx) => {
                const { title, graphic, content } = value;

                return <Slide key={idx} title={title} graphic={graphic} content={content} />;
            })}
        </div>
    );
});

export default Slider;
