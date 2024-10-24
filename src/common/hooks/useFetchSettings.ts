import { useEffect, useState } from 'react';
import { getPlayerSettings } from '../../services/api/playerSettings';
import { useAppDispatch } from '../../store/hooks';
import { setSetings } from '../../store/slice/settingsSlice';
import { handleErrorApi } from '../utils/APIManager';
import { LoadingHelper } from '../utils/LoadingHelper';

function useFetchSettings() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                LoadingHelper.update(0, 'Load settings');
                const data = await getPlayerSettings();

                if (!ignore) {
                    dispatch(setSetings(data));

                    setFinish(true);
                    LoadingHelper.update(10, 'Load settings completed');
                }
            } catch (error) {
                handleErrorApi(error);
            }
        };

        void fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export { useFetchSettings };
