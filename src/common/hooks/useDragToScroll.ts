import { RefObject, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectDevice } from '../../store/slice/windowSlice';

function useDragToScroll<T extends HTMLElement>({
    slider,
    direction = 'horizontal',
}: {
    slider: RefObject<T>;
    direction?: 'horizontal' | 'vertical';
}) {
    const device = useAppSelector(selectDevice);

    useEffect(() => {
        if (device !== 'desktop') {
            return;
        }

        const sliderCurrent = slider.current;

        let mouseDown = false;
        let startX: number;
        let scrollLeft: number;

        let startY: number;
        let scrollTop: number;

        const startDragging = (e: MouseEvent) => {
            mouseDown = true;

            if (direction === 'vertical') {
                startY = e.pageY - (sliderCurrent?.offsetTop ?? 0);
                scrollTop = sliderCurrent?.scrollTop ?? 0;
                return;
            }

            if (direction === 'horizontal') {
                startX = e.pageX - (sliderCurrent?.offsetLeft ?? 0);
                scrollLeft = sliderCurrent?.scrollLeft ?? 0;
            }
        };

        const stopDragging = () => {
            mouseDown = false;
        };

        const move = (e: MouseEvent) => {
            e.preventDefault();
            if (!mouseDown) {
                return;
            }

            if (direction === 'vertical') {
                const y = e.pageY - (sliderCurrent?.offsetTop ?? 0);
                const scroll = y - startY;
                if (sliderCurrent) {
                    sliderCurrent.scrollTop = scrollTop - scroll;
                }
                return;
            }

            if (direction === 'horizontal') {
                const x = e.pageX - (sliderCurrent?.offsetLeft ?? 0);
                const scroll = x - startX;
                if (sliderCurrent) {
                    sliderCurrent.scrollLeft = scrollLeft - scroll;
                }
            }
        };

        if (sliderCurrent) {
            sliderCurrent.addEventListener('mousemove', move, false);
            sliderCurrent.addEventListener('mousedown', startDragging, false);
            sliderCurrent.addEventListener('mouseup', stopDragging, false);
            sliderCurrent.addEventListener('mouseleave', stopDragging, false);
        }

        return () => {
            if (sliderCurrent) {
                sliderCurrent.removeEventListener('mousemove', move);
                sliderCurrent.removeEventListener('mousedown', startDragging);
                sliderCurrent.removeEventListener('mouseup', stopDragging);
                sliderCurrent.removeEventListener('mouseleave', stopDragging);
            }
        };
    }, [device, direction, slider.current]);
}

export { useDragToScroll };
