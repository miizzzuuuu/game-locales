import { LangHelper } from './LangHelper';

export class StringHelper {
    static formatMoneyWithCurrency(number: number, currency: string, lang: string): string {
        const code = LangHelper.getCountryLanguageCodes(lang);

        let result = number.toLocaleString(code, {
            style: 'currency',
            currency: currency,
        });

        if (currency === 'IDR') {
            result = result.replace(/(\.|,)00$/g, '');
        }

        return result;
    }

    static formatMoneyOnlyNumber(number: number, lang: string): string {
        const code = LangHelper.countryLanguageCodes[lang];
        return new Intl.NumberFormat(code).format(number);
    }

    static formatChipText(value: number): string {
        if (value >= 1000000000) {
            return (value / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (value >= 1000000) {
            return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (value >= 1000) {
            return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }

        return String(value);
    }
}
