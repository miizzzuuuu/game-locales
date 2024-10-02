const OFFSET_TIME = 5;

let _pcode: string = '';

const GAME_CODE: Record<string, string> = {
    p6: '24D',
    p7: 'RL',
    p9: '12D',
    p12: 'SD',
    m6: '24DSPIN',
    m7: 'OG',
    m8: 'D6',
    m10: 'HNT',
    m11: 'RW',
    m13: 'BL',
    m14: 'PD',
    m16: 'GB',
    m19: 'SW',
    m20: 'MP',
    m21: 'MPW',
    m22: 'BC',
    m23: 'DT',
    m24: 'NN',
    m25: 'FT',
    m26: 'LG',
    m27: 'SF',
    m28: 'IFS',
    m29: 'SB',
    m30: '5D',
    m31: '3D',
    m32: 'SG',
    m33: 'GBJ',
    m34: 'HILO',
    m35: '48D',
    m36: '36D',
    m37: 'BINGOSICBO',
    m38: 'BM',
    m39: 'DUELDICE',
    m40: 'XD',
    m41: 'DMN',
    m42: 'GPX',
};

const GAME_NAME: Record<string, string> = {
    p7: 'roulette',
    p7b: 'rouletteb',
    p7c: 'roulettec',
    p7d: 'rouletted',
    p7e: 'roulettee',
    p7f: 'roulettef',
};

const GAME_DISPLAY_NAME: Record<string, string> = {
    m6: '24D Spin',
    m7: 'Oglok',
    m8: 'Dice 6',
    m8b: 'Dice 6 Fever',
    m10: 'Head Tail',
    m11: 'Red White',
    m11b: 'Europe Red White',
    m13: 'Billiards',
    m14: 'Poker Dice',
    m14b: 'Europe Poker Dice',
    m16: 'Gong Ball',
    m19: 'Suwit',
    m20: 'Monopoly',
    m21: 'Monopoly World Cup',
    m22: 'Baccarat',
    m22b: 'Baccarat B',
    m22c: 'Baccarat C',
    m22d: 'Europe Baccarat 1',
    m22e: 'Europe Baccarat 1',
    m22f: 'Europe Baccarat 2',
    m23: 'Dragon Tiger',
    m23b: 'Dragon Tiger Wild',
    m23c: 'Dragon Tiger Wild 2',
    m23d: 'Europe Dragon Tiger',
    m24: 'Niuniu',
    m25: 'Fantan',
    m26: 'Race Ball',
    m27: 'Shio Fights',
    m28: 'IDN 4 Stand',
    m28b: 'IDN 4 Stand B',
    m29: '3D Shio',
    m30: '5D',
    m31: 'Sicbo Ball - Fast',
    m32: 'SamGong',
    m33: 'Gong Ball Jitu',
    m34: 'HILO',
    m35: '48D',
    m35b: 'Europe 48D',
    m36: '36D',
    m37: 'Bingo Sicbo',
    m38: 'Bingo Baccarat',
    m38b: 'Bingo Baccarat 2',
    m39: 'Duel Dice',
    m40: 'Xoc Dia',
    m41: 'Domino',
    m41b: 'Europe Domino',
    m42: 'Grandprix Number',
    m43: '6D Color',
    m46: 'Ceme',
    p6: '24D',
    p6b: '24D Jackpot',
    p7: 'Roulette',
    p7b: 'Roulette - Fast Table',
    p7c: 'Bingo Roulette',
    p7d: 'Europe Roulette',
    p7e: 'Soccer Roulette',
    p7f: 'Bounce Roulette',
    p7g: 'EU Roulette 2',
    p9: '12D',
    p9b: '12D Thunder',
    p12: 'Sicbo[Dice]',
};

const KEY_MINI_HOW_TO_PLAY = 'mini-htp';

export const WIN_NOTIFICATION_DURATION = 3000;

export const normalizeTime = (time: number) => {
    let result = time - OFFSET_TIME;
    return result < 0 ? 0 : result;
};

export const setPcode = (value: string) => {
    _pcode = value;
};

export const getPcode = () => _pcode;

export const getBasePcode = () => {
    if (!_pcode.trim()) throw new Error('mixedPcode is empty!');
    return _pcode.replace(/\D+$/, '');
};

export const isDev = () => import.meta.env.MODE === 'development';

export const getGameCode = () => {
    const basePcode = getBasePcode();
    const lastLetter = isNaN(Number(_pcode[_pcode.length - 1]))
        ? _pcode[_pcode.length - 1].toUpperCase()
        : '';

    return GAME_CODE[basePcode]
        ? GAME_CODE[basePcode] + lastLetter
        : 'unknown game: pcode ' + _pcode;
};

export const getGameName = () => GAME_NAME[_pcode];

export const getGameDisplayName = (pcode: string) => GAME_DISPLAY_NAME[pcode] || pcode;

export const getKeyMiniHowToPlay = () => `${KEY_MINI_HOW_TO_PLAY}-${_pcode}`;

export const getMiniHowToPlayLocalStorage = () => {
    if (isDev()) {
        return true;
    }

    const item = localStorage.getItem(getKeyMiniHowToPlay());
    return !item || item === 'true';
};

export const hideMiniHowToPlayLocalStorage = () => {
    if (isDev()) {
        return;
    }
    localStorage.setItem(getKeyMiniHowToPlay(), 'false');
};

export const getVariant = () => (_pcode.length === 3 ? '' : _pcode.charAt(_pcode.length - 1));

export const getEventNewSet = () => {
    let baseNewSet = '';

    const variant = getVariant();

    if (_pcode.startsWith('m22')) {
        baseNewSet = 'baccaratNewSet';
    } else if (_pcode.startsWith('m23')) {
        baseNewSet = 'dragonTigerNewSet';
    } else if (_pcode.startsWith('m24')) {
        baseNewSet = 'niuniuNewSet';
    } else if (_pcode.startsWith('m27')) {
        baseNewSet = 'shioFightNewSet';
    } else if (_pcode.startsWith('m28')) {
        baseNewSet = 'idn4standNewSet';
    } else if (_pcode.startsWith('m38')) {
        baseNewSet = 'baccaratmachineNewSet';
    } else if (_pcode.startsWith('m41')) {
        baseNewSet = 'dominoNewSet';
    } else if (_pcode.startsWith('m46')) {
        baseNewSet = 'cemeNewSet';
    } else {
        return baseNewSet;
    }

    return variant ? baseNewSet + variant.toUpperCase() : baseNewSet;
};
