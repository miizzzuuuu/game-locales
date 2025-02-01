import { EventIdnlive } from '../ApiType';
import { Cashdrop } from '../SocketType';

export type MessageGameType = 'danger' | 'warning' | 'none' | 'no-game';

export type MessageDataGameToContainer =
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
      }
    | {
          type: 'CLICK_GAME';
          source: 'LIVE_GAME';
      };

export type MessageDataContainerToGame =
    | {
        source: 'GAME_CONTAINER';
        type: 'GAME_LOADED';
    }
    | {
        source: 'GAME_CONTAINER';
        type: 'EVENT_WIN';
        payload: number;
    };