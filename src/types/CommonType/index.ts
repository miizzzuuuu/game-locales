export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export type Pcode24D = 'p6' | 'p6b';
export type PcodeRoulette = 'p7' | 'p7b' | 'p7c' | 'p7d' | 'p7e' | 'p7f';
export type PcodeBaccarat = 'm22' | 'm22b' | 'm22c' | 'm22d';
export type PcodeDice6 = 'm8' | 'm8b';

export type Pcode = Pcode24D | PcodeRoulette | PcodeBaccarat | PcodeDice6;
