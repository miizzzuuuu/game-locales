import { useCallback } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectEntitiesBetAdd } from '../../store/slice/betAddSlice';
import { selectEntitiesBetSend } from '../../store/slice/betSendSlice';
import { Bet } from '../../types';

function useGetChips() {
    const entitiesBetAdd = useAppSelector(selectEntitiesBetAdd);
    const entitiesBetSend = useAppSelector(selectEntitiesBetSend);

    const chipBet = useCallback(
        (bet: Bet) => {
            const key = `${bet.button}-${bet.group}`;

            const betAdd = entitiesBetAdd[key];
            if (betAdd) {
                return betAdd.value;
            }

            return 0;
        },
        [entitiesBetAdd],
    );

    const chipBetSend = useCallback(
        (bet: Bet) => {
            const key = `${bet.button}-${bet.group}`;

            const betSend = entitiesBetSend[key];
            if (betSend) {
                return betSend.value;
            }

            return 0;
        },
        [entitiesBetSend],
    );

    return {
        chipBet,
        chipBetSend,
    };
}

export { useGetChips };
