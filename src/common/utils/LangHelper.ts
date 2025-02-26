import { ReactElement, SVGProps } from 'react';
import SVGLangCn from '../components/SVG/languages/SVGLangCn';
import SVGLangId from '../components/SVG/languages/SVGLangId';
import SVGLangIn from '../components/SVG/languages/SVGLangIn';
import SVGLangKr from '../components/SVG/languages/SVGLangKr';
import SVGLangTh from '../components/SVG/languages/SVGLangTh';
import SVGLangTr from '../components/SVG/languages/SVGLangTr';
import SVGLangUk from '../components/SVG/languages/SVGLangUk';
import SVGLangVn from '../components/SVG/languages/SVGLangVn';
import SVGLangBr from '../components/SVG/languages/SVGLangBr';

export type SupportLang = (typeof supportLang)[number];

export const supportLang = ['en', 'hi', 'id', 'vn', 'th', 'tr', 'zh', 'ko', 'pt-br'] as const;

const countryLanguageCodes: Record<string, string> = {
    en: 'en-US',
    hi: 'hi-IN',
    id: 'id-ID',
    ko: 'ko-KR',
    th: 'th-TH',
    tr: 'tr-TR',
    vn: 'vn-VN',
    zh: 'zh-CN',
    'pt-br': 'pt-BR',
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
    'pt-br': 'pt-BR',
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
    'pt-br': SVGLangBr,
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
    'pt-br': 'Português',
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

    if (lang === 'pt') {
        lang = 'pt-BR';
    }

    const validLang = langMap[lang.toLowerCase()];

    if ((supportLang as readonly string[]).includes(lang)) {
        return validLang;
    }

    return supportLang[0];
};
