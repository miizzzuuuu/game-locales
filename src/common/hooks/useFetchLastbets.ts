import { useEffect, useState } from 'react';
import { getLastbets } from '../../services/api/lastbets';
import { useAppDispatch } from '../../store/hooks';
import { setLastBetData } from '../../store/slice/lastBetsSlice';
import { updateLoading } from '../utils/LoadingHelper';

function useFetchLastbets() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchLastbets = async () => {
            try {
                updateLoading(0, 'Load settings');
                const data = await getLastbets();

                if (!ignore) {
                    dispatch(setLastBetData(data));
                }
            } catch (error) {
                console.log('fetch last bet', error);
            } finally {
                setFinish(true);
                updateLoading(10, 'Load settings completed');
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
