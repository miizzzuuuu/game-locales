import { ENDPOINTS, get, put } from '../../common/utils/APIManager';
import { getPcode, isDev } from '../../common/utils/GameHelper';
import { MiniHowToPlay } from '../../types';

export const getMiniHowToPlay = async () => {
    const response = await get<MiniHowToPlay>(ENDPOINTS.miniHowToPlay + `/${getPcode()}`);
    return response.data;
};

export const updateMiniHowToPlay = async (params: MiniHowToPlay) => {
    if (isDev()) {
        throw new Error('avoid update mini how to play in dev');
    }

    const response = await put<MiniHowToPlay>(ENDPOINTS.miniHowToPlay + `/${getPcode()}`, params);
    return response.data;
};
