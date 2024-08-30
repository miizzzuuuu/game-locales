import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import APIManager from '../utils/APIManager';
import { getPlayerData } from '../../services/api/playerData';
import { LoadingHelper } from '../utils/LoadingHelper';
import { setPlayerData } from '../../store/slice/playerSlice';
import { setChipBase } from '../../store/slice/chipSlice';
import { getMiniHowToPlay } from '../../services/api/miniHowToPlay';
import { setShowMiniHowToPlay } from '../../store/slice/gameStateSlice';
import { GameHelper } from '../utils/GameHelper';

export function useFetchPlayer() {
    const dispatch = useAppDispatch();
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        let ignore = false;

        const fetchPlayerData = async () => {
            try {
                LoadingHelper.update(0, 'Load player data');
                const data = await getPlayerData();

                if (!ignore) {
                    dispatch(setPlayerData(data));
                    dispatch(setChipBase(data.chipBase));

                    // fetch mini how to play
                    const dataMiniHTP = await getMiniHowToPlay();
                    const showMiniHowToPlayLS = GameHelper.getMiniHowToPlayLocalStorage();

                    console.log('showMiniHowToPlayLS', showMiniHowToPlayLS);

                    dispatch(setShowMiniHowToPlay(dataMiniHTP.show && showMiniHowToPlayLS));

                    setFinish(true);
                    LoadingHelper.update(10, 'Load player data completed');
                }
            } catch (error) {
                APIManager.handleErrorApi(error);
            }
        };

        fetchPlayerData();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}
