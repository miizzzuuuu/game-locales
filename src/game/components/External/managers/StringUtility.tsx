export class StringUtility {
    public static formatNumber(num: number, locale: string = 'en-US'): string {
        return num.toLocaleString(locale);
    }

    public static formatNumberCurrency(
        num: number,
        currency: string,
        locale: string = 'en-US',
    ): string {
        return `${currency} ${num.toLocaleString(locale)}`;
    }

    public static formatStringToArray(input: string): string[] {
        if (input == undefined) return [];
        if (input == '') return [];

        return input.split('-').map((item) => (item === 'x' ? '' : item));
    }

    public static splitCharStringToArray(input: string): string[] {
        if (input == undefined) return [];
        if (input == '') return [];

        return input.split('');
    }

    public static numToString(input: number): string {
        if (input >= 1_000_000) {
            const result = input / 1_000_000;
            return Number.isInteger(result) ? `${result}M` : `${result.toFixed(1)}M`;
        } else if (input >= 1_000) {
            const result = input / 1_000;
            return Number.isInteger(result) ? `${result}k` : `${result.toFixed(1)}k`;
        } else {
            return input.toString();
        }
    }

    public static stringToDateTime(input: string): string {
        const dateObject = new Date(input);
        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString();
        const day = dateObject.getDate().toString();
        const hours = dateObject.getHours().toString();
        const minutes = dateObject.getMinutes().toString();
        const seconds = dateObject.getSeconds().toString();

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    public static getCurrentDateFormatted(): string {
        const today = new Date();
        const year = today.getFullYear();
        const month = (today.getMonth() + 1).toString().padStart(2, '0');
        const day = today.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    public static getDetailBetTitle(input: string): string {
        if (input == 'bankerpair') return 'Banker Pair';
        else if (input == 'playerpair') return 'Player Pair';
        else if (input == 'player') return 'Player';
        else if (input == 'banker') return 'Banker';
        else if (input == 'tie') {
            return 'Tie';
        } else return input;
    }

    public static getHistoryDateTitle(dateString: string) {
        const dateObject = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        };
        // return dateObject.toLocaleDateString("en-GB", options); //english
        return dateObject.toLocaleDateString('id-ID', options);
    }

    public static convertGameCodeToGameName(input: string): string {
        const fixedPart = import.meta.env.VITE_GAME_NAME;
        if (input.length === 3) {
            return fixedPart;
        }
        const lastChar = input.charAt(input.length - 1).toUpperCase();
        return fixedPart + lastChar;
    }

    public static generateGUID(): string {
        function s4(): string {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    }
}
