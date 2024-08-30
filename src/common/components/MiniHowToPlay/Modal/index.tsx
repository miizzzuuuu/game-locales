import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import Slider from '../Slider';
import ButtonClose from './ButtonClose';
import ButtonDetails from './ButtonDetails';
import DontShowAgain from './DontShowAgain';
import Indicators from './Indicators';
import styles from './styles.module.scss';
import { DisplayHelper } from '../../../utils/DisplayHelper';

export type ModalItem = {
    title: string;
    graphic: ReactNode;
    content: ReactNode;
};

export interface ModalProps {
    data: ModalItem[];
}

const Modal = ({ data }: ModalProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const modalRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    const items =
        useRef<{ el: HTMLDivElement; bounds?: DOMRect; offsetY?: number; offsetX?: number }[]>();

    const handleSlideClick = (direction: 'prev' | 'next') => {
        if (!sliderRef.current) return;

        const containerWidth = sliderRef.current.getBoundingClientRect().width;

        sliderRef.current.scrollTo({
            left:
                direction === 'prev'
                    ? sliderRef.current.scrollLeft - containerWidth
                    : sliderRef.current.scrollLeft + containerWidth,
            behavior: 'smooth',
        });
    };

    useLayoutEffect(() => {
        if (sliderRef.current) {
            let containerBounds: DOMRect | undefined;
            const container = sliderRef.current;

            items.current = Array.from(sliderRef.current.querySelectorAll('.mini-htp-slider')).map(
                (el) => ({ el: el as HTMLDivElement }),
            );

            const handleModalAnimationEnd = (e: AnimationEvent) => {
                if (e.animationName.indexOf('open-modal') >= 0) {
                    storeBounds();
                    detectCurrent();
                }
            };

            const storeBounds = () => {
                containerBounds = container.getBoundingClientRect();

                items.current?.forEach((item) => {
                    item.bounds = item.el.getBoundingClientRect();
                    item.offsetY = item.bounds.top - (containerBounds?.top ?? 0);
                    item.offsetX = item.bounds.left - (containerBounds?.left ?? 0);
                });
            };
            storeBounds();

            const detectCurrent = () => {
                const scrollX = container.scrollLeft;

                console.log('scrollX', scrollX);

                let active = 0;
                let prev: number;

                items.current?.forEach((item, index) => {
                    console.log('offeset:', item.offsetX);

                    const current = Math.abs((item.offsetX ?? 0) - scrollX);

                    console.log(`${index} ${current}`);

                    if (prev && current < prev) {
                        active = index;
                    }

                    prev = current;
                });

                console.log('active', active);

                setActiveIndex(active);
            };

            detectCurrent();

            sliderRef.current?.addEventListener('scroll', () => detectCurrent());
            document.addEventListener('resize', () => storeBounds());
            modalRef.current?.addEventListener('animationend', handleModalAnimationEnd);

            return () => {
                sliderRef.current?.removeEventListener('scroll', () => detectCurrent());
                document.removeEventListener('resize', () => storeBounds());
                modalRef.current?.removeEventListener('animationend', handleModalAnimationEnd);
            };
        }
    }, []);

    return (
        <div className={`${styles.modal}${deviceClassName}`} ref={modalRef}>
            <ButtonClose />

            <div className={styles.body}>
                <Slider data={data} ref={sliderRef} />
            </div>

            <ButtonDetails show={activeIndex === data.length - 1} />
            <Indicators data={data} activeIndex={activeIndex} handleSlideClick={handleSlideClick} />
            <DontShowAgain />
        </div>
    );
};

export default Modal;
