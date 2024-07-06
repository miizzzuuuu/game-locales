export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export type PcodeRoulette = 'p7' | 'p7b' | 'p7c' | 'p7d' | 'p7e' | 'p7f';
export type PcodeBaccarat = 'm22' | 'm22b' | 'm22c' | 'm22d';
export type PcodeDice6 = 'm8' | 'm8b';

export type Pcode = PcodeRoulette | PcodeBaccarat | PcodeDice6;
