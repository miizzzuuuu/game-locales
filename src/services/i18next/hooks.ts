import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';

export const useAppTranslate = (prefix?: string) => {
    const { t: translate } = useTranslation();

    const t = (key: string, option?: TOptions): string => {
        if (prefix === undefined) {
            return translate(`common.${key}`, option);
        }

        if (prefix === '') {
            return translate(`${key}`, option);
        }

        return translate(`${prefix}.${key}`, option);
    };

    return { t };
};
