import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { Game } from '../../types';

export const getGameData = async () => {
    try {
        const response = await APIManager.get<Game>(ENDPOINTS.games + `/${getPcode()}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
