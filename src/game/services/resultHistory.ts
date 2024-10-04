import { getResultHistory } from '../../services/api/results';
import { AppDispatch } from '../../store/store';
import { Pagination } from '../../types';

export const fetchResultHistory = async (_dispatch: AppDispatch, gameSet?: number | string) => {
    try {
        const page = 1;
        const perPage = 10;

        const data = await getResultHistory<{
            data: any[]; // change to type data your game
            pagination: Pagination;
        }>(page, perPage, gameSet);

        console.log(data);

        // run action to save history result to redux
        // dispatch(setHistory(data));
    } catch (error) {
        console.error('get history error', error);
    }
};
