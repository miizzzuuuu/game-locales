import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import Slider from '../Slider';
import ButtonClose from './ButtonClose';
import ButtonDetails from './ButtonDetails';
import DontShowAgain from './DontShowAgain';
import Indicators from './Indicators';
import styles from './styles.module.scss';
import { toggleMenuHTP } from '../../../../store/slice/menuSlice';
import { useAppDispatch } from '../../../../store/hooks';
import { GameHelper } from '../../../utils/GameHelper';
import { updateMiniHowToPlay } from '../../../../services/api/miniHowToPlay';

export type ModalItem = {
    title: string;
    graphic: ReactNode;
    content: ReactNode;
};

export interface ModalProps {
    data: ModalItem[];
}

export interface IProps extends ModalProps {
    showUI: boolean;
    setShowUI: (value: boolean) => void;
}

const Modal = ({ data, showUI, setShowUI }: IProps) => {
    const dispatch = useAppDispatch();

    const modalRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [dontShowAgain, setDontShowAgain] = useState(false);

    const items =
        useRef<{ el: HTMLDivElement; bounds?: DOMRect; offsetY?: number; offsetX?: number }[]>();

    const handleSlideClick = (direction: 'prev' | 'next') => {
        if (!sliderRef.current || !items.current || items.current.length === 0) return;

        const itemWidth = items.current[0].bounds?.width || 0;

        sliderRef.current.scrollTo({
            left:
                direction === 'prev'
                    ? sliderRef.current.scrollLeft - itemWidth
                    : sliderRef.current.scrollLeft + itemWidth,
            behavior: 'smooth',
        });
    };

    const handleClose = () => {
        if (showUI) {
            setShowUI(false);
            GameHelper.hideMiniHowToPlayLocalStorage();

            if (dontShowAgain) {
                updateMiniHowToPlay({ show: false });
            }
        }
    };

    const openHTPDetail = () => {
        handleClose();

        dispatch(toggleMenuHTP());
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

                let active = 0;
                let prev: number;

                items.current?.forEach((item, index) => {
                    const current = Math.abs((item.offsetX ?? 0) - scrollX);

                    if (prev && current < prev) {
                        active = index;
                    }

                    prev = current;
                });

                setActiveIndex(active);
            };

            detectCurrent();

            sliderRef.current?.addEventListener('scroll', detectCurrent);

            modalRef.current?.addEventListener('animationend', handleModalAnimationEnd);
            document.addEventListener('resize', storeBounds);

            return () => {
                sliderRef.current?.removeEventListener('scroll', detectCurrent);

                modalRef.current?.removeEventListener('animationend', handleModalAnimationEnd);
                document.removeEventListener('resize', storeBounds);
            };
        }
    }, []);

    return (
        <div className={`${styles.modal}${!showUI ? ` ${styles.close}` : ''}`} ref={modalRef}>
            <ButtonClose handleClose={handleClose} />

            <div className={styles.body}>
                <Slider data={data} ref={sliderRef} />
            </div>

            <ButtonDetails show={activeIndex === data.length - 1} openHTPDetail={openHTPDetail} />
            <Indicators data={data} activeIndex={activeIndex} handleSlideClick={handleSlideClick} />
            <DontShowAgain checked={dontShowAgain} setChecked={setDontShowAgain} />
        </div>
    );
};

export default Modal;
