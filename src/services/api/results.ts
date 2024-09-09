import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { GameHelper } from '../../common/utils/GameHelper';

export const getResultHistory2 = async <T extends {}>(page: number = 1, perPage: number = 10) => {
    try {
        const response = await APIManager.get<T>(
            ENDPOINTS.result + `/${GameHelper.pcode}/?page=${page}&per_page=${perPage}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getResultHistory = async <T extends {}>(
    page: number = 1,
    perPage: number = 10,
    gameSet?: number | string,
) => {
    try {
        const options: Record<string, string> = {};

        if (gameSet) {
            options['per_deck'] = gameSet.toString();
        } else {
            options.page = page.toString();
            options['per_page'] = perPage.toString();
        }

        const query = new URLSearchParams(options).toString();

        const response = await APIManager.get<T>(
            ENDPOINTS.result + `/${GameHelper.pcode}/?${query}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
