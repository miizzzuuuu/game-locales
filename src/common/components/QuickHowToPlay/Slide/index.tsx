import styles from './styles.module.scss';
import { ModalItem } from '../ModalQuickHTP';

interface IProps extends ModalItem {
    index: number;
}

const Slide = ({ title, graphic, content, index }: IProps) => {
    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <div className={`${styles.title}`}>{title}</div>

                <div className={`${styles.graphic}`}>{graphic(index)}</div>

                <div className={`${styles.content}`}>{content}</div>
            </div>
        </div>
    );
};

export default Slide;
