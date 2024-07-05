import { useAppSelector } from '../../../store/hooks';
import { selectTotalBetAdd } from '../../../store/slice/betAddSlice';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../store/slice/gameSlice';
import { selectBalance, selectCurrency, selectNickname } from '../../../store/slice/playerSlice';
import { selectLanguage } from '../../../store/slice/settingsSlice';
import { StringHelper } from '../../utils/StringHelper';
import TotalBet from '../TotalBet';
import UserInfo from '../UserInfo';
import styles from './styles.module.scss';

const Footer = () => {
    const nickname = useAppSelector(selectNickname);
    const balance = useAppSelector(selectBalance);
    const currency = useAppSelector(selectCurrency);

    const lang = useAppSelector(selectLanguage);

    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);

    return (
        <div className={styles.footer}>
            <UserInfo
                label={nickname}
                value={StringHelper.formatMoneyWithCurrency(balance - totalBetAdd, currency, lang)}
            />
            <UserInfo
                label={`#${period}`}
                labelSecond={gameName}
                value={`${StringHelper.formatMoneyWithCurrency(min, currency, lang)}-${StringHelper.formatMoneyOnlyNumber(max50, lang)}`}
                isRight
            />

            <TotalBet />
        </div>
    );
};

export default Footer;
