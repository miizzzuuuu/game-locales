import { Pcode, Pcode24D, PcodeBaccarat, PcodeDragonTigerWild, PcodeRoulette } from '../CommonType';

export type Status = 'Win' | 'Lose';

export type BettingDetail = {
    tebak: string;
    type: string;
    taruhan: number;
    prize: number;
    win_amount: number;
    status: string;
};

export type BaseTransaction = {
    tglbel: string;
    pcode: string;
    periode: string;
    total_debit: number;
    total_credit: number;
    total_transaction: number;
    detail_betting: Array<BettingDetail>;
};

export type Transaction<PCode extends string> = PCode extends Pcode24D
    ? BaseTransaction & DetailResultP6
    : PCode extends PcodeRoulette
    ? BaseTransaction & DetailResultP7
    : PCode extends PcodeBaccarat
    ? BaseTransaction & DetailResultM22
    : PCode extends PcodeDragonTigerWild
    ? BaseTransaction & DetailResultM23B
    : BaseTransaction & {
        detail_result: {} | [];
    };

export type TransactionData = {
    data: Transaction<Pcode>[];
    pagination: {
        total_datas: number;
        current_page: number;
        total_pages: number;
    };
};

// result all game
export type DetailResultP7 = {
    detail_result:
    | {
        angka: string;
    }
    | [];
};

export type DetailResultP6 = {
    detail_result: {
        angka: number;
        thunder: {
            data_thunder: {
                prize_thunder: number;
            };
        };
    };
};

export type DetailResultM22 = {
    detail_result:
    | {
        idnomor: number;
        tanggal: string;
        periode: number;
        hitung: string;
        banker: string;
        player: string;
        result: 'banker' | 'player' | 'tie';
        gamekey: string;
        value: number;
        bankerPair: number;
        playerPair: number;
        playerValue: number;
        bankerValue: number;
    }
    | [];
};

export type DetailResultM23B = {
    detail_result:
    | {
        idnomor: number;
        tanggal: string;
        periode: number;
        hitung: string;
        dragon: string;
        tiger: string;
        result: string;
        gamekey: string;
        value: number;
        wild: string;
    }
    | [];
};

// TODO: add another game result type

// result
