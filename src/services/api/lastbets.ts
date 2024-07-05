import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';
import { LastBetsGameResponse } from '../../types';

export const getLastbets = async () => {
    try {
        const response = await APIManager.get<LastBetsGameResponse>(
            ENDPOINTS.playerLastbets + `/${GameHelper.pcode}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
