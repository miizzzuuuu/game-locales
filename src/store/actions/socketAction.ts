import { createAction } from '@reduxjs/toolkit';
import { LoadNewValueData, ScanNumberData } from '../../types';

const loadNewValueAction = createAction<LoadNewValueData>('socket/loadNewValue');
const gameResultAction = createAction<LoadNewValueData>('socket/gameResult');
const scanNumberAction = createAction<ScanNumberData>(
    'socket/scanNumber',
);
export { loadNewValueAction, gameResultAction, scanNumberAction };
