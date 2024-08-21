import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { LoadingHelper } from '../utils/LoadingHelper';
import { getGameData } from '../../services/api/gameData';
import { setGame } from '../../store/slice/gameSlice';
import { getHistory } from './useFetchPlayer';

export function useFetchGame() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                LoadingHelper.update(0, 'Load settings');
                const data = await getGameData();

                if (!ignore) {
                    dispatch(setGame(data));

                    const gameSet = data.shoePeriode.split('-')[0];

                    await getHistory(dispatch, gameSet);

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
