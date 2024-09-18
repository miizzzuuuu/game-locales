import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { LoadingHelper } from '../utils/LoadingHelper';
import { getGameData } from '../../services/api/gameData';
import { setGame } from '../../store/slice/gameSlice';
import { fetchResultHistory } from '../../game/hooks/useFetchResults';
import { fetchLastbets } from '../../services/api/lastbets';
import { setLastBetData } from '../../store/slice/lastBetsSlice';
import { addBetSend } from '../../store/slice/bets';

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

                    await fetchResultHistory(dispatch);
                    await fetchLastbets((lastbet) => {
                        if (lastbet.periode === data.periode) {
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

                            return;
                        }

                        dispatch(setLastBetData(lastbet));
                    });

                    setFinish(true);
                    LoadingHelper.update(10, 'Load settings completed');
                }
            } catch (error) {
                APIManager.handleErrorApi(error);
            }
        };

        fetchPlayerSettings();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export { useFetchGame };
