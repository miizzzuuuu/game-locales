import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectFocus, setFocus } from '../../store/slice/windowSlice';

function useFocus() {
    const dispatch = useAppDispatch();

    const isFocus = useAppSelector(selectFocus);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                console.log('focus');
                dispatch(setFocus(true));
            } else {
                console.log('not focus');
                dispatch(setFocus(false));
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange, false);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [dispatch]);

    return { isFocus };
}

export { useFocus };
