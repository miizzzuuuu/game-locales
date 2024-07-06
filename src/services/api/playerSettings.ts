import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { Settings } from '../../types';

export const getPlayerSettings = async () => {
    try {
        const response = await APIManager.get<Settings>(ENDPOINTS.playerSettings);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePlayerSettings = async (params: Settings) => {
    try {
        const response = await APIManager.put<Settings>(ENDPOINTS.playerSettings, params);
        return response.data;
    } catch (error) {
        throw error;
    }
};
