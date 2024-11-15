import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectMax50, selectMin } from '../../../../store/slice/gameSlice';
import { selectCurrency } from '../../../../store/slice/playerSlice';
import { toggleMenuPayout } from '../../../../store/slice/menuSlice';
import { formatCurrency, formatNumber } from '../../../utils/StringHelper';
import { SVGIconChevronDown } from '../../../components/SVG/SVGIconChevronDown';

const LimitBet = () => {
    const { i18n } = useTranslation();

    const dispatch = useAppDispatch();

    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);

    const handleClick = () => {
        dispatch(toggleMenuPayout());
    };

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <span className={styles.limit}>
                {formatCurrency(min, currency, i18n.language)}-{formatNumber(max50, i18n.language)}
            </span>

            <SVGIconChevronDown className={styles.icon} />
        </div>
    );
};

export default LimitBet;
