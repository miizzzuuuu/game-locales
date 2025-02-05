const OFFSET_TIME = 5;

let _pcode = '';

const KEY_MINI_HOW_TO_PLAY = 'mini-htp';

export const WIN_NOTIFICATION_DURATION = 3000;

const GAME_CODE = new Map<string, string>([
    ['p6', '24D'],
    ['p7', 'RL'],
    ['p9', '12D'],
    ['p12', 'SD'],
    ['m6', '24DSPIN'],
    ['m7', 'OG'],
    ['m8', 'D6'],
    ['m10', 'HNT'],
    ['m11', 'RW'],
    ['m13', 'BL'],
    ['m14', 'PD'],
    ['m16', 'GB'],
    ['m19', 'SW'],
    ['m20', 'MP'],
    ['m21', 'MPW'],
    ['m22', 'BC'],
    ['m23', 'DT'],
    ['m24', 'NN'],
    ['m25', 'FT'],
    ['m26', 'LG'],
    ['m27', 'SF'],
    ['m28', 'IFS'],
    ['m29', 'SB'],
    ['m30', '5D'],
    ['m31', '3D'],
    ['m32', 'SG'],
    ['m33', 'GBJ'],
    ['m34', 'HILO'],
    ['m35', '48D'],
    ['m36', '36D'],
    ['m37', 'BINGOSICBO'],
    ['m38', 'BM'],
    ['m39', 'DUELDICE'],
    ['m40', 'XD'],
    ['m41', 'DMN'],
    ['m42', 'GPX'],
    ['m46', 'CME'],
]);

const GAME_NAME = new Map<string, string>([
    ['p7', 'roulette'],
    ['p7b', 'rouletteb'],
    ['p7c', 'roulettec'],
    ['p7d', 'rouletted'],
    ['p7e', 'roulettee'],
    ['p7f', 'roulettef'],
]);

const GAME_DISPLAY_NAME = new Map<string, string>([
    ['m6', '24D Spin'],
    ['m7', 'Oglok'],
    ['m8', 'Dice 6'],
    ['m8b', 'Dice 6 Fever'],
    ['m10', 'Head Tail'],
    ['m11', 'Red White'],
    ['m11b', 'Europe Red White'],
    ['m13', 'Billiards'],
    ['m14', 'Poker Dice'],
    ['m14b', 'Europe Poker Dice'],
    ['m16', 'Gong Ball'],
    ['m19', 'Suwit'],
    ['m20', 'Monopoly'],
    ['m21', 'Monopoly World Cup'],
    ['m22', 'Baccarat'],
    ['m22b', 'Baccarat B'],
    ['m22c', 'Baccarat C'],
    ['m22d', 'Europe Baccarat 1'],
    ['m22e', 'Europe Baccarat 1'],
    ['m22f', 'Europe Baccarat 2'],
    ['m23', 'Dragon Tiger'],
    ['m23b', 'Dragon Tiger Wild'],
    ['m23c', 'Dragon Tiger Wild 2'],
    ['m23d', 'Europe Dragon Tiger'],
    ['m24', 'Niuniu'],
    ['m25', 'Fantan'],
    ['m26', 'Race Ball'],
    ['m27', 'Shio Fights'],
    ['m28', 'IDN 4 Stand'],
    ['m28b', 'IDN 4 Stand B'],
    ['m29', '3D Shio'],
    ['m30', '5D'],
    ['m31', 'Sicbo Ball - Fast'],
    ['m32', 'SamGong'],
    ['m33', 'Gong Ball Jitu'],
    ['m34', 'HILO'],
    ['m35', '48D'],
    ['m35b', 'Europe 48D'],
    ['m36', '36D'],
    ['m37', 'Bingo Sicbo'],
    ['m38', 'Bingo Baccarat'],
    ['m38b', 'Bingo Baccarat 2'],
    ['m39', 'Duel Dice'],
    ['m40', 'Xoc Dia'],
    ['m41', 'Domino'],
    ['m41b', 'Europe Domino'],
    ['m42', 'Grandprix Number'],
    ['m43', '6D Color'],
    ['m46', 'Europe Ceme'],
    ['p6', '24D'],
    ['p6b', '24D Jackpot'],
    ['p7', 'Roulette'],
    ['p7b', 'Roulette - Fast Table'],
    ['p7c', 'Bingo Roulette'],
    ['p7d', 'Europe Roulette'],
    ['p7e', 'Soccer Roulette'],
    ['p7f', 'Bounce Roulette'],
    ['p7g', 'EU Roulette 2'],
    ['p9', '12D'],
    ['p9b', '12D Thunder'],
    ['p12', 'Sicbo Dice'],
    ['p12b', 'Europe Sicbo Dice'],
]);

