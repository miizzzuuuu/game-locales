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

        const currentSlider = slider.current;

        if (!currentSlider) {
            return;
        }

        let mouseDown = false;
        let startX: number;
        let scrollLeft: number;

        let startY: number;
        let scrollTop: number;

        const startDragging = (e: MouseEvent) => {
            mouseDown = true;

            if (direction === 'vertical') {
                startY = e.pageY - (currentSlider.offsetTop ?? 0);
                scrollTop = currentSlider.scrollTop ?? 0;
                return;
            }

            if (direction === 'horizontal') {
                startX = e.pageX - (currentSlider.offsetLeft ?? 0);
                scrollLeft = currentSlider.scrollLeft ?? 0;
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
                const y = e.pageY - (currentSlider.offsetTop ?? 0);
                const scroll = y - startY;

                currentSlider.scrollTop = scrollTop - scroll;

                return;
            }

            if (direction === 'horizontal') {
                const x = e.pageX - (currentSlider.offsetLeft ?? 0);
                const scroll = x - startX;

                currentSlider.scrollLeft = scrollLeft - scroll;
            }
        };

        currentSlider.addEventListener('mousemove', move, false);
        currentSlider.addEventListener('mousedown', startDragging, false);
        currentSlider.addEventListener('mouseup', stopDragging, false);
        currentSlider.addEventListener('mouseleave', stopDragging, false);

        return () => {
            currentSlider.removeEventListener('mousemove', move);
            currentSlider.removeEventListener('mousedown', startDragging);
            currentSlider.removeEventListener('mouseup', stopDragging);
            currentSlider.removeEventListener('mouseleave', stopDragging);
        };
    }, [device, direction, slider]);
}

export { useDragToScroll };
