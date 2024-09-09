import { useCallback, useState } from 'react';
import { DeviceType, Orientation } from '../../types';
import { DisplayHelper } from '../utils/DisplayHelper';
import { useWindowResize } from './useWindowResize';

function useAutoResize() {
    const [deviceType, setDeviceType] = useState<DeviceType>('desktop');
    const [orientation, setOrientation] = useState<Orientation>('landscape');

    const handler = useCallback(() => {
        if (typeof window !== 'undefined') {
            const device = DisplayHelper.getDevice();

            console.log('useAutoResize', device);

            const { widthScreen, heightScreen } = DisplayHelper.getWindowSize();

            setDeviceType(device.type);
            setOrientation(device.orientation);

            const size = DisplayHelper.size[device.type];

            DisplayHelper.setGameSize(size, widthScreen, heightScreen);
        }
    }, []);

    useWindowResize(handler);

    return { deviceType, orientation };
}

export { useAutoResize };
