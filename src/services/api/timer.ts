import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';
import { Timer } from '../../types';

export const getTimer = async () => {
    try {
        const response = await APIManager.get<Timer>(ENDPOINTS.timers + `/${GameHelper.pcode}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
