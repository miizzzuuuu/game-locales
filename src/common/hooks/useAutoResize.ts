import { useCallback, useState } from 'react';
import { DeviceType, Orientation } from '../../types';
import { getDevice, getSize, getWindowSize, setGameSize } from '../utils/DisplayHelper';
import { useWindowResize } from './useWindowResize';

function useAutoResize() {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
    const [orientation, setOrientation] = useState<Orientation>('landscape');

    const handler = useCallback(() => {
        if (typeof window !== 'undefined') {
            const device = getDevice();

            console.log('useAutoResize', device);

            const { widthScreen, heightScreen } = getWindowSize();

            setDeviceType(device.type);
            setOrientation(device.orientation);

            const size = getSize()[device.type];

            setGameSize(size, widthScreen, heightScreen);
        }
    }, []);

    useWindowResize(handler);

    return { deviceType, orientation };
}

export { useAutoResize };
