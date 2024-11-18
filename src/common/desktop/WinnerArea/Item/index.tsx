import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { formatNumber } from '../../../utils/StringHelper';

interface IProps {
    name: string;
    value: number;
}

const Item = ({ name, value }: IProps) => {
    const { i18n } = useTranslation();

    return (
        <div className={styles.item}>
            <span>{name}</span>
            <span className={styles.value}>{formatNumber(value, i18n.language)}</span>
        </div>
    );
};

export default Item;
