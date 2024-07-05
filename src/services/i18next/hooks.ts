import { TOptions } from 'i18next';
import { useTranslation } from 'react-i18next';

export const useAppTranslate = (prefix?: string) => {
    const { t: translate } = useTranslation();

    const t = (key: string, option?: TOptions): string => {
        if (!prefix) {
            return translate(`common.${key}`);
        }

        return translate(`${prefix}.${key}`, option);
    };

    return { t };
};
