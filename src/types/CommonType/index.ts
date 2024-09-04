export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export type Pcode24D = 'p6' | 'p6c' | 'p6d' | 'p6e' | 'p6f' | 'p6g' | 'p6h';
export type Pcode24DJackpot = 'p6b';
export type PcodeRoulette = 'p7' | 'p7b' | 'p7c' | 'p7d' | 'p7f' | 'p7g' | 'p7h';
export type PcodeRouletteSoccer = 'p7e';
export type Pcode12D = 'p9' | 'p9c' | 'p9d' | 'p9e' | 'p9f' | 'p9g' | 'p9h';
export type Pcode12DThunder = 'p9b';
export type PcodeDice6 = 'm8' | 'm8c' | 'm8d' | 'm8e' | 'm8f' | 'm8g' | 'm8h';
export type PcodeDice6Fever = 'm8b';
export type PcodeBaccarat = 'm22' | 'm22b' | 'm22c' | 'm22d' | 'm22e' | 'm22f' | 'm22g' | 'm22h';
export type PcodeDragonTiger = 'm23' | 'm23d' | 'm23e' | 'm23f' | 'm23g' | 'm23h';
export type PcodeDragonTigerWild = 'm23b' | 'm23c';

export type Pcode =
    | Pcode24D
    | Pcode24DJackpot
    | PcodeRoulette
    | PcodeRouletteSoccer
    | Pcode12D
    | Pcode12DThunder
    | PcodeDice6
    | PcodeDice6Fever
    | PcodeBaccarat
    | PcodeDragonTiger
    | PcodeDragonTigerWild;