const DUPLICATE_PCODE = new Map<string, string>([
    ['m6', 'p6'],
    ['m31', 'p12'],
    ['m37', 'p12'],
]);

export const normalizeTime = (time: number) => {
    const result = time - OFFSET_TIME;
    return result < 0 ? 0 : result;
};

const basePcodeCache = new Map<string, string>();

export const setPcode = (value: string) => {
    if (!value) return;
    _pcode = value;
    basePcodeCache.clear();
};

export const getPcode = () => _pcode;

export const getBasePcode = () => {
    if (!_pcode?.trim()) throw new Error('mixedPcode is empty or contains only whitespace');

    // Check cache first
    const cached = basePcodeCache.get(_pcode);
    if (cached !== undefined) {
        return cached;
    }

    // Calculate and cache result
    const result = DUPLICATE_PCODE.has(_pcode)
        ? DUPLICATE_PCODE.get(_pcode)!
        : _pcode.replace(/\D+$/, '');
    basePcodeCache.set(_pcode, result);
    return result;
};

export const isDev = () => import.meta.env.MODE === 'development';

export const getGameCode = () => {
    const basePcode = _pcode.replace(/\D+$/, '');
    const code = GAME_CODE.get(basePcode);
    if (!code) return `unknown game: pcode ${_pcode}`;

    const lastChar = _pcode.slice(-1);
    return /\d/.test(lastChar) ? code : code + lastChar.toUpperCase();
};

export const getGameName = () => GAME_NAME.get(_pcode);

export const getGameDisplayName = (pcode: string) => GAME_DISPLAY_NAME.get(pcode) ?? pcode;

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

// export const getVariant = () => (_pcode.length === 3 ? '' : _pcode.charAt(_pcode.length - 1));
export const getVariant = () => {
    const regex = /[^0-9]$/;
    const match = regex.exec(_pcode);
    return match ? match[0] : '';
};

// TODO: remove specific event new set
const NEW_SET_MAP = new Map([
    ['m22', 'baccaratNewSet'],
    ['m23', 'dragonTigerNewSet'],
    ['m24', 'niuniuNewSet'],
    ['m27', 'shioFightNewSet'],
    ['m28', 'idn4standNewSet'],
    ['m38', 'baccaratmachineNewSet'],
    ['m41', 'dominoNewSet'],
    ['m46', 'cemeNewSet'],
]);

export const getEventNewSet = () => {
    const prefix = _pcode.slice(0, 3);
    const baseNewSet = NEW_SET_MAP.get(prefix);
    if (!baseNewSet) {
        return '';
    }

    const variant = getVariant();
    return variant ? baseNewSet + variant.toUpperCase() : baseNewSet;
};

export const urlLobbyLocal = import.meta.env.VITE_URL_LOBBY ?? window.location.origin;

export const handleBackToLobby = (lobbyUrl?: string) => {
    const changeMainGame = async () => {
        await fetch('/auth/maingame/change?game=');

        const parent = window === window.parent ? window : window.parent;
        if (parent.top?.opener) {
            parent.close();
        } else {
            parent.location.href = lobbyUrl ?? urlLobbyLocal;
        }
    };

    void changeMainGame();
};
