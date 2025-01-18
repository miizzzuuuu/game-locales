import { useEffect, useState } from 'react';
import { SocketComponent } from '.';
import { sendMessageToParent } from '../../common/utils/FunctionHelper';
import {
    gameResultAction,
    loadNewValueAction,
    noGameAction,
} from '../../store/actions/socketAction';
import { useAppDispatch } from '../../store/hooks';
import { setNewSet } from '../../store/slice/gameSlice';
import { setWinAmount } from '../../store/slice/resultSlice';
import { setTopWinner } from '../../store/slice/topWinnerSlice';
import { LobbyConnect, NewSetData } from '../../types';

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

        SocketComponent.instance.listenNewSet((data) => {
            const { status } = data;

            dispatch(setNewSet(status));
        });

        SocketComponent.instance.listenNoGame(() => {
            dispatch(noGameAction());
        });

        SocketComponent.instance.listenCashdrop((data) => {
            sendMessageToParent({
                source: 'LIVE_GAME',
                type: 'GET_CASHDROP',
                payload: data,
            });
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
