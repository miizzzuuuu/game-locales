import { useAppSelector } from '../../../store/hooks';
import { selectTotalBetAdd } from '../../../store/slice/betAddSlice';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../store/slice/gameSlice';
import { selectBalance, selectCurrency, selectNickname } from '../../../store/slice/playerSlice';
import { DisplayHelper } from '../../utils/DisplayHelper';
import { StringHelper } from '../../utils/StringHelper';
import TotalBet from '../TotalBet';
import UserInfo from '../UserInfo';
import styles from './styles.module.scss';

const Footer = () => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const nickname = useAppSelector(selectNickname);
    const balance = useAppSelector(selectBalance);
    const currency = useAppSelector(selectCurrency);

    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);

    return (
        <div className={`${styles.footer}${deviceClassName}`}>
            <UserInfo
                label={nickname}
                value={StringHelper.formatCurrency(balance - totalBetAdd, currency)}
            />
            <UserInfo
                label={`#${period}`}
                labelSecond={gameName}
                value={`${StringHelper.formatCurrency(min, currency)}-${StringHelper.formatNumber(max50)}`}
                isRight
            />

            <TotalBet />
        </div>
    );
};

export default Footer;
