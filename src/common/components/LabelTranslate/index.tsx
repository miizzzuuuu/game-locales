import { TOptions } from 'i18next';
import { useAppTranslate } from '../../../services/i18next/hooks';

interface IProps {
    value: string;
    keyLang?: string;
    option?: TOptions;

    className?: string;
    style?: React.CSSProperties;
}

function LabelTranslate({ keyLang, value, option, className, style }: IProps) {
    const { t } = useAppTranslate(keyLang);

    return (
        <p className={className} style={style}>
            {t(value, option)}
        </p>
    );
}

export default LabelTranslate;
