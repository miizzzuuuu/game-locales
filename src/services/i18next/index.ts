import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../locales/en/common.json';
import hiCommon from '../../locales/hi/common.json';
import idCommon from '../../locales/id/common.json';
import koCommon from '../../locales/ko/common.json';
import thCommon from '../../locales/th/common.json';
import trCommon from '../../locales/tr/common.json';
import vnCommon from '../../locales/vn/common.json';
import zhCommon from '../../locales/zh/common.json';

import enFeatures from '../../locales/en/features.json';
import idFeatures from '../../locales/id/features.json';
import koFeatures from '../../locales/ko/features.json';
import thFeatures from '../../locales/th/features.json';
import vnFeatures from '../../locales/vn/features.json';
import zhFeatures from '../../locales/zh/features.json';

// spesific game
import enP6 from '../../locales/en/p6.json';
import idP6 from '../../locales/id/p6.json';
import koP6 from '../../locales/ko/p6.json';
import thP6 from '../../locales/th/p6.json';
import vnP6 from '../../locales/vn/p6.json';
import zhP6 from '../../locales/zh/p6.json';

// how to play
import enHTP from '../../locales/en/htp.json';
import idHTP from '../../locales/id/htp.json';
import koHTP from '../../locales/ko/htp.json';
import thHTP from '../../locales/th/htp.json';
import vnHTP from '../../locales/vn/htp.json';
import zhHTP from '../../locales/zh/htp.json';

// mini how to play
import enMiniHTP from '../../locales/en/mini-htp.json';
import idMiniHTP from '../../locales/id/mini-htp.json';
import koMiniHTP from '../../locales/ko/mini-htp.json';
import thMiniHTP from '../../locales/th/mini-htp.json';
import vnMiniHTP from '../../locales/vn/mini-htp.json';
import zhMiniHTP from '../../locales/zh/mini-htp.json';

const resources: Resource = {
    en: {
        translation: {
            common: { ...enCommon, ...enFeatures },
            p6: enP6,
            htp: enHTP,
            miniHtp: enMiniHTP,
        },
    },
    hi: {
        translation: {
            common: { ...hiCommon },
        },
    },
    id: {
        translation: {
            common: { ...idCommon, ...idFeatures },
            p6: idP6,
            htp: idHTP,
            miniHtp: idMiniHTP,
        },
    },
    ko: {
        translation: {
            common: { ...koCommon, ...koFeatures },
            p6: koP6,
            htp: koHTP,
            miniHtp: koMiniHTP,
        },
    },
    th: {
        translation: {
            common: { ...thCommon, ...thFeatures },
            p6: thP6,
            htp: thHTP,
            miniHtp: thMiniHTP,
        },
    },
    tr: {
        translation: {
            common: { ...trCommon },
        },
    },
    vn: {
        translation: {
            common: { ...vnCommon, ...vnFeatures },
            p6: vnP6,
            htp: vnHTP,
            miniHtp: vnMiniHTP,
        },
    },
    zh: {
        translation: {
            common: { ...zhCommon, ...zhFeatures },
            p6: zhP6,
            htp: zhHTP,
            miniHtp: zhMiniHTP,
        },
    },
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
    })
    .then()
    .catch(() => console.log('error init i18n'));

export default i18next;
