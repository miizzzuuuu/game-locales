import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from '../../locales/en/common.json';
import idCommon from '../../locales/id/common.json';
import koCommon from '../../locales/ko/common.json';
import thCommon from '../../locales/th/common.json';
import vnCommon from '../../locales/vn/common.json';
import zhCommon from '../../locales/zh/common.json';

import en24D from '../../locales/en/p6.json';
import id24D from '../../locales/id/p6.json';
import ko24D from '../../locales/ko/p6.json';
import th24D from '../../locales/th/p6.json';
import vn24D from '../../locales/vn/p6.json';
import zh24D from '../../locales/zh/p6.json';

const resources: Resource = {
    en: {
        translation: { common: enCommon, g24d: en24D },
    },
    id: {
        translation: { common: idCommon, g24d: id24D },
    },
    ko: {
        translation: { common: koCommon, g24d: ko24D },
    },
    th: {
        translation: { common: thCommon, g24d: th24D },
    },
    vn: {
        translation: { common: vnCommon, g24d: vn24D },
    },
    zh: {
        translation: { common: zhCommon, g24d: zh24D },
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
