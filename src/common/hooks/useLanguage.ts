import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { selectLanguage } from '../../store/slice/settingsSlice';
import { useAppSelector } from '../../store/hooks';

function useLanguage() {
    const lang = useAppSelector(selectLanguage);

    const { i18n } = useTranslation();

    useEffect(() => {
        void i18n.changeLanguage(lang);
    }, [lang]);
}

export { useLanguage };
