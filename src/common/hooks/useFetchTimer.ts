import { useEffect, useState } from 'react';
import { getTimer } from '../../services/api/timer';
import { useAppDispatch } from '../../store/hooks';
import { openTime, setTimer } from '../../store/slice/timerSlice';
import { handleErrorApi } from '../utils/APIManager';
import { updateLoading } from '../utils/LoadingHelper';

function useFetchTimer() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                updateLoading(0, 'Load timer');
                const data = await getTimer();

                if (!ignore) {
                    dispatch(setTimer(data.timer));

                    const timerNumber = Number(data.time);
                    if (!isNaN(timerNumber)) {
                        dispatch(openTime(timerNumber));
                    }

                    setFinish(true);
                    updateLoading(10, 'Load timer completed');
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

export { useFetchTimer };
