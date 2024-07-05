import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { LoadingHelper } from '../../utils/LoadingHelper';
import { getPlayerSettings } from '../../services/api/playerSettings';
import { updateSetings } from '../../store/slice/settingsSlice';

export function useFetchSettings() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                LoadingHelper.update(0, 'Load settings');
                const data = await getPlayerSettings();

                if (ignore) {
                    dispatch(updateSetings(data));

                    setFinish(true);
                    LoadingHelper.update(10, 'Load settings completed');
                }
            } catch (error) {
                APIManager.handleErrorApi(error);
            }
        };

        fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}
