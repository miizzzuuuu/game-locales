import { useAppSelector } from '../../store/hooks';
import { selectEntitiesBetAdd } from '../../store/slice/betAddSlice';
import { selectEntitiesBetSend } from '../../store/slice/betSendSlice';
import { selectChipBase } from '../../store/slice/chipSlice';
import { Bet } from '../../types';
import { ChipHelper } from '../utils/ChipHelper';

export const useChipBet = (bet: Bet) => {
    const { button, group } = bet;
    const keyBet = `${button}-${group}`;

    const entitiesBetAdd = useAppSelector(selectEntitiesBetAdd);
    const entitiesBetSend = useAppSelector(selectEntitiesBetSend);

    const chipBase = useAppSelector(selectChipBase);

    const chipPlace = entitiesBetAdd[keyBet]?.value ?? 0;
    const chipSend = entitiesBetSend[keyBet]?.value ?? 0;

    const chip = chipPlace + chipSend;

    return {
        chip,
        color: ChipHelper.getChipColorByAmount(chip, chipBase),
    };
};
