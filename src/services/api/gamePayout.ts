import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { PayoutData } from '../../types';

export const getGamePayout = async () => {
    const response = await APIManager.get<PayoutData[]>(ENDPOINTS.games + `/${getPcode()}/payout`);
    return response.data;
};
