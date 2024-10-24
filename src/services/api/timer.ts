import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';
import { Timer } from '../../types';

export const getTimer = async () => {
    const response = await get<Timer>(ENDPOINTS.timers + `/${getPcode()}`);
    return response.data;
};
