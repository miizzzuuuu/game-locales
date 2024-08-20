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
    shoePeriode: string; 
};

export type CloseTimerData = {
    game: string; // "game": "6dcolor",
    pcode: string; // "pcode":"m43"
};

export type RecieveTotalWinData = {
    game: string; // "6DCOLOR", // "BINGOSICBO",
    winamount: number; // 12000
};


export type ScanNumberData = {
    "wild": string,
    "dragon": string,
    "tiger": string,
    "submit": boolean,
    "win": string,
    "idnomor":  number,
    "periode": number,
    "value": number,
    "pcode": string,
    "gameSet": number,
    "scan_number": number,
    "wild_value": number,
    "dragon_value": number,
    "tiger_value": number,
    "stat_third_card": string,
    "wildValue": number,
    "dragonValue": number,
    "tigerValue": number,
    "wildWin": string

};


export type CameraSequence = {
    pcode: string;
    camera: number;
    detail: string;
};

export type TopWinnerData = {
    pcode: string;
    periode: number;
    data: Array<{
        username: string;
        totalWin: number;
    }>;
};

export type Thunder =
    | {
          pcode: 'p6b';
          data: ThunderP6B;
      }
    | {
          pcode: 'p7e';
          data: ThunderP7E;
      }
    | {
          pcode: 'p9b';
          data: ThunderP9B;
      };

export type ThunderP6B = {
    lucky_number: { data: string[]; prize: number };
    jackpot_number: { data: number; prize: number };
};

export type ThunderP7E = {
    lucky_number: number[];
    multipliers: number[];
    prize_data: number;
    total_multipliers: number[];
    golden_time: boolean;
};

export type ThunderP9B = {
    number_board: string;
    coordinate: string;
    prize_thunder: number;
}[];

export type NewSetData = { pcode: string; gameSet: 13494; status: boolean };
