import { useCallback } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectDevice } from '../../../../store/slice/windowSlice';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { setGlobalProperty } from '../../../utils/DisplayHelper';

function useGetStreamingSize() {
    const device = useAppSelector(selectDevice);

    const handleResize = useCallback(() => {
        if (device === 'mobile-portrait') {
            const widthGame = Number(
                window
                    .getComputedStyle(document.documentElement)
                    .getPropertyValue('--width-game') ?? 1,
            );
            const scaleStreaming =
                Number(
                    window
                        .getComputedStyle(document.documentElement)
                        .getPropertyValue('--streaming-scale-portrait'),
                ) ?? 1;

            const heightStreaming = (9 / 16) * widthGame * scaleStreaming;

            setGlobalProperty('--height-streaming', `${heightStreaming}`);
        }
    }, [device]);

    useWindowResize(handleResize);
}

export { useGetStreamingSize };
