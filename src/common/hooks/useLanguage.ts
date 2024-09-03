import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { selectLanguage } from '../../store/slice/settingsSlice';
import { useAppSelector } from '../../store/hooks';
import { LangHelper } from '../utils/LangHelper';

function useLanguage() {
    const lang = useAppSelector(selectLanguage);

    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
        LangHelper.activeLang = lang;
    }, [lang]);
}

export { useLanguage };
