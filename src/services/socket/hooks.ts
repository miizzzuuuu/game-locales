import { useEffect, useState } from 'react';
import { SocketComponent } from '.';
import { LobbyConnect } from '../../types';
import { useAppDispatch } from '../../store/hooks';
import { gameResultAction, loadNewValueAction, scanNumberAction } from '../../store/actions/socketAction';
import { setWinAmount } from '../../store/slice/resultSlice';
import { setTopWinner } from '../../store/slice/topWinnerSlice';
import { setHistory } from '../../store/slice/historySlice';

interface Params {
    nickname: string;
    operatorId: string | number;

    listenerCloseTimerHandler?: () => void;
    // listenerGameResultHandler?: (data: LoadNewValueData) => void;
    // listenerLoadNewValueHandler?: (data: LoadNewValueData) => void;
    // listenerReceiveTotalWinHandler?: (data: RecieveTotalWinData) => void;
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

        SocketComponent.instance.listenScanNumber((data) => {
            dispatch(scanNumberAction(data));
        });

        SocketComponent.instance.listenNewShoe((data) => {
            dispatch(setHistory([]));
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
