import {
    Pcode,
    Pcode12D,
    Pcode12DThunder,
    Pcode24D,
    Pcode24DJackpot,
    PcodeBaccarat,
    PcodeRoulette,
    PcodeRouletteSoccer,
} from '../CommonType';
import {
    ResultM22,
    ResultP6,
    ResultP6Jackpot,
    ResultP7,
    ResultP7Soccer,
    ResultP9,
    ResultP9Thunder,
} from '../ResultType';

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
    : PCode extends Pcode24DJackpot
      ? BaseTransaction & DetailResultP6Jackpot
      : PCode extends PcodeRoulette
        ? BaseTransaction & DetailResultP7
        : PCode extends PcodeRouletteSoccer
          ? BaseTransaction & DetailResultP7Soccer
          : PCode extends Pcode12D
            ? BaseTransaction & DetailResultP9
            : PCode extends Pcode12DThunder
              ? BaseTransaction & DetailResultP9Thunder
              : PCode extends PcodeBaccarat
                ? BaseTransaction & DetailResultM22
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
export type DetailResultP6 = {
    detail_result: ResultP6 | [];
};

export type DetailResultP6Jackpot = {
    detail_result: ResultP6Jackpot | [];
};

export type DetailResultP7 = {
    detail_result: ResultP7 | [];
};

export type DetailResultP7Soccer = {
    detail_result: ResultP7Soccer | [];
};

export type DetailResultP9 = {
    detail_result: ResultP9 | [];
};

export type DetailResultP9Thunder = {
    detail_result: ResultP9Thunder | [];
};

export type DetailResultM22 = {
    detail_result: ResultM22 | [];
};

export type DetailResultM23 = {
    detail_result:
        | {
              idnomor: number;
              tanggal: string;
              periode: string;
              hitung: string;
              dragon: string;
              result: 'dragon' | 'tiger' | 'tie';
              tiger: string;
              gamekey: string;
              value: string;
          }
        | [];
};

export type DetailResultM23Wild = {
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
