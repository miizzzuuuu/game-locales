import { TOptions } from 'i18next';
import { useAppTranslate } from '../../../services/i18next/hooks';
import { createElement, ComponentType } from 'react';

interface IProps {
    type?: string | ComponentType<any>;
    value: string;
    keyLang?: string;
    option?: TOptions;
    className?: string;
    style?: React.CSSProperties;
}

function LabelTranslate({ type = 'p', keyLang, value, option, className, style }: IProps) {
    const { t } = useAppTranslate(keyLang);

    const props = { className, style };

    if (typeof type === 'string') {
        return createElement(type, props, t(value, option));
    }

    return createElement(type, { ...props }, t(value, option));
}

export default LabelTranslate;
