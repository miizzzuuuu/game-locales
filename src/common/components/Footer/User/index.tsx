import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/hooks';
import { selectTotalBetAdd } from '../../../../store/slice/bets';
import { selectBalance, selectCurrency, selectNickname } from '../../../../store/slice/playerSlice';
import { formatCurrency } from '../../../utils/StringHelper';
import UserInfo from '../../UserInfo';

const User = () => {
    const { i18n } = useTranslation();

    const nickname = useAppSelector(selectNickname);
    const balance = useAppSelector(selectBalance);
    const currency = useAppSelector(selectCurrency);

    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    return (
        <UserInfo
            label={nickname}
            value={formatCurrency(balance - totalBetAdd, currency, i18n.language)}
        />
    );
};

export default User;
