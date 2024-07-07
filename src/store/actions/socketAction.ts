import { createAction } from '@reduxjs/toolkit';
import { LoadNewValueData } from '../../types';

const loadNewValueAction = createAction<LoadNewValueData>('socket/loadNewValue');
const gameResultAction = createAction<LoadNewValueData>('socket/gameResult');

export { loadNewValueAction, gameResultAction };
