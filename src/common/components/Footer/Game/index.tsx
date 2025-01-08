import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/hooks';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../../store/slice/gameSlice';
import { selectCurrency, selectShowCurrency } from '../../../../store/slice/playerSlice';
import { formatCurrency, formatNumber } from '../../../utils/StringHelper';
import UserInfo from '../../UserInfo';

const Game = () => {
    const { i18n } = useTranslation();

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);
    const showCurrency = useAppSelector(selectShowCurrency);

    return (
        <UserInfo
            label={`#${period}`}
            labelSecond={gameName}
            value={`${formatCurrency(min, currency, i18n.language, !showCurrency)}-${formatNumber(max50, i18n.language)}`}
            isRight
        />
    );
};

export default Game;
