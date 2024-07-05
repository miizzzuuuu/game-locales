import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';
import { Game } from '../../types';

export const getGameData = async () => {
    try {
        const response = await APIManager.get<Game>(ENDPOINTS.games + `/${GameHelper.pcode}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
