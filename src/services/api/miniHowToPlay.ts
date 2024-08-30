import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';
import { MiniHowToPlay } from '../../types';

export const getMiniHowToPlay = async () => {
    try {
        const response = await APIManager.get<MiniHowToPlay>(
            ENDPOINTS.miniHowToPlay + `/${GameHelper.pcode}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updatePlayerSettings = async (params: MiniHowToPlay) => {
    try {
        const response = await APIManager.put<MiniHowToPlay>(
            ENDPOINTS.miniHowToPlay + `/${GameHelper.pcode}`,
            params,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
