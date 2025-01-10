import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/hooks';
import { selectTotalBet } from '../../../../store/slice/bets';
import { selectCurrency, selectShowCurrency } from '../../../../store/slice/playerSlice';
import { formatCurrency } from '../../../utils/StringHelper';
import Info from '../Info';

const TotalBet = () => {
    const { i18n, t } = useTranslation();

    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);
    const totaBet = useAppSelector(selectTotalBet);

    return (
        <Info
            topValue={t('common.total-bet')}
            bottomValue={formatCurrency(totaBet, currency, i18n.language, !showCurrency)}
            isTotalBet
        />
    );
};

export default TotalBet;
