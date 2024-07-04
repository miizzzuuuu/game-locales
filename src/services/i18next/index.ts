import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../locales/en/common.json';
import idCommon from '../../locales/id/common.json';
import koCommon from '../../locales/ko/common.json';
import thCommon from '../../locales/th/common.json';
import vnCommon from '../../locales/vn/common.json';
import zhCommon from '../../locales/zh/common.json';

const resources: Resource = {
    en: {
        translation: { common: enCommon },
    },
    id: {
        translation: { common: idCommon },
    },
    ko: {
        translation: { common: koCommon },
    },
    th: {
        translation: { common: thCommon },
    },
    vn: {
        translation: { common: vnCommon },
    },
    zh: {
        translation: { common: zhCommon },
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
