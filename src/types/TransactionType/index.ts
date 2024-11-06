import {
    Pcode,
    Pcode12D,
    Pcode12DThunder,
    Pcode24D,
    Pcode24DJackpot,
    Pcode24DSpin,
    Pcode48D,
    PcodeBaccarat,
    PcodeCeme,
    PcodeDice6,
    PcodeDice6Fever,
    PcodeDomino,
    PcodeDragonTiger,
    PcodeDragonTigerWild,
    PcodeOglok,
    PcodePokerDice,
    PcodeRedWhite,
    PcodeRoulette,
    PcodeRouletteSoccer,
    PcodeShioFight,
    PcodeSicboDice,
    PcodeSuwit,
} from '../CommonType';
import {
    ResultM11,
    ResultM14,
    ResultM19,
    ResultM22,
    ResultM23,
    ResultM23Wild,
    ResultM27,
    ResultM35,
    ResultM41,
    ResultM46,
    ResultM6,
    ResultM7,
    ResultM8,
    ResultM8Fever,
    ResultP12,
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
    detail_betting: BettingDetail[];
};

type DefaultDetailResult = {
    detail_result: object | [];
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
              : PCode extends PcodeSicboDice
                ? BaseTransaction & DetailResultP12
                : PCode extends Pcode24DSpin
                  ? BaseTransaction & DetailResultM6
                  : PCode extends PcodeOglok
                    ? BaseTransaction & DetailResultM7
                    : PCode extends PcodeDice6
                      ? BaseTransaction & DetailResultM8
                      : PCode extends PcodeDice6Fever
                        ? BaseTransaction & DetailResultM8Fever
                        : PCode extends PcodeRedWhite
                          ? BaseTransaction & DetailResultM11
                          : PCode extends PcodePokerDice
                            ? BaseTransaction & DetailResultM14
                            : PCode extends PcodeSuwit
                              ? BaseTransaction & DetailResultM19
                              : PCode extends PcodeBaccarat
                                ? BaseTransaction & DetailResultM22
                                : PCode extends PcodeDragonTiger
                                  ? BaseTransaction & DetailResultM23
                                  : PCode extends PcodeDragonTigerWild
                                    ? BaseTransaction & DetailResultM23Wild
                                    : PCode extends PcodeShioFight
                                      ? BaseTransaction & DetailResultM27
                                      : PCode extends Pcode48D
                                        ? BaseTransaction & DetailResultM35
                                        : PCode extends PcodeDomino
                                          ? BaseTransaction & DetailResultM41
                                          : PCode extends PcodeCeme
                                            ? BaseTransaction & DetailResultM46
                                            : BaseTransaction & DefaultDetailResult;

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

export type DetailResultP12 = {
    detail_result: ResultP12 | [];
};

export type DetailResultM6 = {
    detail_result: ResultM6 | [];
};

export type DetailResultM7 = {
    detail_result: ResultM7 | [];
};

export type DetailResultM8 = {
    detail_result: ResultM8 | [];
};

export type DetailResultM8Fever = {
    detail_result: ResultM8Fever | [];
};

export type DetailResultM11 = {
    detail_result: ResultM11 | [];
};

export type DetailResultM14 = {
    detail_result: ResultM14 | [];
};

export type DetailResultM19 = {
    detail_result: ResultM19 | [];
};

export type DetailResultM22 = {
    detail_result: ResultM22 | [];
};

export type DetailResultM23 = {
    detail_result: ResultM23 | [];
};

export type DetailResultM23Wild = {
    detail_result: ResultM23Wild | [];
};

export type DetailResultM27 = {
    detail_result: ResultM27 | [];
};

export type DetailResultM35 = {
    detail_result: ResultM35 | [];
};

export type DetailResultM41 = {
    detail_result: ResultM41 | [];
};

export type DetailResultM46 = {
    detail_result: ResultM46 | [];
};

// TODO: add another game result type

// end result all games
