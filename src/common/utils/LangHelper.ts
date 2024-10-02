import { SVGProps } from 'react';

import SVGLangUk from '../components/SVG/languages/SVGLangUk';
import SVGLangId from '../components/SVG/languages/SVGLangId';
import SVGLangCn from '../components/SVG/languages/SVGLangCn';
import SVGLangVn from '../components/SVG/languages/SVGLangVn';
import SVGLangTh from '../components/SVG/languages/SVGLangTh';
import SVGLangKr from '../components/SVG/languages/SVGLangKr';

export type SupportLang = (typeof LangHelper.supportLang)[number];

export class LangHelper {
    private static _activeLang = 'en';

    static get activeLang() {
        return this._activeLang;
    }

    static set activeLang(lang: string) {
        this._activeLang = this.formatedLanguage(lang);
    }

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

    static getLoacale() {
        return this.countryLanguageCodes[this.activeLang];
    }

    static langMap: Record<string, string> = {
        en: 'en',
        id: 'id',
        vn: 'vn',
        th: 'th',
        zh: 'zh',
        ko: 'ko',
    };

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
}
