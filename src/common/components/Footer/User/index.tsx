import { useAppSelector } from '../../../../store/hooks';
import { selectTotalBetAdd } from '../../../../store/slice/bets';
import { selectBalance, selectCurrency, selectNickname } from '../../../../store/slice/playerSlice';
import { StringHelper } from '../../../utils/StringHelper';
import UserInfo from '../../UserInfo';

const User = () => {
    const nickname = useAppSelector(selectNickname);
    const balance = useAppSelector(selectBalance);
    const currency = useAppSelector(selectCurrency);

    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    return (
        <UserInfo
            label={nickname}
            value={StringHelper.formatCurrency(balance - totalBetAdd, currency)}
        />
    );
};

export default User;
