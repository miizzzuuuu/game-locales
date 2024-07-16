import { useEffect, useState } from 'react';
import { WebStream } from '../base/webstream';
import { Panel } from '../base/panel';
import { PanelTopToggle } from './paneltoptoggle';
import { FooterUserInfo } from './footeruserinfo';
import { BoardInfoGame } from './boardinfo';
import { SummaryIndex } from './summaryindex';
import { NavigationPanel } from './navigation';
import { Popup } from './popup';
import '../css/styles.css';
import '../css/responsive.css';
import '../css/animation.css';

import io from 'socket.io-client';
import { Timer } from '../base/timer';
import { StringUtility } from '../../managers/StringUtility';
import { useDispatch, useSelector } from 'react-redux';
import { StateMainPage } from '../../model/betselection';
import { BoardInfoFooter } from './boardinfofooter';
import { OtherMenu } from './othermenupanel';
import { LandscapeRoadmap } from './landscaperoadmap';
import { MenuPage } from './menupage';
import APIManager from '../../managers/APIManager';
import { PanelHistory2 } from './tablehistory2';

const socket = io.connect(import.meta.env.VITE_URL_SOCKET);
let currentInterval: number;
let isBetClose: boolean = true;

export function MainPage() {
    const dispatchBetAction = useDispatch();
    const currentBaseBet = useSelector((state: StateMainPage) => state);
    const [requesting, setRequestState] = useState(false);
    const [dataauth, setDataAuth] = useState(null);
    const [gamedetail, setGameDetail] = useState<any>(null);
    const [showpopup, setActivePopup] = useState(false);
    const [lookupDetail, setActiveDetail] = useState(false);
    const [showTimer, setActiveTimer] = useState(false);
    const [maxTimer, setMaxTimer] = useState(30);
    const [currentTickTimer, setCurrentTimer] = useState(0);
    const [slotCardsPl, setCardAtP] = useState(['', '', '']);
    const [slotCardsBk, setCardAtB] = useState(['', '', '']);
    const [serverCardSubmit, setCardSubmit] = useState(false);

    async function CallSendbet(bodyBet: StateMainPage) {
        if (bodyBet == null) return;
        console.log('request bet length: ' + bodyBet.summaryBets.length);
        if (bodyBet.summaryBets.length <= 0) return;
        const isDevelopment = import.meta.env.MODE === 'development';
        const formattedLink = `${import.meta.env.VITE_URL_REST}${
            import.meta.env.VITE_SENDBET_PATH
        }`;
        const apiService = APIManager.getInstance();
        const data = await apiService.post<any>(
            formattedLink,
            APIManager.convertBetBody(bodyBet.groupMap, bodyBet.code),
            isDevelopment,
        );
        console.log('data: ' + JSON.stringify(data));
    }

    function updateTimer(targetTime: number): number {
        const now = new Date().getTime();
        const difference = targetTime - now;

        let rawSeconds = (difference % (1000 * 60)) / 1000;
        //const finalReturn = Math.round(rawSeconds);

        if (rawSeconds <= 0) {
            if (currentInterval >= 0) {
                dispatchBetAction({
                    type: 'submitBet',
                    onSend: true,
                });
                clearInterval(currentInterval);
                currentInterval = -1;
            }

            rawSeconds = 0;
        }

        // if (finalReturn == 3 && !audioManager.isAudioPlaying("countdown")) {
        //   audioManager.playAudio("countdown");
        // }

        return rawSeconds;
    }

    function onResize() {
        dispatchBetAction({
            type: 'setOrientation',
            landscape: window.innerHeight > window.innerWidth ? false : true,
        });
        dispatchBetAction({
            type: 'setPcActive',
            pcActive: !('ontouchstart' in window || navigator.maxTouchPoints > 0),
        });
        setActiveDetail(false);
    }

    function addWindowListener() {
        window.addEventListener('resize', onResize);
    }

    async function CallGames() {
        try {
            const isDevelopment = import.meta.env.MODE === 'development';
            const apiService = APIManager.getInstance();
            const data = await apiService.get<any>(
                isDevelopment
                    ? `${import.meta.env.VITE_GAME_DETAIL_PATH}`
                    : `${import.meta.env.VITE_URL_REST}${import.meta.env.VITE_GAME_DETAIL_PATH}`,
                {
                    method: 'GET',
                    headers: {},
                    body: null,
                },
                isDevelopment,
            );
            setGameDetail(data);
            console.log('Detail Games: ' + JSON.stringify(data));
        } catch (error) {
            console.log('Error fetch data: ' + error);
        }
    }

    async function CallDataAuth() {
        try {
            setRequestState(true);
            const call = await fetch(
                `${import.meta.env.VITE_URL_REST}${import.meta.env.VITE_AUTH_PATH}`,
                {
                    method: 'GET',
                    headers: {},
                    body: null,
                },
            );
            if (!call.ok) {
                throw new Error("Error can't reach the server");
            }
            const data = await call.json();
            setDataAuth(data);
            setRequestState(false);
            dispatchBetAction({
                type: 'setAvailCoin',
                availableCoin: data.user.chipBase,
            });
        } catch (err) {
            //console.error(err);
            setActivePopup(true);
        }
    }

    function InitSocketClientAPP() {
        if (gamedetail == null) return;
        if (currentBaseBet == null) return;
        if (currentBaseBet.code == '') return;
        if (gamedetail[currentBaseBet.code] == '') return;
        //console.log("game code for socket: " + currentBaseBet.code);
        let gamename = StringUtility.convertGameCodeToGameName(currentBaseBet.code);
        if (import.meta.env.VITE_FORCE_SYNC == 'true') {
            gamename = 'baccaratD';
        }
        socket.on('loadNewValue', function (data: any) {
            if (data && data.game == gamename.toLowerCase() /*"baccaratd"*/) {
                //console.log({ loadNewValue: data });
                if (data.timer == '' || data.timer == undefined) return;
                let maxCountdown = parseInt(data.timer);
                if (import.meta.env.VITE_FORCE_SYNC == 'false') {
                    maxCountdown -= 3;
                }

                const targetDate = new Date();
                targetDate.setSeconds(targetDate.getSeconds() + maxCountdown);
                setMaxTimer(maxCountdown);
                setActiveTimer(true);
                setCurrentTimer(maxCountdown);

                if (currentInterval <= 0) {
                    currentInterval = setInterval(() => {
                        setCurrentTimer(updateTimer(targetDate.getTime()));
                    }, 100);
                    console.log('get timer ' + currentInterval);
                    dispatchBetAction({ type: 'removeall' });
                }

                setCardAtB(['', '', '']);
                setCardAtP(['', '', '']);
                dispatchBetAction({ type: 'setInteractable', panelInteractable: true });
                dispatchBetAction({
                    type: 'submitBet',
                    onSend: false,
                });
                isBetClose = false;
            }
        });

        socket.on('closeTimer', function (data: any) {
            if (data && data.game == gamename /*"baccaratD"*/) {
                //console.log({ closeTimer: data });
                setActiveTimer(false);
                dispatchBetAction({
                    type: 'setInteractable',
                    panelInteractable: false,
                });

                // audioManager.stopAudio("countdown");
                // if (!audioManager.isAudioPlaying("timeout") && !isBetClose) {
                //   audioManager.playAudio("timeout");
                //   isBetClose = true;
                // }
            }
        });

        socket.on(gamename, function (data: any) {
            //console.log({ ScanCard: data });
            if (data == null) {
                setCardAtB(['', '', '']);
                setCardAtP(['', '', '']);
                setCardSubmit(false);
                return;
            }
            const arrayOfB = StringUtility.formatStringToArray(data.banker);
            const arrayOfP = StringUtility.formatStringToArray(data.player);
            setCardAtB(arrayOfB);
            setCardAtP(arrayOfP);
            setCardSubmit(data.submit);
        });
    }

    function InitAudioSFX() {
        try {
            // audioManager.loadAudio("click", `${clipClick}`);
            // audioManager.loadAudio("scroll_scale", `${clipScale}`);
            // audioManager.loadAudio("toggle", `${clipToggle}`);
            // audioManager.loadAudio("countdown", `${clipCountdown}`);
            // audioManager.loadAudio("timeout", `${clipTimeout}`);
            // audioManager.loadAudio("cardpush", `${clipCardFlip}`);
            // audioManager.setVolume(
            //   0.25 *
            //     (currentBaseBet.settings.itemSfx.enable
            //       ? currentBaseBet.settings.itemSfx.value
            //       : 0 / 100)
            // );
            console.log('loading audio is complete');
        } catch (err) {
            console.log({ audio: err });
        }
    }

    function onStart() {
        onResize();
        CallDataAuth();
        CallGames();
        addWindowListener();
        InitAudioSFX();

        try {
            const params = new URLSearchParams(window.location.search);
            const codeGame = params.get('pcode');
            dispatchBetAction({
                type: 'setCode',
                code: codeGame,
            });
        } catch (error) {
            console.log('Error pass code: ' + error);
        }
        currentInterval = 0;
    }

    useEffect(
        function () {
            console.log('request bet header changed');
            if (currentBaseBet.submitBet == true) {
                CallSendbet(currentBaseBet);
            }
        },
        [currentBaseBet, currentBaseBet.submitBet],
    );

    useEffect(function () {
        onStart();
    }, []);

    useEffect(
        function () {
            const fetch_stream: string =
                gamedetail == null ? '' : gamedetail[currentBaseBet.code].stream;
            const fetch_stream_hd: string =
                gamedetail == null ? '' : gamedetail[currentBaseBet.code].stream_hd;
            dispatchBetAction({
                type: 'setStream',
                streamUrl: `${fetch_stream}`,
            });
            dispatchBetAction({
                type: 'setStreamHD',
                streamUrl: `${fetch_stream_hd}`,
            });

            InitSocketClientAPP();
        },
        [gamedetail, currentBaseBet.code],
    );

    if (!currentBaseBet.landscape)
        return (
            <>
                <Panel
                    className="cover-fixed"
                    style={{ zIndex: -1 }}
                    children={[
                        <Panel
                            id="main-page-content"
                            className="child-content"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%',
                            }}
                            children={[
                                <Panel
                                    style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: '88%',
                                        bottom: '-4.6rem',
                                        zIndex: '-1',
                                        background:
                                            'linear-gradient(to top, rgba(2, 16, 33, 1) 0%,rgba(5, 67, 131, 1) 80%,rgba(5, 67, 131, 0) 100%)',
                                    }}
                                />,
                                <Timer
                                    visible={showTimer}
                                    maxValue={maxTimer}
                                    value={currentTickTimer}
                                />,
                                <WebStream
                                    src={`${
                                        currentBaseBet.settings.itemsVideo.value == 0
                                            ? currentBaseBet.stream_hd
                                            : currentBaseBet.stream
                                    }`}
                                    zIndex={-2}
                                />,
                                <PanelTopToggle
                                    onClick={() => {
                                        //setActiveDetail();
                                        // audioManager.playAudio("click");
                                    }}
                                >
                                    <p>active</p>
                                </PanelTopToggle>,
                                <BoardInfoGame
                                    isDetail={lookupDetail}
                                    slotCardP={slotCardsPl}
                                    slotCardB={slotCardsBk}
                                    submit={serverCardSubmit}
                                />,
                                <SummaryIndex />,
                                <PanelHistory2 />,
                                <NavigationPanel />,
                                <FooterUserInfo
                                    doRequesting={requesting}
                                    dataFetch={dataauth}
                                    dataDetail={gamedetail}
                                />,
                                <MenuPage show={currentBaseBet.showMainMenu} />,
                            ]}
                        />,
                    ]}
                />
                <Popup
                    onClick={() => {
                        // audioManager.playAudio("click");
                        window.location.reload();
                    }}
                    active={showpopup}
                />
            </>
        );
    else
        return (
            <>
                <Panel className="cover-fixed" style={{ zIndex: -1 }}>
                    <WebStream
                        src={`${
                            currentBaseBet.settings.itemsVideo.value == 0
                                ? currentBaseBet.stream_hd
                                : currentBaseBet.stream
                        }`}
                        zIndex={0}
                    />
                    <Panel
                        id="main-page-content"
                        className="child-content"
                        style={{
                            width: '100%',
                            height: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <Panel
                            className="child-content"
                            style={{
                                width: '100%',
                                height: '112px',
                                bottom: '0px',
                                background:
                                    'linear-gradient(180deg, rgba(3, 38, 75, 0.00) 0%, rgba(3, 38, 75, 0.83) 47.34%, #001A36 100%), linear-gradient(180deg, rgba(3, 38, 75, 0.00) 0%, rgba(3, 38, 75, 0.83) 56.76%, #021021 100%)',
                            }}
                        />
                        <Panel
                            className="child-content"
                            style={{
                                width: '85px',
                                height: '100%',
                                left: '0px',
                                background:
                                    'linear-gradient(90deg, #03264B 0%, rgba(3, 38, 75, 0.72) 46.33%, rgba(3, 38, 75, 0.00) 100%)',
                            }}
                        />
                        <Panel
                            className="child-content"
                            style={{
                                width: '85px',
                                height: '100%',
                                right: '0px',
                                background:
                                    'linear-gradient(-90deg, #03264B 0%, rgba(3, 38, 75, 0.72) 46.33%, rgba(3, 38, 75, 0.00) 100%)',
                            }}
                        />
                        <Panel
                            style={{
                                position: 'fixed',
                                width: '100%',
                                height: '100%',
                                margin: '0',
                                padding: '0',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '2px',
                                boxSizing: 'border-box',
                            }}
                        >
                            <Panel
                                style={{
                                    flex: '4',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    gap: '5px',
                                    padding: '15px 5px 0px 5px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <OtherMenu />
                                <Panel
                                    style={{
                                        flex: '5',
                                    }}
                                ></Panel>
                                <NavigationPanel />
                            </Panel>
                            <Panel
                                style={{
                                    flex: '0',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <FooterUserInfo
                                    doRequesting={requesting}
                                    dataFetch={dataauth}
                                    dataDetail={gamedetail}
                                />
                            </Panel>
                        </Panel>
                        <Panel
                            className={`container-center-board ${
                                currentBaseBet.panelInteractable == true
                                    ? 'openpanel'
                                    : 'closepanel'
                            }`}
                        >
                            <Panel className="landscape-center-board">
                                <BoardInfoGame
                                    isDetail={lookupDetail}
                                    slotCardP={slotCardsPl}
                                    slotCardB={slotCardsBk}
                                    submit={serverCardSubmit}
                                />
                            </Panel>
                            <Panel className="landscape-bottom-board">
                                <BoardInfoFooter />
                            </Panel>
                        </Panel>
                        <LandscapeRoadmap>
                            <SummaryIndex />
                        </LandscapeRoadmap>
                        <Timer visible={showTimer} maxValue={maxTimer} value={currentTickTimer} />
                    </Panel>
                    <MenuPage show={currentBaseBet.showMainMenu} />
                </Panel>
            </>
        );
}
