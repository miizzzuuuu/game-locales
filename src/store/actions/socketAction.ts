import { createAction } from '@reduxjs/toolkit';
import { LoadNewValueData, ScanNumberData } from '../../types';

const loadNewValueAction = createAction<LoadNewValueData>('socket/loadNewValue');
const gameResultAction = createAction<LoadNewValueData>('socket/gameResult');
const noGameAction = createAction('socket/noGame');
const scanNumberAction = createAction<ScanNumberData>('socket/scanNumber');

export { loadNewValueAction, gameResultAction, noGameAction, scanNumberAction };
