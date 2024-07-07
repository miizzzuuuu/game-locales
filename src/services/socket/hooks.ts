import { useEffect, useState } from 'react';
import { SocketComponent } from '.';
import { LoadNewValueData, LobbyConnect, RecieveTotalWinData } from '../../types';

interface Params {
    nickname: string;
    operatorId: string | number;

    listenerGameResultHandler?: (data: LoadNewValueData) => void;
    listenerLoadNewValueHandler?: (data: LoadNewValueData) => void;
    listenerCloseTimerHandler?: () => void;
    listenerReceiveTotalWinHandler?: (data: RecieveTotalWinData) => void;
}

export const useSocket = ({
    nickname,
    operatorId,
    listenerGameResultHandler,
    listenerLoadNewValueHandler,
    listenerCloseTimerHandler,
    listenerReceiveTotalWinHandler,
}: Params) => {
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

        return () => {
            SocketComponent.instance.emitGameDisconnect(dataLobbyConnect);
            SocketComponent.instance.close();
        };
    }, [nickname, operatorId]);

    useEffect(() => {
        if (socket) {
            SocketComponent.instance.listenGameResult((data) => {
                listenerGameResultHandler?.(data);
            });
        }

        return () => {
            SocketComponent.instance.offEvent('gameResult');
        };
    }, [socket, listenerGameResultHandler]);

    useEffect(() => {
        if (socket) {
            SocketComponent.instance.listenLoadNewValue((data) => {
                listenerLoadNewValueHandler?.(data);
            });
        }

        return () => {
            SocketComponent.instance.offEvent('loadNewValue');
        };
    }, [socket, listenerLoadNewValueHandler]);

    useEffect(() => {
        if (socket) {
            SocketComponent.instance.listenRecieveTotalWin((data) => {
                listenerReceiveTotalWinHandler?.(data);
            });
        }

        return () => {
            SocketComponent.instance.offEvent('recieve_totalwin');
        };
    }, [socket, listenerReceiveTotalWinHandler]);

    useEffect(() => {
        SocketComponent.instance.listenCloseTimer(() => listenerCloseTimerHandler?.());

        return () => {
            SocketComponent.instance.offEvent('closeTimer');
        };
    }, [socket, listenerCloseTimerHandler]);

    return socket;
};
