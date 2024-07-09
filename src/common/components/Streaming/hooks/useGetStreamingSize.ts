import { useCallback } from 'react';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { DisplayHelper } from '../../../utils/DisplayHelper';
import { useAppSelector } from '../../../../store/hooks';
import { selectDevice } from '../../../../store/slice/windowSlice';

export const useGetStreamingSize = () => {
    const device = useAppSelector(selectDevice);

    const handleResize = useCallback(() => {
        const { widthScreen } = DisplayHelper.getWindowSize();

        const scale = Number(
            window
                .getComputedStyle(document.documentElement)
                .getPropertyValue('--streaming-scale-portrait') ?? 1,
        );

        if (device === 'mobile-portrait') {
            const widthStreaming = widthScreen * scale;
            const heightStreaming = (9 / 16) * widthStreaming;

            DisplayHelper.setGlobalProperty('--width-streaming', `${widthStreaming}`);
            DisplayHelper.setGlobalProperty('--height-streaming', `${heightStreaming}`);
        }
    }, [device]);

    useWindowResize(handleResize);
};
