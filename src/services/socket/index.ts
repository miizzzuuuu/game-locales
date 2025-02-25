import io from 'socket.io-client';
import { FEATURES } from '../../common/utils/Features';
import {
    // getEventNewSet,
    getGameCode,
    getGameName,
    getPcode,
} from '../../common/utils/GameHelper';
import {
    CameraSequence,
    Cashdrop,
    CloseTimerData,
    GameConnect,
    LoadNewValueData,
    LobbyConnect,
    NewSetData,
    NoGameData,
    RecieveTotalWinData,
    Thunder,
    TopWinnerData,
} from '../../types';

export class SocketComponent {
    static _instance: SocketComponent;

    private _lastGameResultPeriod: number | null = null;
    private _lastLoadNewValuePeriod: number | null = null;

    private _socket!: SocketIOClient.Socket;

    url = import.meta.env.VITE_URL_SOCKET;

    static SOCKET_EVENT = {
        connect: 'connect',
        loadNewValue: 'loadNewValue',
        closeTimer: 'closeTimer',
        gameResult: 'gameResult',
        recieveTotalWin: 'recieve_totalwin',
        thunder: 'thunder',
        playerSession: 'playerSession',
        cameraSequence: 'cameraSequence',
        topWinner: 'topWinner',
        cashdrop: 'cash_drop',
        newSet: 'new_set',
        noGame: 'no_game',
    };

    static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new SocketComponent();
        return this._instance;
    }

    get socket() {
        return this._socket;
    }

    connectSocket(nickname: string, operatorId: number | string): SocketIOClient.Socket {
        const params = this.getDefaultSocketParameters(nickname, operatorId);

        console.log('connect socket to:', this.url);
        this._socket = io(this.url, params);

        return this._socket;
    }

    onConnect(data: LobbyConnect) {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.connect, () => {
                // SocketComponent.instance.emitLobbyConnect(data);
                SocketComponent.instance.emitGameConnect({
                    user: data.user,
                    game: getGameCode(),
                    pcode: getPcode(),
                    newlobby: true,
                });
            });
        }
    }

    emitLobbyConnect(data: LobbyConnect): void {
        if (this._socket) {
            this._socket.emit('lobby_connect', JSON.stringify(data));
        }
    }

    emitGameConnect(data: GameConnect): void {
        if (this._socket) {
            this._socket.emit('gameConnect', JSON.stringify(data));
        }
    }

    emitGameDisconnect(data: LobbyConnect) {
        if (this._socket) {
            const dataSend: GameConnect = {
                user: data.user,
                game: getGameCode(),
                pcode: getPcode(),
            };

            this._socket.emit('gameDisconnect', JSON.stringify(dataSend));
        }
    }

    listenGameResult(callback?: (data: LoadNewValueData) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.gameResult, (data: LoadNewValueData) => {
                this.validationDataWithPcode(data, () => {
                    if (this._lastGameResultPeriod === data.periode) {
                        return;
                    }

                    this._lastGameResultPeriod = data.periode;
                    callback?.(data);
                });
            });
        }
    }

    listenLoadNewValue(callback: (data: LoadNewValueData) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.loadNewValue, (data: LoadNewValueData) => {
                // console.log('socket loadNewValue:', data);

                this.validationDataWithPcode(data, () => {
                    if (this._lastLoadNewValuePeriod === data.periode || !data.timer) {
                        return;
                    }

                    this._lastLoadNewValuePeriod = data.periode;
                    callback(data);
                });
            });
        }
    }

    listenCloseTimer(callback: (data: CloseTimerData) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.closeTimer, (data: CloseTimerData) => {
                // console.log('socket closeTimer:', data);

                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    listenRecieveTotalWin(callback: (data: RecieveTotalWinData) => void): void {
        if (this._socket) {
            this._socket.on(
                SocketComponent.SOCKET_EVENT.recieveTotalWin,
                (data: RecieveTotalWinData) => {
                    // console.log('socket receive total win:', data);

                    this.validationDataWithGameCode(data, () => callback(data));
                },
            );
        }
    }

    listenCameraSequence(callback: (data: CameraSequence) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.cameraSequence, (data: CameraSequence) => {
                // console.log('socket cameraSequence:', data);

                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    listenTopWinner(callback: (data: TopWinnerData) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.topWinner, (data: TopWinnerData) => {
                // console.log('socket topWinner:', data);

                this.validationDataWithPcodeAndGameCode(data, () => callback(data));
            });
        }
    }

    listenThunder(callback: (data: Thunder<string>) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.thunder, (data: Thunder<string>) => {
                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    listenNewSet(callback: (data: NewSetData) => void): void {
        if (!FEATURES.SHUFFLE_THE_CARDS) {
            return;
        }

        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.newSet, (data: NewSetData) => {
                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    // listenNewSet(callback: (data: NewSetData) => void): void {
    //     if (!Features.SHUFFLE_THE_CARDS) {
    //         return;
    //     }

    //     const eventName = getEventNewSet();
    //     console.log('event new set', eventName);

    //     if (!eventName) {
    //         return;
    //     }

    //     if (this._socket) {
    //         this._socket.on(eventName, (data: NewSetData) => {
    //             this.validationDataWithPcode(data, () => callback(data));
    //         });
    //     }
    // }

    listenNoGame(callback: (data: NoGameData) => void): void {
        if (!FEATURES.SHUFFLE_THE_CARDS) {
            return;
        }

        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.noGame, (data: NoGameData) => {
                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    listenCashdrop(callback: (data: Cashdrop) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.cashdrop, (data: Cashdrop) => {
                callback(data);
            });
        }
    }

    validationDataWithPcode<T extends { pcode: string }>(data: T, callback?: () => void) {
        if (data.pcode === getPcode()) {
            callback?.();
        }
    }

    validationDataWithGameCode<T extends { game: string }>(data: T, callback?: () => void) {
        if (data.game === getGameCode()) {
            callback?.();
        }
    }

    validationDataWithPcodeAndGameCode<T extends { pcode: string }>(
        data: T,
        callback?: () => void,
    ) {
        if (data.pcode === getPcode() || data.pcode === getGameCode()) {
            callback?.();
        }
    }

    getDefaultSocketParameters = (nickname: string, operatorId: number | string) => {
        return {
            //rememberTransport: false,
            transports: ['websocket'],
            upgrade: false,
            query: `user=${nickname}&agent=${operatorId}&game=${getGameName()}`,
        };
    };

    offEvent(eventName: string) {
        if (this._socket) {
            this._socket.off(eventName);
        }
    }

    close(): void {
        if (this._socket) {
            const allEvent = Object.values(SocketComponent.SOCKET_EVENT);
            allEvent.forEach((eventName) => {
                this._socket.off(eventName);
            });

            // const eventNewSet = getEventNewSet();
            // if (eventNewSet) {
            //     this._socket.off(eventNewSet);
            // }

            this._socket.disconnect();
        }
    }
}
