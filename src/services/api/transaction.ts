import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { TransactionData } from '../../types';

export const getTransaction = async (page: number, date: 'all' | 'today' | 'before') => {
    const response = await get<TransactionData>(
        ENDPOINTS.transaction + `/${getPcode()}?page=${page}&date=${date}`,
    );
    return response.data;
};
