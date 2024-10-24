import { useTranslation } from 'react-i18next';
import { formatNumber } from '../../../utils/StringHelper';
import SVGWinner from '../SVG/SVGWinner';

import styles from './styles.module.scss';

interface IProps {
    isFirst?: boolean;
    name: string;
    value: number;
}

const ItemWinner = ({ isFirst, name, value }: IProps) => {
    const { i18n } = useTranslation();

    return (
        <div className={styles.item}>
            {isFirst && <SVGWinner style={{ width: '1.2rem', height: '1.2rem' }} />}

            <span className={styles.label}>{name}</span>
            <span className={styles.value}>{formatNumber(value, i18n.language)}</span>
        </div>
    );
};

export default ItemWinner;
