import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { LastBetsGameResponse } from '../../types';

export const getLastbets = async () => {
    const response = await get<LastBetsGameResponse>(ENDPOINTS.playerLastbets + `/${getPcode()}`);
    return response.data;
};

export const fetchLastbets = async (callback?: (data: LastBetsGameResponse) => void) => {
    try {
        const response = await get<LastBetsGameResponse>(
            ENDPOINTS.playerLastbets + `/${getPcode()}`,
        );

        callback?.(response.data);
    } catch (error) {
        console.error('get lastbet error', error);
    }
};
