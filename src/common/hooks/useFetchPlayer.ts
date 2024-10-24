import { useEffect, useState } from 'react';
import { getMiniHowToPlay } from '../../services/api/miniHowToPlay';
import { getPlayerData } from '../../services/api/playerData';
import { useAppDispatch } from '../../store/hooks';
import { setChipBase } from '../../store/slice/chipSlice';
import { setShowMiniHowToPlay } from '../../store/slice/gameStateSlice';
import { setPlayerData } from '../../store/slice/playerSlice';
import { handleErrorApi } from '../utils/APIManager';
import { getMiniHowToPlayLocalStorage } from '../utils/GameHelper';
import { LoadingHelper } from '../utils/LoadingHelper';

function useFetchPlayer() {
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
                    const showMiniHowToPlayLS = getMiniHowToPlayLocalStorage();

                    console.log('showMiniHowToPlayLS', showMiniHowToPlayLS);

                    dispatch(setShowMiniHowToPlay(dataMiniHTP.show && showMiniHowToPlayLS));

                    setFinish(true);
                    LoadingHelper.update(10, 'Load player data completed');
                }
            } catch (error) {
                handleErrorApi(error);
            }
        };

        void fetchPlayerData();

        return () => {
            ignore = true;
        };
    }, [dispatch]);

    return { finish };
}

export { useFetchPlayer };
