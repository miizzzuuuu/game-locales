import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { Game } from '../../types';

export const getGameData = async () => {
    const response = await get<Game>(ENDPOINTS.games + `/${getPcode()}`);
    return response.data;
};
