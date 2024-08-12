import { RefObject, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectDevice } from '../../store/slice/windowSlice';

export const useDragToScroll = <T extends HTMLElement>({
    slider,
    direction = 'horizontal',
}: {
    slider: RefObject<T>;
    direction?: 'horizontal' | 'vertical';
}) => {
    const device = useAppSelector(selectDevice);

    useEffect(() => {
        if (device !== 'desktop') {
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
                startY = e.pageY - (slider.current?.offsetTop ?? 0);
                scrollTop = slider.current?.scrollTop ?? 0;
                return;
            }

            if (direction === 'horizontal') {
                startX = e.pageX - (slider.current?.offsetLeft ?? 0);
                scrollLeft = slider.current?.scrollLeft ?? 0;
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
                const y = e.pageY - (slider.current?.offsetTop ?? 0);
                const scroll = y - startY;
                if (slider.current) {
                    slider.current.scrollTop = scrollTop - scroll;
                }
                return;
            }

            if (direction === 'horizontal') {
                const x = e.pageX - (slider.current?.offsetLeft ?? 0);
                const scroll = x - startX;
                if (slider.current) {
                    slider.current.scrollLeft = scrollLeft - scroll;
                }
            }
        };

        slider.current?.addEventListener('mousemove', move, false);
        slider.current?.addEventListener('mousedown', startDragging, false);
        slider.current?.addEventListener('mouseup', stopDragging, false);
        slider.current?.addEventListener('mouseleave', stopDragging, false);

        return () => {
            slider.current?.removeEventListener('mousemove', move);
            slider.current?.removeEventListener('mousedown', startDragging);
            slider.current?.removeEventListener('mouseup', stopDragging);
            slider.current?.removeEventListener('mouseleave', stopDragging);
        };
    }, [device, direction]);
};
