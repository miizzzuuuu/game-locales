import { CSSProperties, ReactNode } from 'react';
import styles from './styles.module.scss';

type IProps = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
};

const containsHtml = (str: string): boolean => {
    const htmlRegex = /<[^>]+>/;
    return htmlRegex.test(str);
};

const P = ({ children, className, style }: IProps) => {
    if (typeof children === 'string' && containsHtml(children)) {
        return (
            <p
                className={`${styles.p}${className ? ` ${className}` : ''}`}
                style={style}
                dangerouslySetInnerHTML={{ __html: children }}
            />
        );
    }

    return (
        <p className={`${styles.p}${className ? ` ${className}` : ''}`} style={style}>
            {children}
        </p>
    );
};

export default P;
