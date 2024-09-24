import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    title: string;
    graphic: ReactNode;
    content: ReactNode;
}

const Slide = ({ title, graphic, content }: IProps) => {
    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <div className={`${styles.title}`}>
                    <h1>{title}</h1>
                </div>

                <div className={`${styles.graphic}`}>{graphic}</div>

                <div className={`${styles.content}`}>{content}</div>
            </div>
        </div>
    );
};

export default Slide;
