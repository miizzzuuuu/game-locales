import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../locales/en/common.json';
import hiCommon from '../../locales/hi/common.json';
import idCommon from '../../locales/id/common.json';
import koCommon from '../../locales/ko/common.json';
import ptBRCommon from '../../locales/pt-BR/common.json';
import thCommon from '../../locales/th/common.json';
import trCommon from '../../locales/tr/common.json';
import vnCommon from '../../locales/vn/common.json';
import zhCommon from '../../locales/zh/common.json';

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
import enQuickHTP from '../../locales/en/quick-htp.json';
import hiQuickHTP from '../../locales/hi/quick-htp.json';
import idQuickHTP from '../../locales/id/quick-htp.json';
import koQuickHTP from '../../locales/ko/quick-htp.json';
import thQuickHTP from '../../locales/th/quick-htp.json';
import trQuickHTP from '../../locales/tr/quick-htp.json';
import vnQuickHTP from '../../locales/vn/quick-htp.json';
import zhQuickHTP from '../../locales/zh/quick-htp.json';

const resources: Resource = {
    en: {
        common: enCommon,
        game: {
            p6: enP6,
            htp: enHTP,
            'quick-htp': enQuickHTP,
        },
    },
    hi: {
        common: hiCommon,
        game: {
            'quick-htp': hiQuickHTP,
        },
    },
    id: {
        common: idCommon,
        game: {
            p6: idP6,
            htp: idHTP,
            'quick-htp': idQuickHTP,
        },
    },
    ko: {
        common: koCommon,
        game: {
            p6: koP6,
            htp: koHTP,
            'quick-htp': koQuickHTP,
        },
    },
    'pt-BR': {
        common: ptBRCommon,
        game: {},
    },
    th: {
        common: thCommon,
        game: {
            p6: thP6,
            htp: thHTP,
            'quick-htp': thQuickHTP,
        },
    },
    tr: {
        common: trCommon,
        game: {
            'quick-htp': trQuickHTP,
        },
    },
    vn: {
        common: vnCommon,
        game: {
            p6: vnP6,
            htp: vnHTP,
            'quick-htp': vnQuickHTP,
        },
    },
    zh: {
        common: zhCommon,
        game: {
            p6: zhP6,
            htp: zhHTP,
            'quick-htp': zhQuickHTP,
        },
    },
};

i18next
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        ns: ['common', 'game'],
        defaultNS: 'common',
        fallbackNS: 'common',
        resources,
    })
    .then()
    .catch(() => console.log('error init i18n'));

export default i18next;
