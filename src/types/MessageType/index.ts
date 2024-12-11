export type MessageData = {
    type: 'MESSAGE' | 'FINISH_GAME' | 'OPEN_MODAL_EVENT';
    payload?: any;
    source: 'LIVE_GAME';
};
