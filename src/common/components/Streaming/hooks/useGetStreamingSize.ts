import { RefObject, useCallback } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectDevice } from '../../../../store/slice/windowSlice';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { setGlobalProperty } from '../../../utils/DisplayHelper';

function useGetStreamingSize(ref: RefObject<HTMLDivElement>) {
    const device = useAppSelector(selectDevice);

    const handleResize = useCallback(() => {
        if (device === 'mobile-portrait') {
            const element = ref.current ?? document.documentElement;

            const widthGame = Number(
                window.getComputedStyle(element).getPropertyValue('--width-game') ?? 1,
            );
            const scaleStreaming =
                Number(
                    window.getComputedStyle(element).getPropertyValue('--streaming-scale-portrait'),
                ) ?? 1;

            const heightStreaming = (9 / 16) * widthGame * scaleStreaming;

            setGlobalProperty('--height-streaming', `${heightStreaming}`);
        }
    }, [device, ref]);

    useWindowResize(handleResize);
}

export { useGetStreamingSize };
