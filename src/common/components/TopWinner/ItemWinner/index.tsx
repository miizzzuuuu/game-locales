import { useAppSelector } from '../../../../store/hooks';
import { selectLanguage } from '../../../../store/slice/settingsSlice';
import { StringHelper } from '../../../utils/StringHelper';
import SVGWinner from '../SVG/SVGWinner';

import styles from './styles.module.scss';

interface IProps {
    isFirst?: boolean;
    name: string;
    value: number;
}

const ItemWinner = ({ isFirst, name, value }: IProps) => {
    const lang = useAppSelector(selectLanguage);

    return (
        <div className={styles.item}>
            {isFirst && <SVGWinner style={{ width: '1.2rem', height: '1.2rem' }} />}

            <span className={styles.label}>{name}</span>
            <span className={styles.value}>{StringHelper.formatMoneyOnlyNumber(value, lang)}</span>
        </div>
    );
};

export default ItemWinner;
