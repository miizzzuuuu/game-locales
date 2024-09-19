import { useAppTranslate } from '../../services/i18next/hooks';
import { Sound } from '../../services/sound';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { placeSingleBet, selectBetAdd, selectTotalBetAdd } from '../../store/slice/bets';
import { selectActiveChip } from '../../store/slice/chipSlice';
import { selectMax, selectMax50, selectMin, selectMin50 } from '../../store/slice/gameSlice';
import { setMessage } from '../../store/slice/gameStateSlice';
import { selectBalance } from '../../store/slice/playerSlice';
import { BetHelper } from '../utils/BetHelper';
import { GameHelper } from '../utils/GameHelper';

interface Params {
    useLowerCase?: boolean | undefined;
    betIsOpen: boolean;
}

function usePlaceBet({ useLowerCase = false, betIsOpen }: Params) {
    const dispatch = useAppDispatch();

    const { t } = useAppTranslate('');

    const activeChip = useAppSelector(selectActiveChip);

    const balance = useAppSelector(selectBalance);
    const totalBetAdd = useAppSelector(selectTotalBetAdd);

    const minBet = useAppSelector(selectMin);
    const maxBet = useAppSelector(selectMax);
    const min50Bet = useAppSelector(selectMin50);
    const max50Bet = useAppSelector(selectMax50);

    const betAdd = useAppSelector(selectBetAdd);

    const placeBetHandler = (button: string, group: string) => {
        if (activeChip === 0 || !betIsOpen) return;

        const isGroup50 = BetHelper.game?.GroupBet50.includes(group);

        if (isGroup50) {
            const oppositeBetKey = BetHelper.game?.oppositeBet50[button];

            if (oppositeBetKey && betAdd[oppositeBetKey] > 0) {
                const opposite = oppositeBetKey.split('-')[0];

                const buttonOpposite = t(
                    `${GameHelper.getBasePcode()}.${useLowerCase ? opposite.toLowerCase() : opposite}`,
                );
                const buttonName = t(
                    `${GameHelper.getBasePcode()}.${useLowerCase ? button.toLowerCase() : button}`,
                );

                const message = t('common.bet-error-n50', {
                    button: buttonOpposite,
                    other: buttonName,
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

        const chipAfterBet = (betAdd[`${button}-${group}`] ?? 0) + activeChip;
        const min = isGroup50 ? min50Bet : minBet;
        if (chipAfterBet < min) {
            const buttonName = isGroup50
                ? t(`${GameHelper.getBasePcode()}.${useLowerCase ? button.toLowerCase() : button}`)
                : button;
            const message = t('common.bet-error-min', {
                button: buttonName,
                value: min,
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
            const buttonName = isGroup50
                ? t(`${GameHelper.getBasePcode()}.${useLowerCase ? button.toLowerCase() : button}`)
                : button;
            const message = t('common.bet-error-max', {
                button: buttonName,
                value: max,
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
        placeBetHandler,
    };
}

export { usePlaceBet };
