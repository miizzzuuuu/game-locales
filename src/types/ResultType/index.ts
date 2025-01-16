import { ShioName } from '../CommonType';
import { ThunderM8B, ThunderP6B, ThunderP7E, ThunderP9B } from '../SocketType';

export type CommonResult = {
    tanggal: string;
    periode: number | string;
    hitung: string;
    gamekey: number;
    idnomor: number;
};

export type ResultP6 = CommonResult & {
    angka: string;
};

export type ResultP6Jackpot = ResultP6 & {
    thunder: {
        data_thunder: {
            prize_thunder: number;
        };
        generate_thunder: ThunderP6B;
    };
};

export type ResultP7 = CommonResult & {
    angka: string;
};

export type ResultP7Soccer = ResultP7 & {
    thunder: {
        data_thunder: {
            periode: number;
            result: string;
            multiplier: number;
        };
        generate_thunder: ThunderP7E;
    };
};

export type ResultP9 = CommonResult & {
    angka: string;
};

export type ResultP9Thunder = ResultP9 & {
    thunder: {
        data_thunder: {
            coordinate: string;
            periode: number;
            prize_thunder: number;
            result: string;
        };
        generate_thunder: ThunderP9B;
    };
};

export type ResultP12 = CommonResult & {
    angka: string; // '4,4,4';
};

export type ResultM6 = ResultP6;

export type ResultM7 = CommonResult & {
    angka: string; // '3,2,6';
};

export type ResultM8 = CommonResult & {
    angka: string;
};

export type ResultM8Fever = ResultM8 & {
    thunder: {
        generate_thunder: ThunderM8B;
    };
};

export type ResultM10 = CommonResult & {
    angka: string;
};

export type ResultM11 = CommonResult & {
    angka: string; // '1,2,3' 1 = red, 2 = white, 3 = jp
};

export type ResultM13 = CommonResult & {
    angka: string; // '1,2,3' 1 = red, 2 = white, 3 = jp
};

export type ResultM14 = CommonResult & {
    angka: string; // '1b,1b,1b,1b,1b';
    angka2: string; // '1b,1b,1b,1b,1b';
    angka3: string; // '5 of a Kind';
};

export type ResultM19 = CommonResult & {
    angkawin: string; // 'gunting,kelingking';
    angka: string; // 'kertas,jempol';
};

export type ResultM20 = CommonResult & {
    angka: string;
};

export type ResultM22 = CommonResult & {
    result: 'banker' | 'player' | 'tie';
    value: number | string;
    playerValue: number;
    bankerValue: number;
    banker: string;
    player: string;
    bankerPair: number;
    playerPair: number;
};

export type ResultM23 = CommonResult & {
    value: string;
    result: 'dragon' | 'tiger' | 'tie';
    dragon: string;
    tiger: string;
};

export type ResultM23Wild = ResultM23 & {
    wild: string;
};

export type ResultM27 = CommonResult & {
    di: ShioName;
    tian: ShioName;
    result: 'di' | 'tian' | 'tie';
};

export type ResultM35 = CommonResult & {
    angka: string;
};

export type ResultM41 = CommonResult & {
    banker: string;
    player: string;
    result: 'banker' | 'player' | 'tie';
    pure: string;
    qiu: string;
    value: number | string;
    balak: boolean;
};

export type ResultM46 = CommonResult & {
    banker: string; // '4,5-4,5';
    player1: string; // '0,3-0,6';
    player2: string; // '2,6-1,1';
    player3: string; // '1,5-0,2';
    valueBanker: string | number; // '8';
    valuePlayer1: string | number; // '9';
    valuePlayer2: string | number; // '0';
    valuePlayer3: string | number; // '8';
    result: string; // "player1,player2,player3";
};

// not done
