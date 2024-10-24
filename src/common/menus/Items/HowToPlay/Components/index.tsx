import { CSSProperties, HTMLProps, ReactNode } from 'react';
import { TOptions } from 'i18next';
import LabelTranslate from '../../../../components/LabelTranslate';
import styles from './styles.module.scss';

interface IProps {
    keyLang?: string;
    value: string;
    option?: TOptions;
    className?: string;
    style?: CSSProperties;
    multiLine?: boolean;
    dangerouslySetInnerHTML?: boolean;
}

interface ContainerProps {
    children?: ReactNode;
    className?: string;
}

interface HeadingProps extends IProps {
    uppercase?: boolean;
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

export const Heading2 = ({
    keyLang,
    className,
    style,
    value,
    option,
    multiLine,
    uppercase,
}: HeadingProps) => {
    return (
        <LabelTranslate
            type="h2"
            className={`${styles['heading-2']}${className ? ` ${className}` : ''}`}
            style={{ ...style, textTransform: uppercase ? 'uppercase' : 'none' }}
            keyLang={keyLang}
            value={value}
            option={option}
            multiLine={multiLine}
        />
    );
};

export const Heading3 = ({ keyLang, className, value, option, multiLine }: HeadingProps) => {
    return (
        <LabelTranslate
            type="h2"
            className={`${styles['heading-3']}${className ? ` ${className}` : ''}`}
            keyLang={keyLang}
            value={value}
            option={option}
            multiLine={multiLine}
        />
    );
};

export const P = ({
    keyLang,
    className,
    value,
    option,
    multiLine,
    dangerouslySetInnerHTML,
}: IProps) => {
    return (
        <LabelTranslate
            keyLang={keyLang}
            className={`${styles['text-htp']}${className ? ` ${className}` : ''}`}
            value={value}
            option={option}
            multiLine={multiLine}
            dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        />
    );
};

export const Ul = ({ className, children }: UlProps) => {
    return (
        <ul className={`${styles['htp-list']}${className ? `${className}` : ''}`}>{children}</ul>
    );
};

export const Table = ({ children, className }: HTMLProps<HTMLTableElement>) => {
    return (
        <table className={`${styles.table}${className ? ` ${className}` : ''}`}>{children}</table>
    );
};

export const THead = ({ children, className }: HTMLProps<HTMLElement>) => {
    return (
        <thead className={`${styles.thead}${className ? ` ${className}` : ''}`}>{children}</thead>
    );
};

export const TR = ({ children, className }: HTMLProps<HTMLElement>) => {
    return <tr className={`${styles.tr}${className ? ` ${className}` : ''}`}>{children}</tr>;
};

export const TH = ({ children, className }: HTMLProps<HTMLElement>) => {
    return <th className={`${styles.th}${className ? ` ${className}` : ''}`}>{children}</th>;
};

export const TD = ({ children, className }: HTMLProps<HTMLElement>) => {
    return <td className={`${styles.td}${className ? ` ${className}` : ''}`}>{children}</td>;
};
