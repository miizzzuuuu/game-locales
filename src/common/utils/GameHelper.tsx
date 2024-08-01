export class GameHelper {
    static OFFSET_TIME = 4;

    private static _pcode = '';

    static set pcode(value: string) {
        this._pcode = value;
    }

    static get pcode(): string {
        return this._pcode;
    }

    static GAME_CODE: Record<string, string> = {
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

    static GAME_NAME: Record<string, string> = {
        p7: 'roulette',
        p7b: 'rouletteb',
        p7c: 'roulettec',
        p7d: 'rouletted',
        p7e: 'roulettee',
        p7f: 'roulettef',
    };

    static GAME_DISPLAY_NAME: Record<string, string> = {
        m6: '24D Spin',
        m7: 'Oglok',
        m8: 'Dice 6',
        m8b: 'Dice 6 Fever',
        m10: 'Head Tail',
        m11: 'Red White',
        m13: 'Billiards',
        m14: 'Poker Dice',
        m16: 'Gong Ball',
        m19: 'Suwit',
        m20: 'Monopoly',
        m21: 'Monopoly World Cup',
        m22: 'Baccarat',
        m22b: 'Baccarat B',
        m22c: 'Baccarat C',
        m22d: 'Europe Baccarat 1',
        m23: 'Dragon Tiger',
        m23b: 'Dragon Tiger Wild',
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
        m36: '36D',
        m37: 'Bingo Sicbo',
        m38: 'Bingo Baccarat',
        m38b: 'Bingo Baccarat 2',
        m39: 'Duel Dice',
        m40: 'Xoc Dia',
        m41: 'Domino',
        m42: 'Grandprix Number',
        m43: '6D Color',
        p6: '24D',
        p6b: '24D Jackpot',
        p7: 'Roulette',
        p7b: 'Roulette - Fast Table',
        p7c: 'Bingo Roulette',
        p7d: 'Europe Roulette',
        p7e: 'Soccer Roulette',
        p7f: 'Bounce Roulette',
        p9: '12D',
        p9b: '12D Thunder',
        p12: 'Sicbo[Dice]',
    };

    static getBasePcode() {
        const mixedPcode = this.pcode;

        if (!mixedPcode || !mixedPcode.trim()) throw new Error('mixedPcode is empty!');

        return mixedPcode.replace(/\D+$/, '');
    }

    static getGameCode(): string {
        const pcode = this.pcode;

        const basePcode = this.getBasePcode();
        const lastLetter = !isNaN(+pcode[pcode.length - 1]) ? '' : pcode[pcode.length - 1];

        return basePcode in this.GAME_CODE
            ? this.GAME_CODE[basePcode] + lastLetter.toUpperCase()
            : 'unknown game: pcode ' + pcode;
    }

    static getGameName() {
        return this.GAME_NAME[this._pcode];
    }

    static getGameDisplayName(pcode: string) {
        if (!(pcode in this.GAME_DISPLAY_NAME)) {
            return pcode;
        }

        const name = this.GAME_DISPLAY_NAME[pcode];
        return name;
    }

    static normalizeTime(time: number) {
        let result = time - this.OFFSET_TIME;

        if (result < 0) {
            result = 0;
        }

        return result;
    }
}
