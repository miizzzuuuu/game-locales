import { useState, useEffect, useRef, useCallback } from 'react';

function useFocus(): boolean {
    const getFocus = useCallback(() => {
        return document.visibilityState === 'visible';
    }, []);

    const [isFocused, setIsFocused] = useState<boolean>(getFocus);
    const focusRef = useRef<boolean>(isFocused);

    useEffect(() => {
        const handleFocusChange = () => {
            const newFocus = getFocus();
            if (focusRef.current !== newFocus) {
                focusRef.current = newFocus;
                setIsFocused(newFocus);
            }
        };

        document.addEventListener('visibilitychange', handleFocusChange);

        return () => {
            document.removeEventListener('visibilitychange', handleFocusChange);
        };
    }, [getFocus]);

    return isFocused;
}

export { useFocus };
