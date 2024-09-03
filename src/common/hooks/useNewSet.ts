import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectGameNewSet } from '../../store/slice/gameSlice';

interface Params {
    handleNewSet: () => void;
}

export function useNewSet({ handleNewSet }: Params) {
    const gameNewSet = useAppSelector(selectGameNewSet);

    useEffect(() => {
        if (gameNewSet) {
            handleNewSet();
        }
    }, [gameNewSet]);
}
