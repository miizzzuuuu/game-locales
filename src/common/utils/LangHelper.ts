import { ReactElement, SVGProps } from 'react';
import SVGLangCn from '../components/SVG/languages/SVGLangCn';
import SVGLangId from '../components/SVG/languages/SVGLangId';
import SVGLangIn from '../components/SVG/languages/SVGLangIn';
import SVGLangKr from '../components/SVG/languages/SVGLangKr';
import SVGLangTh from '../components/SVG/languages/SVGLangTh';
import SVGLangTr from '../components/SVG/languages/SVGLangTr';
import SVGLangUk from '../components/SVG/languages/SVGLangUk';
import SVGLangVn from '../components/SVG/languages/SVGLangVn';

export type SupportLang = (typeof supportLang)[number];

export const supportLang = ['en', 'hi', 'id', 'vn', 'th', 'tr', 'zh', 'ko'] as const;

const countryLanguageCodes: Record<string, string> = {
    en: 'en-US',
    hi: 'hi-IN',
    id: 'id-ID',
    ko: 'ko-KR',
    th: 'th-TH',
    tr: 'tr-TR',
    vn: 'vn-VN',
    zh: 'zh-CN',
};

export const langMap: Record<string, string> = {
    en: 'en',
    hi: 'hi',
    id: 'id',
    ko: 'ko',
    th: 'th',
    tr: 'tr',
    vn: 'vn',
    zh: 'zh',
};

export const langLogo: Record<string, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
    en: SVGLangUk,
    hi: SVGLangIn,
    id: SVGLangId,
    ko: SVGLangKr,
    th: SVGLangTh,
    tr: SVGLangTr,
    vn: SVGLangVn,
    zh: SVGLangCn,
};

export const langName: Record<string, string> = {
    en: 'English',
    hi: 'हिन्दी',
    id: 'Bahasa Indonesia',
    ko: '한국어',
    th: 'ภาษาไทย',
    tr: 'Türkçe',
    vn: 'Tiếng Việt',
    zh: '中文',
};

export const getLoacale = (lang: string) => {
    return countryLanguageCodes[lang];
};

export const formatedLanguage = (lang: string) => {
    if (lang === '') {
        lang = 'id';
    }

    if (lang === 'cn') {
        lang = 'zh';
    }

    const validLang = langMap[lang.toLowerCase()];

    if ((supportLang as readonly string[]).includes(lang)) {
        return validLang;
    }

    return supportLang[0];
};
