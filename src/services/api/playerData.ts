import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { Player } from '../../types';

export const getPlayerData = async () => {
    const response = await get<Player>(ENDPOINTS.player);
    return response.data;
};
