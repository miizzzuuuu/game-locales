export type LobbyConnect = {
    user: {
        nickname: string;
        operatorId: string | number;
    };
};

export interface GameConnect extends LobbyConnect {
    game: string;
    pcode: string;
    newlobby?: boolean;
}

export type LoadNewValueData = {
    game: string; // "game": "6dcolor",
    win: string; // "win": "1r,2b,3y",
    pcode: string; // "pcode":"m43",
    timer: string | number; // "timer":"30",
    periode: number; // "periode":7011
    shoePeriode?: string;
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

export type TopWinnerData = {
    pcode: string;
    periode: number;
    data: {
        username: string;
        totalWin: number;
    }[];
};

export type BaseThunder = { pcode: string };

export type Thunder<PCode extends string> = PCode extends 'p6b'
    ? BaseThunder & { data: ThunderP6B }
    : PCode extends 'p7e'
      ? BaseThunder & { data: ThunderP7E }
      : PCode extends 'p9b'
        ? BaseThunder & {
              data: ThunderP9B;
          }
        : PCode extends 'm8b'
          ? BaseThunder & { data: ThunderM8B }
          : PCode extends 'm46'
            ? BaseThunder & { data: ThunderM46 }
            : BaseThunder & { data: any };

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

export type ThunderM8B = {
    cold: string[]; // ['3', 'Big'];
    hot: string[]; // ['Small', '6', '1', '5'];
    normal: string[]; // ['4', 'Odd', 'Even', '2'];
    jackpot: string | null; // "4";
};

export type ThunderM46 = {
    thunder: 'player1' | 'player2' | 'player3'; // 'player2';
    element: Record<string, string | boolean>;
    prize: number;
};

export type NewSetData = { pcode: string; gameSet: number; status: boolean };

export type Cashdrop = {
    name: string; // 'santa-cash-box';
    data: {
        username: string;
        agent: string;
    };
};
