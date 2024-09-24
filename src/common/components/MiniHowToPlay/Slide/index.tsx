import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IProps {
    title: string;
    graphic: ReactNode;
    content: ReactNode;
}

const Slide = ({ title, graphic, content }: IProps) => {
    return (
        <>
            <div className={`${styles.slide} ${styles.title}`}>
                <h1>{title}</h1>
            </div>

            <div className={`${styles.slide} ${styles.graphic}`}>{graphic}</div>

            <div className={`${styles.slide} ${styles.content} mini-htp-slider`}>{content}</div>
        </>
    );
};

export default Slide;
