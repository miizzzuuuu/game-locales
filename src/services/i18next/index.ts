import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .use(HttpBackend)
    .init({
        debug: true,
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        fallbackNS: 'common',
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        // resources,
    })
    .then()
    .catch(() => console.log('error init i18n'));

export default i18next;
