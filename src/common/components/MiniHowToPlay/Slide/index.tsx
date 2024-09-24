import styles from './styles.module.scss';
import { ModalItem } from '../Modal';

export interface GraphicComponentProps {
    isActive: boolean;
}

interface IProps extends ModalItem {
    index: number;
}

const Slide = ({ title, graphic, content, index }: IProps) => {
    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <div className={`${styles.title}`}>
                    <h1>{title}</h1>
                </div>

                <div className={`${styles.graphic}`}>{graphic(index)}</div>

                <div className={`${styles.content}`}>{content}</div>
            </div>
        </div>
    );
};

export default Slide;
