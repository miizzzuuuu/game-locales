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
    const gameName = useAppSelector(selectGameName);
    const period = useAppSelector(selectPeriod);
    const min = useAppSelector(selectMin);
    const max50 = useAppSelector(selectMax50);
    const currency = useAppSelector(selectCurrency);

    return (
        <UserInfo
            label={`#${period}`}
            labelSecond={gameName}
            value={`${StringHelper.formatCurrency(min, currency)}-${StringHelper.formatNumber(max50)}`}
            isRight
        />
    );
};

export default Game;
