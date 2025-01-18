import { EventIdnlive } from '../ApiType';
import { Cashdrop } from '../SocketType';

export type MessageGameType = 'danger' | 'warning' | 'none' | 'no-game';

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
      }
    | {
          type: 'GET_CASHDROP';
          source: 'LIVE_GAME';
          payload: Cashdrop;
      };
