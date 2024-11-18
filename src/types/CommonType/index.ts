export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

// pcode 24D
export type Pcode24D = 'p6' | 'p6c' | 'p6d' | 'p6e' | 'p6f' | 'p6g' | 'p6h' | 'p6i' | 'p6j' | 'p6k';
export type Pcode24DJackpot = 'p6b';

// pcode Roulette
export type PcodeRoulette =
    | 'p7'
    | 'p7b'
    | 'p7c'
    | 'p7d'
    | 'p7f'
    | 'p7g'
    | 'p7h'
    | 'p7i'
    | 'p7j'
    | 'p7k';
export type PcodeRouletteSoccer = 'p7e';

// pcode 12D
export type Pcode12D = 'p9' | 'p9c' | 'p9d' | 'p9e' | 'p9f' | 'p9g' | 'p9h' | 'p9i' | 'p9j' | 'p9k';
export type Pcode12DThunder = 'p9b';

// pcode Sicbo Dice
export type PcodeSicboDice =
    | 'p12'
    | 'p12b'
    | 'p12c'
    | 'p12d'
    | 'p12e'
    | 'p12f'
    | 'p12g'
    | 'p12h'
    | 'p12i'
    | 'p12j'
    | 'p12k';

// pcode 24D Spin
export type Pcode24DSpin =
    | 'm6'
    | 'm6b'
    | 'm6c'
    | 'm6d'
    | 'm6e'
    | 'm6f'
    | 'm6g'
    | 'm6h'
    | 'm6i'
    | 'm6j'
    | 'm6k';

// pcode Oglok
export type PcodeOglok =
    | 'm7'
    | 'm7b'
    | 'm7c'
    | 'm7d'
    | 'm7e'
    | 'm7f'
    | 'm7g'
    | 'm7h'
    | 'm7i'
    | 'm7j'
    | 'm7k';

// pcode Dice 6
export type PcodeDice6 =
    | 'm8'
    | 'm8c'
    | 'm8d'
    | 'm8e'
    | 'm8f'
    | 'm8g'
    | 'm8h'
    | 'm8i'
    | 'm8j'
    | 'm8k';
export type PcodeDice6Fever = 'm8b';

// pcode Red White
export type PcodeRedWhite =
    | 'm11'
    | 'm11b'
    | 'm11c'
    | 'm11d'
    | 'm11e'
    | 'm11f'
    | 'm11g'
    | 'm11h'
    | 'm11i'
    | 'm11j'
    | 'm11k';

// pcode Poker Dice
export type PcodePokerDice =
    | 'm14'
    | 'm14b'
    | 'm14c'
    | 'm14d'
    | 'm14e'
    | 'm14f'
    | 'm14g'
    | 'm14h'
    | 'm14i'
    | 'm14j'
    | 'm14k';

// pcode Suwit
export type PcodeSuwit =
    | 'm19'
    | 'm19b'
    | 'm19c'
    | 'm19d'
    | 'm19e'
    | 'm19f'
    | 'm19g'
    | 'm19h'
    | 'm19i'
    | 'm19j'
    | 'm19k';

// pcode Baccarat
export type PcodeBaccarat =
    | 'm22'
    | 'm22b'
    | 'm22c'
    | 'm22d'
    | 'm22e'
    | 'm22f'
    | 'm22g'
    | 'm22h'
    | 'm22i'
    | 'm22j'
    | 'm22k';

// pcode Dragon Tiger
export type PcodeDragonTiger =
    | 'm23'
    | 'm23d'
    | 'm23e'
    | 'm23f'
    | 'm23g'
    | 'm23h'
    | 'm23i'
    | 'm23j'
    | 'm23k';
export type PcodeDragonTigerWild = 'm23b' | 'm23c';

// pcode Shio Fight
export type PcodeShioFight =
    | 'm27'
    | 'm27b'
    | 'm27c'
    | 'm27d'
    | 'm27e'
    | 'm27f'
    | 'm27g'
    | 'm27h'
    | 'm27i'
    | 'm27j'
    | 'm27k';

// pcode 48D
export type Pcode48D =
    | 'm35'
    | 'm35b'
    | 'm35c'
    | 'm35d'
    | 'm35e'
    | 'm35f'
    | 'm35g'
    | 'm35h'
    | 'm35i'
    | 'm35j'
    | 'm35k';

// pcode Domino
export type PcodeDomino =
    | 'm41'
    | 'm41b'
    | 'm41c'
    | 'm41d'
    | 'm41e'
    | 'm41f'
    | 'm41g'
    | 'm41h'
    | 'm41i'
    | 'm41j'
    | 'm41k';

// pcode Ceme
export type PcodeCeme =
    | 'm46'
    | 'm46b'
    | 'm46c'
    | 'm46d'
    | 'm46e'
    | 'm46f'
    | 'm46g'
    | 'm46h'
    | 'm46i'
    | 'm46j'
    | 'm46k';

export type Pcode =
    | Pcode24D
    | Pcode24DJackpot
    | PcodeRoulette
    | PcodeRouletteSoccer
    | Pcode12D
    | Pcode12DThunder
    | PcodeSicboDice
    | Pcode24DSpin
    | PcodeDice6
    | PcodeDice6Fever
    | PcodeRedWhite
    | PcodePokerDice
    | PcodeBaccarat
    | PcodeDragonTiger
    | PcodeDragonTigerWild
    | PcodeShioFight
    | Pcode48D
    | PcodeDomino
    | PcodeCeme;

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
