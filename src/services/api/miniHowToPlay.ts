import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { getPcode, isDev } from '../../common/utils/GameHelper';
import { MiniHowToPlay } from '../../types';

export const getMiniHowToPlay = async () => {
    try {
        const response = await APIManager.get<MiniHowToPlay>(
            ENDPOINTS.miniHowToPlay + `/${getPcode()}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateMiniHowToPlay = async (params: MiniHowToPlay) => {
    if (isDev()) {
        throw new Error('avoid update mini how to play in dev');
    }

    try {
        const response = await APIManager.put<MiniHowToPlay>(
            ENDPOINTS.miniHowToPlay + `/${getPcode()}`,
            params,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
