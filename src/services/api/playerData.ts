import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { Player } from '../../types';

export const getPlayerData = async () => {
    try {
        const response = await APIManager.get<Player>(ENDPOINTS.player);
        return response.data;
    } catch (error) {
        throw error;
    }
};
