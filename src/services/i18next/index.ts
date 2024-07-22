import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../locales/en/common.json';
import idCommon from '../../locales/id/common.json';
import koCommon from '../../locales/ko/common.json';
import thCommon from '../../locales/th/common.json';
import vnCommon from '../../locales/vn/common.json';
import zhCommon from '../../locales/zh/common.json';

// spesific game
import enP6 from '../../locales/en/p6.json';
import idP6 from '../../locales/id/p6.json';
import koP6 from '../../locales/ko/p6.json';
import thP6 from '../../locales/th/p6.json';
import vnP6 from '../../locales/vn/p6.json';
import zhP6 from '../../locales/zh/p6.json';

// spesific game
import enm23 from '../../locales/en/m23.json';
import idm23 from '../../locales/id/m23.json';
import kom23 from '../../locales/ko/m23.json';
import thm23 from '../../locales/th/m23.json';
import vnm23 from '../../locales/vn/m23.json';
import zhm23 from '../../locales/zh/m23.json';

// how to play
import enHTP from '../../locales/en/htp.json';
import idHTP from '../../locales/id/htp.json';
import koHTP from '../../locales/ko/htp.json';
import thHTP from '../../locales/th/htp.json';
import vnHTP from '../../locales/vn/htp.json';
import zhHTP from '../../locales/zh/htp.json';

const resources: Resource = {
    en: {
        translation: { common: enCommon, p6: enP6, m23: enm23, htp: enHTP },
    },
    id: {
        translation: { common: idCommon, p6: idP6, m23: idm23, htp: idHTP },
    },
    ko: {
        translation: { common: koCommon, p6: koP6, m23: kom23, htp: koHTP },
    },
    th: {
        translation: { common: thCommon, p6: thP6, m23: thm23, htp: thHTP },
    },
    vn: {
        translation: { common: vnCommon, p6: vnP6, m23: vnm23, htp: vnHTP },
    },
    zh: {
        translation: { common: zhCommon, p6: zhP6, m23: zhm23, htp: zhHTP },
    },
};

i18next
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'id',
    })
    .then()
    .catch(() => console.log('error init i18n'));

export default i18next;
