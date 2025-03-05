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
import enM23 from '../../locales/en/m23.json';
import hiM23 from '../../locales/hi/m23.json';
import idM23 from '../../locales/id/m23.json';
import koM23 from '../../locales/ko/m23.json';
import ptBRM23 from '../../locales/pt-BR/m23.json';
import thM23 from '../../locales/th/m23.json';
import trM23 from '../../locales/tr/m23.json';
import vnM23 from '../../locales/vn/m23.json';
import zhM23 from '../../locales/zh/m23.json';

// mini how to play
import enQuickHTP from '../../locales/en/quick-htp.json';
import hiQuickHTP from '../../locales/hi/quick-htp.json';
import idQuickHTP from '../../locales/id/quick-htp.json';
import koQuickHTP from '../../locales/ko/quick-htp.json';
import ptBRQuickHTP from '../../locales/pt-BR/quick-htp.json';
import thQuickHTP from '../../locales/th/quick-htp.json';
import trQuickHTP from '../../locales/tr/quick-htp.json';
import vnQuickHTP from '../../locales/vn/quick-htp.json';
import zhQuickHTP from '../../locales/zh/quick-htp.json';

const resources: Resource = {
    en: {
        common: enCommon,
        game: {
            m23: enM23,
            'quick-htp': enQuickHTP,
        },
    },
    hi: {
        common: hiCommon,
        game: {
            m23: hiM23,
            'quick-htp': hiQuickHTP,
        },
    },
    id: {
        common: idCommon,
        game: {
            m23: idM23,
            'quick-htp': idQuickHTP,
        },
    },
    ko: {
        common: koCommon,
        game: {
            m23: koM23,
            'quick-htp': koQuickHTP,
        },
    },
    'pt-BR': {
        common: ptBRCommon,
        game: {
            m23: ptBRM23,
            'quick-htp': ptBRQuickHTP,
        },
    },
    th: {
        common: thCommon,
        game: {
            m23: thM23,
            'quick-htp': thQuickHTP,
        },
    },
    tr: {
        common: trCommon,
        game: {
            m23: trM23,
            'quick-htp': trQuickHTP,
        },
    },
    vn: {
        common: vnCommon,
        game: {
            m23: vnM23,
            'quick-htp': vnQuickHTP,
        },
    },
    zh: {
        common: zhCommon,
        game: {
            m23: zhM23,
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
