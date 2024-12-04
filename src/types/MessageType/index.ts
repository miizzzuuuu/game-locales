export type MessageData = {
    type: 'MESSAGE' | 'FINISH_GAME' | 'OPEN_MODAL';
    payload?: any;
    source: 'LIVE_GAME';
};
