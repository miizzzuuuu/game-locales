import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectGameNewSet } from '../../store/slice/gameSlice';

function useNewSet() {
    const newSet = useAppSelector(selectGameNewSet);

    useEffect(() => {
        if (newSet) {
            console.log('new set callback');
        }
    }, [newSet]);
}

export { useNewSet };
