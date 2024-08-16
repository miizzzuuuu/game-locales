import { useEffect, useState } from 'react';
import { SocketComponent } from '.';
import { LobbyConnect, NewSetData } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { gameResultAction, loadNewValueAction } from '../../store/actions/socketAction';
import { setWinAmount } from '../../store/slice/resultSlice';
import { setTopWinner } from '../../store/slice/topWinnerSlice';

interface Params {
    nickname: string;
    operatorId: string | number;

    listenerCloseTimerHandler?: () => void;
    listenerGameResultHandler?: (data: NewSetData) => void;
}

export const useSocket = ({ nickname, operatorId, listenerCloseTimerHandler }: Params) => {
    const dispatch = useAppDispatch();
    const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

    useEffect(() => {
        const s = SocketComponent.instance.connectSocket(nickname, operatorId);
        setSocket(s);

        const dataLobbyConnect: LobbyConnect = {
            user: {
                nickname,
                operatorId,
            },
        };

        SocketComponent.instance.onConnect(dataLobbyConnect);

        SocketComponent.instance.listenGameResult((data) => {
            dispatch(gameResultAction(data));
        });

        SocketComponent.instance.listenLoadNewValue((data) => {
            dispatch(loadNewValueAction(data));
        });

        SocketComponent.instance.listenRecieveTotalWin((data) => {
            const { winamount } = data;
            dispatch(setWinAmount(winamount));
        });

        SocketComponent.instance.listenTopWinner((data) => {
            dispatch(setTopWinner(data));
        });

        return () => {
            SocketComponent.instance.emitGameDisconnect(dataLobbyConnect);
            SocketComponent.instance.close();
        };
    }, [dispatch, nickname, operatorId]);

    useEffect(() => {
        SocketComponent.instance.listenCloseTimer(() => listenerCloseTimerHandler?.());

        return () => {
            SocketComponent.instance.offEvent('closeTimer');
        };
    }, [socket, listenerCloseTimerHandler]);

    return socket;
};
