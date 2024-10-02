import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { Timer } from '../../types';

export const getTimer = async () => {
    try {
        const response = await APIManager.get<Timer>(ENDPOINTS.timers + `/${getPcode()}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
