import { SVGProps } from 'react';

import SVGLangUk from '../components/SVG/languages/SVGLangUk';
import SVGLangId from '../components/SVG/languages/SVGLangId';
import SVGLangCn from '../components/SVG/languages/SVGLangCn';
import SVGLangVn from '../components/SVG/languages/SVGLangVn';
import SVGLangTh from '../components/SVG/languages/SVGLangTh';
import SVGLangKr from '../components/SVG/languages/SVGLangKr';

export type SupportLang = (typeof LangHelper.supportLang)[number];

export class LangHelper {
    static readonly supportLang = ['en', 'id', 'vn', 'th', 'zh', 'ko'] as const;

    static logo: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
        zh: SVGLangCn,
        en: SVGLangUk,
        id: SVGLangId,
        th: SVGLangTh,
        vn: SVGLangVn,
        ko: SVGLangKr,
    };

    static langName: Record<string, string> = {
        zh: '中文',
        en: 'English',
        id: 'Bahasa Indonesia',
        th: 'ภาษาไทย',
        vn: 'Tiếng Việt',
        ko: '한국어',
    };

    static countryLanguageCodes: Record<string, string> = {
        en: 'en-US',
        id: 'id-ID',
        vn: 'vn-VN',
        th: 'th-TH',
        zh: 'zh-CN',
        ko: 'ko-KR',
    };

    static langMap: Record<string, string> = {
        en: 'en',
        id: 'id',
        vn: 'vn',
        th: 'th',
        zh: 'zh',
        ko: 'ko',
    };

    static getCountryLanguageCodes(lang: string) {
        lang = this.formatedLanguage(lang);

        return this.countryLanguageCodes[lang];
    }

    static formatedLanguage = (lang: string) => {
        if (lang === '') {
            lang = 'id';
        }

        if (lang === 'cn') {
            lang = 'zh';
        }

        const validLang = this.langMap[lang.toLowerCase()];

        if ((this.supportLang as readonly string[]).includes(lang)) {
            return validLang;
        }

        return this.supportLang[0];
    };

    static formatedDate = (datestring: string, lang: string): string => {
        lang = this.formatedLanguage(lang);

        const locale = this.countryLanguageCodes[lang];

        const date = new Date(datestring);
        return date.toLocaleString(locale);
    };

    static formatDateByLocale(
        dateString: string,
        lang: string,
        weekday: 'long' | 'short' | 'narrow' | undefined = 'long',
        month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined = 'long',
    ) {
        const locale = this.countryLanguageCodes[lang];

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
