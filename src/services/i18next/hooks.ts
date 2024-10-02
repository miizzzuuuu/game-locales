import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';

export const useAppTranslate = (prefix?: string) => {
    const { t: translate } = useTranslation();

    const t = <T = string>(key: string, options?: TOptions, returnObjects?: boolean): T => {
        const mergedOptions: TOptions = { ...options, returnObjects };

        if (prefix === undefined) {
            return translate(`common.${key}`, mergedOptions) as T;
        }

        if (prefix === '') {
            return translate(key, mergedOptions) as T;
        }

        return translate(`${prefix}.${key}`, mergedOptions) as T;
    };

    return { t };
};
