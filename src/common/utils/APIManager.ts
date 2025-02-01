import { ApiResponse, ApiResponseBase } from "../../types";

interface Params extends Omit<RequestInit, 'body'> {
    body?: Record<string, any>;
}

export interface Client<T = any> {
    status: number;
    headers: Headers;
    url: string;
    data: T;
}

export class ApiError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ApiError';
    }
}

export class SessionError extends ApiError {
    constructor(message = 'Session Empty') {
        super(message);
        this.name = 'SessionError';
    }
}

const ENDPOINTS = {
    player: '/v2/player',
    playerProperties: '/v2/player/properties',
    playerSettings: '/v2/player/settings',
    playerLastbets: '/v2/player/lastbets', // path :pcode

    games: '/v2/games', // path :pcode, payout
    timers: '/v2/timers', // path :pcode

    sendBet: '/games/send/send',

    result: '/v2/result', // path :pcode, query ?page=&per_page=
    transaction: '/v2/transactions', // path :pcode. query ?page=&per_page=&date=

    miniHowToPlay: '/v2/player/mini-how-to-play',

    // thunder
    currentThunder: '/games/thunder',

    // events
    events: '/v2/events',
    eventLatestWinners: '/latest-winners',
    eventTopWinners: '/top-winners',
    eventGetPrize: '/get-prize',
    // end events
};

const BASE_API = import.meta.env.VITE_URL_API;
const TIMEOUT_TIME = 30;
const SESSION_EMPTY = 'Session Empty';

const timeout = (time: number) => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), time * 1000);
    return controller;
};

const checkApiStatus = (response: ApiResponseBase) => {
    if (response.status === false) {
        const detail = response.detail;
        if (detail) {
            if (detail.includes('SESSION EMPTY')) {
                throw new SessionError();
            }
            throw new ApiError(detail);
        }
        const message = response.message ?? 'API Error';
        throw new ApiError(message);
    }
};

const getErrorMessage = (error: unknown, defaultMessage = 'Error'): string => {
    if (typeof error === 'string') {
        return error;
    }
    if (error instanceof Error) {
        return error.message;
    }
    return defaultMessage;
};

const redirectError = (sessionEmpty?: boolean) => {
    const urlError = sessionEmpty
        ? 'https://page.idnlive.club/idle.html'
        : 'https://page.idnlive.club/error.html';
    window.location.replace(urlError);
};

const handleErrorApi = (error: unknown) => {
    const message = getErrorMessage(error);
    alert(message);
    redirectError(message === SESSION_EMPTY);
};

const request = async <T>(
    endpoint: string,
    { body, ...customConfig }: Params = {},
): Promise<Client<ApiResponse<T>>> => {
    const headers = { 'Content-Type': 'application/json' };

    const config: RequestInit = {
        method: body ? 'POST' : 'GET',
        signal: timeout(TIMEOUT_TIME).signal,
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(BASE_API + endpoint, config);
    const data = await response.json() as ApiResponse<T>;

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    checkApiStatus(data);

    return {
        status: response.status,
        headers: response.headers,
        url: response.url,
        data,
    };
};

const get = <T>(endpoint: string, customConfig = {}): Promise<Client<ApiResponse<T>>> => {
    return request<T>(endpoint, { ...customConfig, method: 'GET' });
};

const post = <T>(
    endpoint: string,
    body: Record<string, any>,
    customConfig = {},
): Promise<Client<ApiResponse<T>>> => {
    return request<T>(endpoint, { ...customConfig, body });
};

const put = <T>(
    endpoint: string,
    body: Record<string, any>,
    customConfig = {},
): Promise<Client<ApiResponse<T>>> => {
    return request<T>(endpoint, { ...customConfig, body, method: 'PUT' });
};

export {
    BASE_API,
    ENDPOINTS,
    SESSION_EMPTY,
    TIMEOUT_TIME,
    checkApiStatus,
    get,
    getErrorMessage,
    handleErrorApi,
    post,
    put,
    redirectError,
    request,
    timeout,
};
