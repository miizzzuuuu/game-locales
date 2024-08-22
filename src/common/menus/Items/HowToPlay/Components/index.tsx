import { ReactNode } from 'react';
import LabelTranslate from '../../../../components/LabelTranslate';
import styles from './styles.module.scss';

interface IProps {
    keyLang?: string;
    value: string;
    className?: string;
}

interface UlProps {
    children?: ReactNode;
    className?: string;
}

export const Heading2 = ({ keyLang, className, value }: IProps) => {
    return (
        <LabelTranslate
            type="h2"
            className={`${styles['heading-2']}${className ? ` ${className}` : ''}`}
            keyLang={keyLang}
            value={value}
        />
    );
};

export const P = ({ keyLang, className, value }: IProps) => {
    return (
        <LabelTranslate
            keyLang={keyLang}
            className={`${styles['text-htp']}${className ? ` ${className}` : ''}`}
            value={value}
        />
    );
};

export const Ul = ({ className, children }: UlProps) => {
    return (
        <ul className={`${styles['htp-list']}${className ? `${className}` : ''}`}>{children}</ul>
    );
};
