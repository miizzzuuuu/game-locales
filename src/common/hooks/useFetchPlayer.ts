import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { getPlayerData } from '../../services/api/playerData';
import { LoadingHelper } from '../utils/LoadingHelper';
import { setPlayerData } from '../../store/slice/playerSlice';
import { setChipBase } from '../../store/slice/chipSlice';

export function useFetchPlayer() {
    const dispatch = useAppDispatch();
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerData = async () => {
            try {
                LoadingHelper.update(0, 'Load player data');
                const data = await getPlayerData();

                if (!ignore) {
                    dispatch(setPlayerData(data));
                    dispatch(setChipBase(data.chipBase));

                    setFinish(true);
                    LoadingHelper.update(10, 'Load player data completed');
                }
            } catch (error) {
                APIManager.handleErrorApi(error);
            }
        };

        fetchPlayerData();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export const useSessionCheck = () => {
    const checkSession = useCallback(async () => {
        try {
            await getPlayerData();
        } catch (error) {
            APIManager.handleErrorApi(error);
        }
    }, []);

    useEffect(() => {
        checkSession();

        // set interval untuk mengecek setiap 1 let sekali
        let intervalId: ReturnType<typeof setInterval>;

        const to = setTimeout(() => {
            intervalId = setInterval(() => {
                checkSession();
            }, 60000);
        }, 60000);

        return () => {
            if (to) {
                console.log('clear timeout to');
                clearTimeout(to);
            }
            if (intervalId) {
                console.log('clear intreval');
                clearInterval(intervalId);
            }
        };
    }, [checkSession]);
};
