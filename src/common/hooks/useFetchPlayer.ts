import { useEffect, useState } from 'react';
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

                if (ignore) {
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
