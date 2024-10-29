import { getColor } from '../../../utils/_24DHelper';
import styles from './styles.module.scss';

interface IProps {
    data: { angka: string | number };
}

const Item = ({ data }: IProps) => {
    const resultNumber = Number(data.angka);
    const color = getColor(resultNumber);

    return (
        <div className={styles.item}>
            <div className={styles.wrapper}>
                <span className={`${styles.text} ${styles[color]}`}>{resultNumber}</span>
            </div>
        </div>
    );
};

export default Item;
