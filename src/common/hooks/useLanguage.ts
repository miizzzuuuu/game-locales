import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { selectLanguage } from '../../store/slice/settingsSlice';
import { useAppSelector } from '../../store/hooks';

export const useLanguage = () => {
    const lang = useAppSelector(selectLanguage);

    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);
};
