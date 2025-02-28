import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectGameNewSet } from '../../store/slice/gameSlice';
import { resetHistory } from '../../store/slice/historySlice';

function useNewSet() {
    const dispatch = useAppDispatch();
    const newSet = useAppSelector(selectGameNewSet);

    useEffect(() => {
        if (newSet) {
            console.log('new set callback');
            dispatch(resetHistory());
        }
    }, [newSet, dispatch]);
}

export { useNewSet };
