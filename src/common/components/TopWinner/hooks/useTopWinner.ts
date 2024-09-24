import { AnimationEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { resetTopWinner, selectTopWinner } from '../../../../store/slice/topWinnerSlice';

interface Params {
    ref: RefObject<HTMLDivElement>;
}

const delay = 3000;

function useTopWinner({ ref: winnerContentRef }: Params) {
    const dispatch = useAppDispatch();

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    const [index, setIndex] = useState(0);
    const [isFinish, setIsFinish] = useState(true);
    const [wraps, setWraps] = useState<Element[][]>([]);

    const winnerData = useAppSelector(selectTopWinner);

    const resetWinnerData = useCallback(() => {
        dispatch(resetTopWinner());
    }, [dispatch]);

    const resetTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }, []);

    useEffect(() => {
        if (!winnerContentRef.current) {
            return;
        }

        const container = winnerContentRef.current;
        const children = Array.from(container.children);

        if (children.length === 0) {
            return;
        }

        setIsFinish(false);

        let currentTop = children[0].getBoundingClientRect().top;
        let wraps = [[children[0]]];

        for (let i = 1; i < children.length; i++) {
            const childTop = children[i].getBoundingClientRect().top;
            if (childTop > currentTop) {
                wraps.push([children[i]]);
                currentTop = childTop;
            } else {
                wraps[wraps.length - 1].push(children[i]);
            }
        }

        setIsFinish(false);
        setIndex(0);
        setWraps(wraps);
    }, [winnerData]);

    useEffect(() => {
        console.log('aaa 1');

        resetTimeout();

        timeoutRef.current = setTimeout(() => {
            if (index < wraps.length - 1) {
                setIndex((prevIndex) => prevIndex + 1);
            } else {
                setIsFinish(true);
            }
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [index, wraps, resetTimeout]);

    const animationEndHandler: AnimationEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            if (e.animationName === 'slideOutUp') {
                resetWinnerData();
            }
        },
        [resetWinnerData],
    );

    return {
        winnerData,
        index,
        isFinish,
        resetWinnerData,
        animationEndHandler,
    };
}

export { useTopWinner };
