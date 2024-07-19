import { RefObject, useEffect, useRef, useState } from 'react';
import { topWinnerDummy } from '../../../dummy';

interface Params {
    ref: RefObject<HTMLDivElement>;
}

export function useTopWinner({ ref }: Params) {
    const toRef = useRef<ReturnType<typeof setTimeout>>();
    const to2Ref = useRef<ReturnType<typeof setTimeout>>();
    const to3Ref = useRef<ReturnType<typeof setTimeout>>();

    const [isFinish, setIsFinish] = useState(false);

    const [winnerData] = useState(topWinnerDummy);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        if (winnerData.length === 0) {
            return;
        }

        const container = ref.current;
        const children = Array.from(container.children);

        console.log('scroll winner 1');
        if (children.length === 0) {
            return;
        }

        container.scrollTop = 0;
        setIsFinish(false);
        console.log('scroll winner 2');

        let currentTop = children[0].getBoundingClientRect().top;
        let wraps = [[children[0]]];

        // Group children by wrap
        for (let i = 1; i < children.length; i++) {
            const childTop = children[i].getBoundingClientRect().top;
            if (childTop > currentTop) {
                // New wrap detected
                wraps.push([children[i]]);
                currentTop = childTop;
            } else {
                wraps[wraps.length - 1].push(children[i]);
            }
        }

        // Function to scroll to each wrap with delay
        wraps.forEach((wrap, index) => {
            toRef.current = setTimeout(
                () => {
                    const firstElementOfWrap = wrap[0];
                    firstElementOfWrap.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });

                    if (index === wraps.length - 1) {
                        to2Ref.current = setTimeout(() => {
                            setIsFinish(true);

                            to3Ref.current = setTimeout(() => {
                                // dispatch(resetWinner());
                                console.log('reset');
                            }, 500);
                        }, 1500);
                    }
                },
                500 + 1500 * index,
            ); // Delay of 1 second per wrap
        });

        return () => {
            if (toRef) {
                clearTimeout(toRef.current);
                toRef.current = undefined;
            }

            if (to2Ref) {
                clearTimeout(to2Ref.current);
                to2Ref.current = undefined;
            }

            if (to3Ref) {
                clearTimeout(to3Ref.current);
                to3Ref.current = undefined;
            }
        };
    }, winnerData);

    return {
        winnerData,
        isFinish,
    };
}
