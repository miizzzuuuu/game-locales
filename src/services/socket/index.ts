import io from 'socket.io-client';
import {
    CameraSequence,
    CloseTimerData,
    GameConnect,
    LoadNewValueData,
    LobbyConnect,
    NewSetData,
    RecieveTotalWinData,
    ScanNumberData,
    Thunder,
    TopWinnerData,
} from '../../types';
import { GameHelper } from '../../common/utils/GameHelper';
import { StringUtility } from '../../game/components/External/managers/StringUtility';

export class SocketComponent {
    static _instance: SocketComponent;

    private _lastGameResultPeriod: number | null = null;
    private _lastLoadNewValuePeriod: number | null = null;

    private _socket!: SocketIOClient.Socket;

    url = import.meta.env.VITE_URL_SOCKET;

    static scanNumber = 'scan';

    static SOCKET_EVENT = {
        connect: 'connect',
        loadNewValue: 'loadNewValue',
        newDragonTigerShoe: 'dragonTigerNewSet',
        closeTimer: 'closeTimer',
        gameResult: 'gameResult',
        recieveTotalWin: 'recieve_totalwin',
        thunder: 'thunder',
        playerSession: 'playerSession',
        cameraSequence: 'cameraSequence',
        topWinner: 'topWinner',
        cashdrop: 'cash_drop',
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
                SocketComponent.instance.emitLobbyConnect(data);
                SocketComponent.instance.emitGameConnect({
                    user: data.user,
                    game: GameHelper.getGameCode(),
                    pcode: GameHelper.pcode,
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
                game: GameHelper.getGameCode(),
                pcode: GameHelper.pcode,
            };

            this._socket.emit('gameDisconnect', JSON.stringify(dataSend));
        }
    }

    listenGameResult(callback?: (data: LoadNewValueData) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.gameResult, (data: LoadNewValueData) => {
                // console.log('socket gameResult:', data);

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
                    if (this._lastLoadNewValuePeriod === data.periode) {
                        return;
                    }

                    // this._lastLoadNewValuePeriod = data.periode;
                    this._lastLoadNewValuePeriod = Number(data.shoePeriode?.split('-')[1]) - 1;

                    callback(data);
                });
            });
        }
    }

    listenNewShoe(callback: (data: LoadNewValueData) => void): void {
        if (this._socket) {
            const variantUpper = Number.isNaN(GameHelper.pcode[GameHelper.pcode.length - 1])
                ? GameHelper.pcode[GameHelper.pcode.length - 1].toUpperCase()
                : '';
            this._socket.on(
                SocketComponent.SOCKET_EVENT.newDragonTigerShoe.concat(variantUpper),
                (data: LoadNewValueData) => {
                    // console.log('socket loadNewValue:', data);

                    this.validationDataWithPcode(data, () => {
                        if (this._lastLoadNewValuePeriod === data.periode) {
                            return;
                        }

                        callback(data);
                    });
                },
            );
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

    listenScanNumber(callback: (data: ScanNumberData) => void): void {
        if (this._socket) {
            const eventName = SocketComponent.scanNumber.concat(
                StringUtility.convertGameCodeToGameName(GameHelper.pcode),
            );

            this._socket.on(eventName, (data: ScanNumberData) => {
                console.log('socket scanNumber:', data);
                if (data && data.pcode === GameHelper.pcode) {
                    callback(data);
                }
            });
            console.log(eventName);
        }
    }

    listenThunder(callback: (data: Thunder) => void): void {
        if (this._socket) {
            this._socket.on(SocketComponent.SOCKET_EVENT.thunder, (data: Thunder) => {
                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    listenNewSet(callback: (data: NewSetData) => void): void {
        const eventName = GameHelper.getEventNewSet();
        console.log('event new set', eventName);

        if (!eventName) {
            return;
        }

        if (this._socket) {
            this._socket.on(eventName, (data: NewSetData) => {
                this.validationDataWithPcode(data, () => callback(data));
            });
        }
    }

    validationDataWithPcode<T extends { pcode: string }>(data: T, callback?: () => void) {
        if (data.pcode === GameHelper.pcode) {
            callback?.();
        }
    }

    validationDataWithGameCode<T extends { game: string }>(data: T, callback?: () => void) {
        if (data.game === GameHelper.getGameCode()) {
            callback?.();
        }
    }

    validationDataWithPcodeAndGameCode<T extends { pcode: string }>(
        data: T,
        callback?: () => void,
    ) {
        if (data.pcode === GameHelper.pcode || data.pcode === GameHelper.getGameCode()) {
            callback?.();
        }
    }

    getDefaultSocketParameters = (nickname: string, operatorId: number | string) => {
        return {
            //rememberTransport: false,
            transports: ['websocket'],
            upgrade: false,
            query: `user=${nickname}&agent=${operatorId}&game=${GameHelper.getGameName()}`,
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

            const eventNewSet = GameHelper.getEventNewSet();
            if (eventNewSet) {
                this._socket.off(eventNewSet);
            }

            const eventScan = SocketComponent.scanNumber.concat(
                StringUtility.convertGameCodeToGameName(GameHelper.pcode),
            );
            if (eventScan) {
                this._socket.off(eventScan);
            }

            this._socket.disconnect();
        }
    }
}
