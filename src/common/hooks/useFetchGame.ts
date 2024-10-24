import { useEffect, useState } from 'react';
import { fetchResultHistory } from '../../game/services/resultHistory';
import { getGameData } from '../../services/api/gameData';
import { fetchLastbets } from '../../services/api/lastbets';
import { useAppDispatch } from '../../store/hooks';
import { addBetSend } from '../../store/slice/bets';
import { setGame } from '../../store/slice/gameSlice';
import { setLastBetData } from '../../store/slice/lastBetsSlice';
import { handleErrorApi } from '../utils/APIManager';
import { LoadingHelper } from '../utils/LoadingHelper';

function useFetchGame() {
    const dispatch = useAppDispatch();

    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerSettings = async () => {
            try {
                LoadingHelper.update(0, 'Load settings');
                const data = await getGameData();

                if (!ignore) {
                    dispatch(setGame(data));

                    await Promise.all([
                        fetchResultHistory(dispatch),
                        fetchLastbets((lastbet) => {
                            if (lastbet.periode !== data.periode) {
                                console.log('current bet');

                                dispatch(setLastBetData(lastbet));
                                return;
                            }

                            console.log('current bet');

                            let totalBet = 0;
                            for (const i of lastbet.data) {
                                totalBet += i.value;
                            }

                            dispatch(
                                addBetSend({
                                    bet: lastbet.data,
                                    total_bet: totalBet,
                                    periode: lastbet.periode,
                                }),
                            );
                        }),
                    ]);

                    setFinish(true);
                    LoadingHelper.update(10, 'Load game completed');
                }
            } catch (error) {
                handleErrorApi(error);
            }
        };

        void fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export { useFetchGame };
