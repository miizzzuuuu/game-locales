import { ENDPOINTS, get, put } from '../../common/utils/APIManager';
import { Settings } from '../../types';

export const getPlayerSettings = async () => {
    const response = await get<Settings>(ENDPOINTS.playerSettings);
    return response.data;
};

export const updatePlayerSettings = async (params: Settings) => {
    const response = await put<Settings>(ENDPOINTS.playerSettings, params);
    return response.data;
};
