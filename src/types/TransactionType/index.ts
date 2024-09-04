import {
    Pcode,
    Pcode12D,
    Pcode12DThunder,
    Pcode24D,
    Pcode24DJackpot,
    PcodeBaccarat,
    PcodeDice6,
    PcodeDice6Fever,
    PcodeDragonTiger,
    PcodeDragonTigerWild,
    PcodeRoulette,
    PcodeRouletteSoccer,
} from '../CommonType';
import {
    ResultM22,
    ResultM23,
    ResultM23Wild,
    ResultM8,
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
              : PCode extends PcodeDragonTiger
                ? BaseTransaction & DetailResultM23
                : PCode extends PcodeDragonTigerWild
                  ? BaseTransaction & DetailResultM23Wild
                  : PCode extends PcodeDice6
                    ? BaseTransaction & DetailResultM8
                    : PCode extends PcodeDice6Fever
                      ? BaseTransaction & DetailResultM8Fever
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

export type DetailResultM8 = {
    detail_result: ResultM8 | [];
};

export type DetailResultM8Fever = {
    detail_result: DetailResultM8Fever | [];
};

export type DetailResultM23 = {
    detail_result: ResultM23 | [];
};

export type DetailResultM23Wild = {
    detail_result: ResultM23Wild | [];
};

export type DetailResultM22 = {
    detail_result: ResultM22 | [];
};

// TODO: add another game result type

// end result all games
