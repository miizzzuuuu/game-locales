import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager, { ENDPOINTS } from '../utils/APIManager';
import { getPlayerData } from '../../services/api/playerData';
import { LoadingHelper } from '../utils/LoadingHelper';
import { setPlayerData } from '../../store/slice/playerSlice';
import { setChipBase } from '../../store/slice/chipSlice';
import { GameHelper } from '../utils/GameHelper';
import { HistoryItem, setHistory } from '../../store/slice/historySlice';
import { AppDispatch } from '../../store/store';

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
                    await getHistory(dispatch);

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


const fetchHistory = async (): Promise<HistoryItem[]> => {
    const response =await APIManager.get<HistoryItem[]>(ENDPOINTS.result + `/${GameHelper.pcode}`);

    if ('history' in response.data) {
        return response.data.history as any;
    } else {
        throw new Error(
            "Invalid response format: 'history' or 'totalHistory' property is missing",
        );
    }
};

const getHistory = async (dispatch: AppDispatch) => {
    try {
        const data = await fetchHistory();
        dispatch(setHistory(data));
    } catch (error) {
        console.log('get history error', error);
    }
};
