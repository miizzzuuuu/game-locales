import { useCallback } from 'react';
import { useWindowResize } from '../../../hooks/useWindowResize';
import { DisplayHelper } from '../../../utils/DisplayHelper';
import { useAppSelector } from '../../../../store/hooks';
import { selectDevice } from '../../../../store/slice/windowSlice';

export const useGetStreamingSize = () => {
    const device = useAppSelector(selectDevice);

    const handleResize = useCallback(() => {
        if (device === 'mobile-portrait') {
            const widthStreaming = Number(
                window
                    .getComputedStyle(document.documentElement)
                    .getPropertyValue('--width-game') ?? 1,
            );
            const heightStreaming = (9 / 16) * widthStreaming;

            DisplayHelper.setGlobalProperty('--height-streaming', `${heightStreaming}`);
        }
    }, [device]);

    useWindowResize(handleResize);
};
