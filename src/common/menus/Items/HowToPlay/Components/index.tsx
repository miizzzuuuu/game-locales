import { ReactNode } from 'react';
import { TOptions } from 'i18next';
import LabelTranslate from '../../../../components/LabelTranslate';
import styles from './styles.module.scss';

interface IProps {
    keyLang?: string;
    value: string;
    option?: TOptions;
    className?: string;
}

interface ContainerProps {
    children?: ReactNode;
    className?: string;
}

interface UlProps {
    children?: ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`${styles.container}${className ? ` ${className}` : ''}`}>{children}</div>
    );
};

export const Heading2 = ({ keyLang, className, value, option }: IProps) => {
    return (
        <LabelTranslate
            type="h2"
            className={`${styles['heading-2']}${className ? ` ${className}` : ''}`}
            keyLang={keyLang}
            value={value}
            option={option}
        />
    );
};

export const P = ({ keyLang, className, value, option }: IProps) => {
    return (
        <LabelTranslate
            keyLang={keyLang}
            className={`${styles['text-htp']}${className ? ` ${className}` : ''}`}
            value={value}
            option={option}
        />
    );
};

export const Ul = ({ className, children }: UlProps) => {
    return (
        <ul className={`${styles['htp-list']}${className ? `${className}` : ''}`}>{children}</ul>
    );
};
