export interface Player {
    uid: number;
    device: string;
    balance: number;
    currency: string;
    chipBase: number[];
    nickname: string;
    maingame: string;
    table: string;
    operatorId: string;
    sessionToken: string;
    currentBet: any[];
    dateTime: string;
    operatorLogo: string | null;
    apiKey: string;
    token_sid: string;
}

export interface Settings {
    language: string;
    autoRebet: boolean;
    enableGameSound: boolean;
    enableStreamingVideo: boolean;
    enableStreamingSound: boolean;
    streamingQuality: 'high' | 'medium' | 'auto';
    volumeStreamingSound: number;
    volumeGameSound: number;
}

export interface Bet {
    button: string;
    group: string;
}

export interface BetSend extends Bet {
    value: number;
}

export type LastBets = BetSend[];

export interface LastBetsGameResponse {
    periode: number;
    data: LastBets;
}

export interface LastBetsResponse {
    [key: string]: LastBetsGameResponse;
}

export interface Game {
    name: string;
    displayName: string;
    periode: number;
    pcode: string;
    stream: string;
    stream_hd: string;
    stream_uhd: string;
    stream_4k: string;
    stream_8k: string;
    bet: Record<string, unknown>;
    betHistory: any[];
    newgame: string;
    maintenance: string;
    maintenance_text: string;
    min: number;
    max: number;
    min50: number;
    max50: number;
    category: string;
    shoePeriode: string;
    order: number | null;
    newSet: boolean;
    fast_table: boolean;
}

export interface Timer {
    time: string | number;
    timer: number;
}

export interface SendBetResponse {
    status: boolean;
    message: string;
}

export interface SendBetParam {
    button_bet: BetSend[];
    total_bet: number;
    game: string;
    transId: string;
}

export type PayoutItem = {
    name: string;
    payout: number | string | null;
};

export type PayoutData = {
    name: string;
    min: number;
    max: number;
    payout: number | string | null;
    items: PayoutItem[];
};

export type Pagination = {
    total_datas: number;
    current_page: number;
    total_pages: number;
};

export type MiniHowToPlay = {
    show: boolean;
};
