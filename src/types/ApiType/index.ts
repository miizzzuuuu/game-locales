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
