import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { getResults } from '../../services/api/results';
import { ResultP6B } from '../../types';

export function useFetchResults() {
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                setLoading(true);
                const data = await getResults<ResultP6B>();

                if (!ignore) {
                    console.log('result', data);

                    setFinish(true);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish, loading };
}
