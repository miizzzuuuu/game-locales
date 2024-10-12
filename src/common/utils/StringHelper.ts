import { getLoacale } from './LangHelper';

export class StringHelper {
    static formatCurrency(number: number, currency: string, lang: string): string {
        const locale = getLoacale(lang);

        let result = number.toLocaleString(locale, {
            style: 'currency',
            currency: currency,
        });

        if (currency === 'IDR') {
            result = result.replace(/(\.|,)00$/g, '');
        }

        return result;
    }

    static formatNumber(number: number, lang: string): string {
        const locale = getLoacale(lang);

        return new Intl.NumberFormat(locale).format(number);
    }

    static formatedDate = (datestring: string, lang: string): string => {
        const locale = getLoacale(lang);

        const date = new Date(datestring);
        return date.toLocaleString(locale, { hour12: false });
    };

    static formatDateByLocale(
        dateString: string,
        weekday: 'long' | 'short' | 'narrow' | undefined = 'long',
        month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined = 'long',
        lang: string,
    ) {
        const locale = getLoacale(lang);

        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            weekday: weekday,
            year: 'numeric',
            month: month,
            day: 'numeric',
            hour12: false,
        };

        return new Intl.DateTimeFormat(locale, options).format(date);
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
