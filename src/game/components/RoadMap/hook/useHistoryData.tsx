import { useEffect, useState } from 'react';
import { GameData } from '../../../../../utils/GameData';

export type ActiveStatistic = 'mini' | 'roadmap' | 'result';

export const useHistoryData
 = () => {
    const [data, setData] =
        useState<any[]>([]);

    const reload = async ()=>{
        const history = (await (await (fetch(`https://dev.menangtoto.pw/games/list-game/${GameData.getGameName()}/1`))).json());
        setData(history.history);
    }
    useEffect( () => {
        reload();
    }, []);

    console.log(data);

    return {
        data,
        setData,
        reload,

    };
};
