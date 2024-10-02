import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { LastBetsGameResponse } from '../../types';

export const getLastbets = async () => {
    try {
        const response = await APIManager.get<LastBetsGameResponse>(
            ENDPOINTS.playerLastbets + `/${getPcode()}`,
        );

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchLastbets = async (callback?: (data: LastBetsGameResponse) => void) => {
    try {
        const response = await APIManager.get<LastBetsGameResponse>(
            ENDPOINTS.playerLastbets + `/${getPcode()}`,
        );

        callback?.(response.data);
    } catch (error) {
        console.error('get lastbet error', error);
    }
};
