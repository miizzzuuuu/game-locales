import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { PayoutData } from '../../types';

export const getGamePayout = async () => {
    const response = await get<PayoutData[]>(ENDPOINTS.games + `/${getPcode()}/payout`);
    return response.data;
};
