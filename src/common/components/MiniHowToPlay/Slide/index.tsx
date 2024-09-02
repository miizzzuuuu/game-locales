import { ReactNode } from 'react';
import styles from './styles.module.scss';
import { DisplayHelper } from '../../../utils/DisplayHelper';

interface IProps {
    title: string;
    graphic: ReactNode;
    content: ReactNode;
}

const Slide = ({ title, graphic, content }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    return (
        <>
            <div className={`${styles.slide} ${styles.title} ${deviceClassName}`}>
                <h1>{title}</h1>
            </div>

            <div className={`${styles.slide} ${styles.graphic} ${deviceClassName}`}>{graphic}</div>

            <div className={`${styles.slide} ${styles.content} mini-htp-slider`}>{content}</div>
        </>
    );
};

export default Slide;
