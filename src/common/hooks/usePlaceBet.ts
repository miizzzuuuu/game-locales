import { useAppTranslate } from '../../services/i18next/hooks';
import { Sound } from '../../services/sound';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    placeSingleBet,
    selectEntitiesBetAdd,
    selectIdsBetAdd,
    selectTotalBetAdd,
} from '../../store/slice/betAddSlice';
import { selectActiveChip } from '../../store/slice/chipSlice';
import { selectMax, selectMax50, selectMin, selectMin50 } from '../../store/slice/gameSlice';
import { setMessage } from '../../store/slice/gameStateSlice';
import { selectBalance } from '../../store/slice/playerSlice';
import { selectLanguage } from '../../store/slice/settingsSlice';

import { selectBetIsOpen } from '../../store/slice/timerSlice';
import { Bet } from '../../types';
import { BetHelper } from '../utils/BetHelper';
import { GameHelper } from '../utils/GameHelper';
import { StringHelper } from '../utils/StringHelper';

export const usePlaceBet = () => {
    const dispatch = useAppDispatch();

    const { t } = useAppTranslate('');

    const activeChip = useAppSelector(selectActiveChip);

    const lang = useAppSelector(selectLanguage);

    const betIsOpen = useAppSelector(selectBetIsOpen);
    const balance = useAppSelector(selectBalance);
    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    const idsBetAdd = useAppSelector(selectIdsBetAdd);
    const entitiesBetAdd = useAppSelector(selectEntitiesBetAdd);

    const minBet = useAppSelector(selectMin);
    const maxBet = useAppSelector(selectMax);
    const min50Bet = useAppSelector(selectMin50);
    const max50Bet = useAppSelector(selectMax50);

    const basePcode = GameHelper.getBasePcode();

    const getChip = (bet: Bet) => {
        const { button, group } = bet;
        const keyBet = `${button}-${group}`;

        const chipPlace = entitiesBetAdd[keyBet]?.value ?? 0;

        return chipPlace;
    };

    const placeBetHandler = (bet: Bet) => {
        console.log('place bet');

        if (activeChip === 0 || !betIsOpen) return;

        const { group, button } = bet;

        const isGroup50 = BetHelper.game?.GroupBet50.includes(group);

        if (isGroup50) {
            const oppositeBetKey = BetHelper.game?.oppositeBet50[button];

            if (oppositeBetKey && idsBetAdd.includes(oppositeBetKey)) {
                const buttonName = t(`${basePcode}.${oppositeBetKey.split('-')[0]}`);
                const message = t('common.bet-error-n50', { button: buttonName, other: button });

                console.log('bet error', message);
                dispatch(
                    setMessage({
                        value: message,
                        type: 'danger',
                    }),
                );

                return;
            }
        }

        const curBalance = balance - totalBetAdd;

        // cek balance
        if (curBalance - activeChip < 0) {
            const message = t('common.insuffix-balance');

            console.log('bet error', message);
            dispatch(
                setMessage({
                    value: message,
                    type: 'danger',
                }),
            );

            return;
        }

        const chipAfterBet = getChip(bet) + activeChip;
        const min = isGroup50 ? min50Bet : minBet;
        if (chipAfterBet < min) {
            const buttonName = isGroup50 ? t(`${basePcode}.${button}`) : button;
            const message = t('common.bet-error-min', {
                button: buttonName,
                value: StringHelper.formatMoneyOnlyNumber(min, lang),
            });

            console.log('bet error', message);
            dispatch(
                setMessage({
                    value: message,
                    type: 'danger',
                }),
            );

            return;
        }

        const max = isGroup50 ? max50Bet : maxBet;
        if (chipAfterBet > max) {
            const buttonName = isGroup50 ? t(`${basePcode}.${button}`) : button;
            const message = t('common.bet-error-max', {
                button: buttonName,
                value: StringHelper.formatMoneyOnlyNumber(max, lang),
            });

            console.log('bet error', message);
            dispatch(
                setMessage({
                    value: message,
                    type: 'danger',
                }),
            );

            return;
        }

        dispatch(placeSingleBet({ button, group, value: activeChip }));

        Sound.playPlaceBet();
    };

    return {
        placeBetHanlder: placeBetHandler,
    };
};
