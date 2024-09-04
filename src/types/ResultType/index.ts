import { ThunderP6B, ThunderP7E, ThunderP9B } from '../SocketType';

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

export type ResultM6 = {
    angka: string;
    tanggal: string;
    periode: number;
    hitung: string;
    gamekey: number;
    idnomor: number;
};

export type ResultM7 = {
    angka: string;
    tanggal: string;
    periode: number;
    hitung: string;
    gamekey: number;
    idnomor: number;
};

export type ResultM23 = {
    dragon: string;
    tiger: string;
    result: string;
    value: string;
    tanggal: string;
    periode: string;
    hitung: string;
    gamekey: string;
    idnomor: number;
};
