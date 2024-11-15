import {
    AnimationEventHandler,
    TransitionEventHandler,
    useLayoutEffect,
    useRef,
    useState,
} from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { resetTopWinner, selectTopWinner } from '../../../../store/slice/topWinnerSlice';
import Item from '../Item';
import styles from './styles.module.scss';

const Content = () => {
    const ref = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const [show, setShow] = useState(true);

    const winnerData = useAppSelector(selectTopWinner);

    useLayoutEffect(() => {
        if (!ref.current) {
            return;
        }

        const { height } = ref.current.getBoundingClientRect();

        const scale = getComputedStyle(ref.current).getPropertyValue('--scale');
        const heightOverlay = (15 / 100) * 410 * Number(scale);

        const heightContent = height + heightOverlay;

        ref.current.style.transition = `transform ${(heightContent / 30) * 1}s linear`;
        ref.current.style.transform = `translate3d(0px, -${heightContent}px, 0px)`;
    }, []);

    const handleTransitionEnd: TransitionEventHandler<HTMLDivElement> = () => {
        console.log('handleTransitionEnd');
        setShow(false);
    };

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.includes('hide')) {
            dispatch(resetTopWinner());
        }
    };

    return (
        <div className={styles.winner} ref={ref} onTransitionEnd={handleTransitionEnd}>
            <div
                className={`${styles.wrapper}${!show ? ` ${styles.disapear}` : ''}`}
                onAnimationEnd={handleAnimationEnd}
            >
                {winnerData.map((value) => {
                    return (
                        <Item key={value.username} name={value.username} value={value.totalWin} />
                    );
                })}
            </div>
        </div>
    );
};

export default Content;
