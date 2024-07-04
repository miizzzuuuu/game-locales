import { createAction } from '@reduxjs/toolkit';
import { LoadNewValue } from '../../types';

const loadNewValueAction = createAction<LoadNewValue>('socket/loadNewValue');
const gameResultAction = createAction<number>('socket/gameResult');

export { loadNewValueAction, gameResultAction };
