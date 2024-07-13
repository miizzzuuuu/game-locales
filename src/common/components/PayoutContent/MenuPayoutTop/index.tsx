import { StringHelper } from '../../../../common/utils/StringHelper';
import { useAppSelector } from '../../../../store/hooks';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../../store/slice/gameSlice';
import { selectCurrency } from '../../../../store/slice/playerSlice';
import { selectLanguage } from '../../../../store/slice/settingsSlice';

import './styles.scss';

const MenuPayoutTop = () => {
    const currency = useAppSelector(selectCurrency);
    const lang = useAppSelector(selectLanguage);

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);

    return (
        <div className="menu-payout-top">
            <div className="menu-payout-info">
                <span className="menu-payout-info-left">#{period}</span>
                <span>{gameName}</span>
            </div>

            <span className="menu-payout-top-bottom">
                {StringHelper.formatMoneyWithCurrency(min, currency, lang)} -{' '}
                {StringHelper.formatMoneyOnlyNumber(max50, lang)}
            </span>
        </div>
    );
};

export default MenuPayoutTop;
