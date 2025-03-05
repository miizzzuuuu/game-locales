import { ReactNode } from 'react';
import styles from './styles.module.scss';

type IProps = {
    children?: ReactNode;
    className?: string;
};

const containsHtml = (str: string): boolean => {
    const htmlRegex = /<[^>]+>/;
    return htmlRegex.test(str);
};

const P = ({ children, className }: IProps) => {
    if (typeof children === 'string' && containsHtml(children)) {
        return (
            <p
                className={`${styles.p}${className ? ` ${className}` : ''}`}
                dangerouslySetInnerHTML={{ __html: children }}
            />
        );
    }

    return <p className={`${styles.p}${className ? ` ${className}` : ''}`}>{children}</p>;
};

export default P;
