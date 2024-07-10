import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { LoadingHelper } from '../utils/LoadingHelper';
import { getLastbets } from '../../services/api/lastbets';
import { setLastBetData } from '../../store/slice/lastBetsSlice';

export function useFetchLastbets() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchLastbets = async () => {
            try {
                LoadingHelper.update(0, 'Load settings');
                const data = await getLastbets();

                if (!ignore) {
                    dispatch(setLastBetData(data));

                    setFinish(true);
                    LoadingHelper.update(10, 'Load settings completed');
                }
            } catch (error) {
                APIManager.handleErrorApi(error);
            }
        };

        fetchLastbets();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}
