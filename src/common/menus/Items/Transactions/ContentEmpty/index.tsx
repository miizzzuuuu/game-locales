import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    message?: ReactNode | undefined;
}

const ContentEmpty = ({ message }: IProps) => {
    return (
        <div className={styles['content-empty']}>
            {message && <div className={styles.message}>{message}</div>}
        </div>
    );
};

export default ContentEmpty;
