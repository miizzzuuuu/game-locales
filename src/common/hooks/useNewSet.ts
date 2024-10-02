import { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectGameNewSet } from '../../store/slice/gameSlice';
import { Features } from '../utils/Features';

interface Params {
    handleNewSet: () => void;
}

function useNewSet({ handleNewSet }: Params) {
    if (!Features.SHUFFLE_THE_CARDS) {
        return;
    }

    const gameNewSet = useAppSelector(selectGameNewSet);

    useEffect(() => {
        if (gameNewSet) {
            handleNewSet();
        }
    }, [gameNewSet, handleNewSet]);
}

export { useNewSet };
