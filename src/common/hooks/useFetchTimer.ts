import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { LoadingHelper } from '../../utils/LoadingHelper';

import { getTimer } from '../../services/api/timer';
import { openTime, setTimer } from '../../store/slice/timerSlice';

export function useFetchTimer() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                LoadingHelper.update(0, 'Load settings');
                const data = await getTimer();

                if (ignore) {
                    dispatch(setTimer(data.timer));

                    const timerNumber = Number(data.time);
                    if (!isNaN(timerNumber)) {
                        dispatch(openTime(timerNumber));
                    }

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
