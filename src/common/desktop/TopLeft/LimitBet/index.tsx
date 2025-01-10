import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { selectMax50, selectMin } from '../../../../store/slice/gameSlice';
import { selectOpenMenuPayout, toggleMenuPayout } from '../../../../store/slice/menuSlice';
import { selectCurrency, selectShowCurrency } from '../../../../store/slice/playerSlice';
import { SVGIconChevronDown } from '../../../components/SVG/SVGIconChevronDown';
import { formatCurrency, formatNumber } from '../../../utils/StringHelper';
import styles from './styles.module.scss';

const LimitBet = () => {
    const { i18n } = useTranslation();

    const dispatch = useAppDispatch();

    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);
    const openMenuPayout = useAppSelector(selectOpenMenuPayout);

    const handleClick = () => {
        dispatch(toggleMenuPayout());
    };

    return (
        <div className={styles.wrapper} onClick={handleClick}>
            <span className={styles.limit}>
                {formatCurrency(min, currency, i18n.language, !showCurrency)}-
                {formatNumber(max50, i18n.language)}
            </span>

            <div className={`${styles.icon} ${openMenuPayout ? styles.open : styles.close}`}>
                <SVGIconChevronDown style={{ width: '100%' }} />
            </div>
        </div>
    );
};

export default LimitBet;
