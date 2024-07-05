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

export const ENDPOINTS = {
    player: '/v2/player',
    playerProperties: '/v2/player/properties',
    playerSettings: '/v2/player/settings',
    playerLastbets: '/v2/player/lastbets', // path :pcode

    games: '/v2/games', // path :pcode, payout
    timers: '/v2/timers', // path :pcode

    sendBet: '/games/send/send',

    result: '/v2/result', // path :pcode, query ?page=&per_page=
    transaction: '/v2/transactions', // path :pcode. query ?page=&per_page=&date=
};

class APIManager {
    static BASE_API = import.meta.env.VITE_URL_API;

    static TIMEOUT_TIME = 30;
    static SESSION_EMPTY = 'Session Empty';

    static async request<T = object>(
        endpoint: string,
        { body, ...customConfig }: Params = {},
    ): Promise<Client<T>> {
        const headers = { 'Content-Type': 'application/json' };

        const config: RequestInit = {
            method: body ? 'POST' : 'GET',
            signal: this.timeout(this.TIMEOUT_TIME).signal,
            ...customConfig,
            headers: {
                ...headers,
                ...customConfig.headers,
            },
        };

        if (body) {
            config.body = JSON.stringify(body);
        }

        const response = await fetch(this.BASE_API + endpoint, config);

        const data: T = await response.json();

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        this.checkApiStatus(data);

        return {
            status: response.status,
            headers: response.headers,
            url: response.url,
            data,
        } as Client<T>;
    }

    static get<T = object>(endpoint: string, customConfig = {}): Promise<Client<T>> {
        return this.request(endpoint, { ...customConfig, method: 'GET' });
    }

    static post<T = object>(
        endpoint: string,
        body: Record<string, any>,
        customConfig = {},
    ): Promise<Client<T>> {
        return this.request(endpoint, { ...customConfig, body });
    }

    static timeout = (time: number) => {
        const controller = new AbortController();
        setTimeout(() => controller.abort(), time * 1000);
        return controller;
    };

    static checkApiStatus = (response: any) => {
        if (response.status === false) {
            const detail = response.detail;
            if (detail) {
                if (/SESSION EMPTY/.test(response.detail)) {
                    throw new SessionError();
                }

                throw new ApiError(detail);
            }

            const message = response.message || 'API Error';
            throw new ApiError(message);
        }
    };

    static getErrorMessage(error: unknown, defaultMessage = 'Error'): string {
        if (typeof error === 'string') {
            return error;
        }

        if (error instanceof Error) {
            return error.message;
        }

        return defaultMessage;
    }

    static handleErrorApi(error: unknown) {
        const message = this.getErrorMessage(error);

        alert(message);

        this.redirectError(message === this.SESSION_EMPTY);
    }

    static redirectError = (seesionEmpty?: boolean) => {
        const urlError = seesionEmpty
            ? 'https://page.idnlive.club/idle.html'
            : 'https://page.idnlive.club/error.html';

        window.location.replace(urlError);
    };
}

export default APIManager;
