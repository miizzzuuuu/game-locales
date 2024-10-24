import { SVGProps } from 'react';

import SVGLangUk from '../components/SVG/languages/SVGLangUk';
import SVGLangId from '../components/SVG/languages/SVGLangId';
import SVGLangCn from '../components/SVG/languages/SVGLangCn';
import SVGLangVn from '../components/SVG/languages/SVGLangVn';
import SVGLangTh from '../components/SVG/languages/SVGLangTh';
import SVGLangKr from '../components/SVG/languages/SVGLangKr';

export type SupportLang = (typeof supportLang)[number];

const supportLang = ['en', 'id', 'vn', 'th', 'zh', 'ko'] as const;

const countryLanguageCodes: Record<string, string> = {
    en: 'en-US',
    id: 'id-ID',
    vn: 'vn-VN',
    th: 'th-TH',
    zh: 'zh-CN',
    ko: 'ko-KR',
};

export const langMap: Record<string, string> = {
    en: 'en',
    id: 'id',
    vn: 'vn',
    th: 'th',
    zh: 'zh',
    ko: 'ko',
};

export const langLogo: Record<string, (props: SVGProps<SVGSVGElement>) => JSX.Element> = {
    zh: SVGLangCn,
    en: SVGLangUk,
    id: SVGLangId,
    th: SVGLangTh,
    vn: SVGLangVn,
    ko: SVGLangKr,
};

export const langName: Record<string, string> = {
    zh: '中文',
    en: 'English',
    id: 'Bahasa Indonesia',
    th: 'ภาษาไทย',
    vn: 'Tiếng Việt',
    ko: '한국어',
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
