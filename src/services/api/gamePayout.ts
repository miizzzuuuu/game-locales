import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';
import { PayoutData } from '../../types';

export const getGamePayout = async () => {
    try {
        const response = await APIManager.get<PayoutData[]>(
            ENDPOINTS.games + `/${GameHelper.pcode}/payout`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
