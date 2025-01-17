import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/hooks';
import { selectTotalBetAdd } from '../../../../store/slice/bets';
import {
    selectBalance,
    selectCurrency,
    selectNickname,
    selectShowCurrency,
} from '../../../../store/slice/playerSlice';
import { formatCurrency } from '../../../utils/StringHelper';
import Info from '../Info';

const UserInfo = () => {
    const { i18n } = useTranslation();

    const nickname = useAppSelector(selectNickname);
    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);
    const balance = useAppSelector(selectBalance);
    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    return (
        <Info
            topValue={nickname}
            bottomValue={formatCurrency(
                balance - totalBetAdd,
                currency,
                i18n.language,
                !showCurrency,
            )}
        />
    );
};

export default UserInfo;
