import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { getResultHistory } from '../../services/api/results';
import { Pagination } from '../../types';
import { AppDispatch } from '../../store/store';

function useFetchResults() {
    const dispatch = useAppDispatch();

    const [loading, setLoading] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                setLoading(true);
                const data = await getResultHistory<{
                    data: unknown;
                    pagination: Pagination;
                }>();

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

        void fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish, loading };
}

export { useFetchResults };

export const fetchResultHistory = async (_dispatch: AppDispatch, gameSet?: number | string) => {
    try {
        const page = 1;
        const perPage = 10;

        const data = await getResultHistory<{
            data: unknown; // change to type data your game
            pagination: Pagination;
        }>(page, perPage, gameSet);

        console.log(data);

        // run action to save history result to redux
        // _dispatch(setHistory(data));
    } catch (error) {
        console.error('get history error', error);
    }
};
