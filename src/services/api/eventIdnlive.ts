import { ENDPOINTS, get } from '../../common/utils/APIManager';
import { EventIdnliveList } from '../../types';

export const getEventsList = async () => {
    const response = await get<EventIdnliveList>(ENDPOINTS.events);
    return response.data;
};
