import { useAppTranslate } from '../../../services/i18next/hooks';

interface IProps {
    key: string;
    keyLang?: string;
}

function LabelTranslate({ keyLang = 'common', key: value }: IProps) {
    const { t } = useAppTranslate(keyLang);

    return t(value);
}

export default LabelTranslate;
