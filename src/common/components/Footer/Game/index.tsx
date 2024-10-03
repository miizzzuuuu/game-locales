import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../store/hooks';
import {
    selectGameName,
    selectMax50,
    selectMin,
    selectPeriod,
} from '../../../../store/slice/gameSlice';
import { selectCurrency } from '../../../../store/slice/playerSlice';
import { StringHelper } from '../../../utils/StringHelper';
import UserInfo from '../../UserInfo';

const Game = () => {
    const { i18n } = useTranslation();

    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);

    return (
        <UserInfo
            label={`#${period}`}
            labelSecond={gameName}
            value={`${StringHelper.formatCurrency(min, currency, i18n.language)}-${StringHelper.formatNumber(max50, i18n.language)}`}
            isRight
        />
    );
};

export default Game;
