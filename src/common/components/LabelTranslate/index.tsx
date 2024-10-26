import { Fragment } from 'react';
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
    multiLine?: boolean;
    dangerouslySetInnerHTML?: boolean;
}

function LabelTranslate({
    type = 'p',
    keyLang,
    value,
    option,
    className,
    style,
    multiLine,
    dangerouslySetInnerHTML = false,
}: IProps) {
    const { t } = useAppTranslate(keyLang);

    const props = {
        className,
        style,
        ...(dangerouslySetInnerHTML
            ? { dangerouslySetInnerHTML: { __html: t(value, option) } }
            : {}),
    };

    const childrens = multiLine
        ? t(value, option)
              .split('\n')
              .map((line: string, index: number) => (
                  <Fragment key={index}>
                      {line}
                      <br />
                  </Fragment>
              ))
        : [t(value, option)];

    if (dangerouslySetInnerHTML) {
        if (typeof type === 'string') {
            return createElement(type, props);
        }

        return createElement(type, { ...props });
    }

    if (typeof type === 'string') {
        return createElement(type, props, ...childrens);
    }

    return createElement(type, { ...props }, ...childrens);
}

export default LabelTranslate;
