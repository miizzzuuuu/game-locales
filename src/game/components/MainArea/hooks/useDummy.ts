import { useCallback } from 'react';
import { useKeyboard } from '../../../../common/hooks/useKeyboard';
import { useAppDispatch } from '../../../../store/hooks';
import { scanNumberAction } from '../../../../store/actions/socketAction';
import {
    dummyDragonPairResult,
    dummyDragonWildResult,
    dummyNormalResult,
    dummySuperWildResult,
    dummyTigerPairResult,
    dummyTigerWildResult,
} from '../../../dummy/result';

export function useDummy() {
    const dispatch = useAppDispatch();

    const handleKeyboardTest = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === '1') {
                dispatch(scanNumberAction(dummyNormalResult));
            }
            if (e.key === '2') {
                dispatch(scanNumberAction(dummyDragonPairResult));
            }
            if (e.key === '3') {
                dispatch(scanNumberAction(dummyTigerPairResult));
            }
            if (e.key === '4') {
                dispatch(scanNumberAction(dummyDragonWildResult));
            }
            if (e.key === '5') {
                dispatch(scanNumberAction(dummyTigerWildResult));
            }
            if (e.key === '6') {
                dispatch(scanNumberAction(dummySuperWildResult));
            }
        },
        [dispatch],
    );

    useKeyboard(handleKeyboardTest);
}
