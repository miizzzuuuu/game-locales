import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';

export const getResults = async <T extends {}>() => {
    try {
        const response = await APIManager.get<T>(ENDPOINTS.result + `/${GameHelper.pcode}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
