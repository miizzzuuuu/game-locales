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

    static formatedDate = (datestring: string, lang: string): string => {
        const locale = LangHelper.getCountryLanguageCodes(lang);

        const date = new Date(datestring);
        return date.toLocaleString(locale);
    };

    static formatDateByLocale(
        dateString: string,
        lang: string,
        weekday: 'long' | 'short' | 'narrow' | undefined,
        month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined = 'long',
    ) {
        const locale = LangHelper.getCountryLanguageCodes(lang);

        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            weekday: weekday,
            year: 'numeric',
            month: month,
            day: 'numeric',
        };

        return new Intl.DateTimeFormat(locale, options).format(date);
    }
}
