import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { Settings } from '../../types';

export const getPlayerSettings = async () => {
    const response = await APIManager.get<Settings>(ENDPOINTS.playerSettings);
    return response.data;
};

export const updatePlayerSettings = async (params: Settings) => {
    const response = await APIManager.put<Settings>(ENDPOINTS.playerSettings, params);
    return response.data;
};
