export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

// pcode 24D
export type Pcode24D = 'p6' | 'p6c' | 'p6d' | 'p6e' | 'p6f' | 'p6g' | 'p6h';
export type Pcode24DJackpot = 'p6b';

// pcode Roulette
export type PcodeRoulette = 'p7' | 'p7b' | 'p7c' | 'p7d' | 'p7f' | 'p7g' | 'p7h';
export type PcodeRouletteSoccer = 'p7e';

// pcode 12D
export type Pcode12D = 'p9' | 'p9c' | 'p9d' | 'p9e' | 'p9f' | 'p9g' | 'p9h';
export type Pcode12DThunder = 'p9b';

// pcode Sicbo Dice
export type PcodeSicboDice = 'p12' | 'p12c' | 'p12d' | 'p12e' | 'p12f' | 'p12g' | 'p12h';

// pcode Dice 6
export type PcodeDice6 = 'm8' | 'm8c' | 'm8d' | 'm8e' | 'm8f' | 'm8g' | 'm8h';
export type PcodeDice6Fever = 'm8b';

// pcode Poker Dice
export type PcodePokerDice = 'm14' | 'm14c' | 'm14d' | 'm14e' | 'm14f' | 'm14g' | 'm14h';

// pcode Baccarat
export type PcodeBaccarat = 'm22' | 'm22b' | 'm22c' | 'm22d' | 'm22e' | 'm22f' | 'm22g' | 'm22h';

// pcode Dragon Tiger
export type PcodeDragonTiger = 'm23' | 'm23d' | 'm23e' | 'm23f' | 'm23g' | 'm23h';
export type PcodeDragonTigerWild = 'm23b' | 'm23c';

// pcode Shio Fight
export type PcodeShioFight = 'm27' | 'm27b' | 'm27c' | 'm27d' | 'm27e' | 'm27f' | 'm27g' | 'm27h';

// pcode Domino
export type PcodeDomino = 'm41' | 'm41b' | 'm41c' | 'm41d' | 'm41e' | 'm41f' | 'm41g' | 'm41h';

export type Pcode =
    | Pcode24D
    | Pcode24DJackpot
    | PcodeRoulette
    | PcodeRouletteSoccer
    | Pcode12D
    | Pcode12DThunder
    | PcodeSicboDice
    | PcodeDice6
    | PcodeDice6Fever
    | PcodePokerDice
    | PcodeBaccarat
    | PcodeDragonTiger
    | PcodeDragonTigerWild
    | PcodeShioFight
    | PcodeDomino;

export type ShioName =
    | 'dog'
    | 'dragon'
    | 'snake'
    | 'rat'
    | 'monkey'
    | 'rabbit'
    | 'ox'
    | 'tiger'
    | 'pig'
    | 'horse'
    | 'rooster'
    | 'goat';
