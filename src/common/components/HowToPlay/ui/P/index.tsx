import { ReactNode } from 'react';
import styles from './styles.module.scss';

type IProps = {
    children: ReactNode;
};

const containsHtml = (str: string): boolean => {
    const htmlRegex = /<[^>]+>/;
    return htmlRegex.test(str);
};

const P = ({ children }: IProps) => {
    if (typeof children === 'string' && containsHtml(children)) {
        return <p className={styles.p} dangerouslySetInnerHTML={{ __html: children }} />;
    }

    return <p className={styles.p}>{children}</p>;
};

export default P;
