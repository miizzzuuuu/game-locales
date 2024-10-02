import APIManager, { ENDPOINTS } from '../../common/utils/APIManager';
import { getPcode } from '../../common/utils/GameHelper';

export const getResultHistory2 = async <T extends {}>(page: number = 1, perPage: number = 10) => {
    const response = await APIManager.get<T>(
        ENDPOINTS.result + `/${getPcode()}/?page=${page}&per_page=${perPage}`,
    );
    return response.data;
};

export const getResultHistory = async <T extends {}>(
    page: number = 1,
    perPage: number = 10,
    gameSet?: number | string,
) => {
    const options: Record<string, string> = {};

    if (gameSet) {
        options['per_deck'] = gameSet.toString();
    } else {
        options.page = page.toString();
        options['per_page'] = perPage.toString();
    }

    const query = new URLSearchParams(options).toString();

    const response = await APIManager.get<T>(ENDPOINTS.result + `/${getPcode()}/?${query}`);
    return response.data;
};
