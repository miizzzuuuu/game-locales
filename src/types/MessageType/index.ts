import { EventIdnlive } from '../ApiType';

export type MessageData =
    | {
          type: 'MESSAGE' | 'FINISH_GAME' | 'OPEN_MODAL_EVENT';
          payload?: any;
          source: 'LIVE_GAME';
      }
    | {
          type: 'OPEN_MODAL_EVENT';
          source: 'LIVE_GAME';
          payload: EventIdnlive;
      };
