import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { LoadingHelper } from '../utils/LoadingHelper';
import { getLastbets } from '../../services/api/lastbets';
import { setLastBetData } from '../../store/slice/lastBetsSlice';

function useFetchLastbets() {
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
                }
            } catch (error) {
                console.log('fetch last bet', error);
            } finally {
                setFinish(true);
                LoadingHelper.update(10, 'Load settings completed');
            }
        };

        void fetchLastbets();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export { useFetchLastbets };
