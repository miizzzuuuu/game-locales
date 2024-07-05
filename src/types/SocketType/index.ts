export type LobbyConnect = {
    user: {
        nickname: string;
        operatorId: string | number;
    };
};

export interface GameConnect extends LobbyConnect {
    game: string;
    pcode: string;
}

export type LoadNewValueData = {
    game: string; // "game": "6dcolor",
    win: string; // "win": "1r,2b,3y",
    pcode: string; // "pcode":"m43",
    timer: string; // "timer":"30",
    periode: number; // "periode":7011
};

export type CloseTimerData = {
    game: string; // "game": "6dcolor",
    pcode: string; // "pcode":"m43"
};

export type RecieveTotalWinData = {
    game: string; // "6DCOLOR", // "BINGOSICBO",
    winamount: number; // 12000
};

export type CameraSequence = {
    pcode: string;
    camera: number;
    detail: string;
};

export type ThunderData = {
    lucky_number: number[];
    multipliers: number[];
    // ball_position: number,
    prize_data: number;
    total_multipliers: number[];
    golden_time: boolean;
};

export type TopWinnerData = {
    pcode: string;
    periode: number;
    data: Array<{
        username: string;
        totalWin: number;
    }>;
};
