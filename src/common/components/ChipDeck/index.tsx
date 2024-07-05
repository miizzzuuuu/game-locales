import { AnimationEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectActiveChip, selectChipBase, setActiveChip } from '../../../store/slice/chipSlice';
import { ChipHelper } from '../../utils/ChipHelper';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Chip from './Chip';
import ChipActive from './ChipActive';
import styles from './styles.module.scss';
import { Sound } from '../../../services/sound';
import { selectOrientation } from '../../../store/slice/windowSlice';

interface IProps {
    version?: number;
    show?: boolean;
}

const ChipDeck = ({ version = 1, show = true }: IProps) => {
    const slider = useRef<HTMLDivElement>(null);
    const slider2 = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const chipBase = useAppSelector(selectChipBase);
    const activeChip = useAppSelector(selectActiveChip);

    const orientation = useAppSelector(selectOrientation);

    const [renderUI, setRenderUI] = useState(true);

    const scrollToCenter = useCallback(
        (index: number) => {
            if (!slider.current) return;

            const circles = slider.current.querySelectorAll(
                '.chip-item',
            ) as NodeListOf<HTMLElement>;

            const circleClicked = circles[index];
            const containerRect = slider.current.getBoundingClientRect();
            const circleClickedRect = circleClicked.getBoundingClientRect();

            if (orientation === 'landscape' && version === 1) {
                console.log('scroll landscape');

                const containerCenter = containerRect.top + containerRect.height / 2;
                const circleCenter = circleClickedRect.top + circleClickedRect.height / 2;
                const scrollOffset = circleCenter - containerCenter;

                slider.current.scrollTo({
                    top: slider.current.scrollTop + scrollOffset,
                    behavior: 'smooth',
                });
            } else if (orientation === 'portrait' && version === 1) {
                console.log('scroll portrait');

                const containerCenter = containerRect.left + containerRect.width / 2;
                const circleCenter = circleClickedRect.left + circleClickedRect.width / 2;
                const scrollOffset = circleCenter - containerCenter;

                slider.current.scrollTo({
                    left: slider.current.scrollLeft + scrollOffset,
                    behavior: 'smooth',
                });
            }
        },
        [orientation, version],
    );

    useEffect(() => {
        const index = chipBase.indexOf(activeChip);
        scrollToCenter(index);
    }, [activeChip, chipBase, scrollToCenter]);

    useEffect(() => {
        const lastKnownScrollPosition = { left: 0, top: 0 };
        let ticking = false;

        function followScroll(scrollPos: { left: number; top: number }) {
            if (slider2.current) {
                console.log(scrollPos);
                if (orientation === 'portrait' && version === 1) {
                    slider2.current.scrollLeft = scrollPos.left;
                } else if (orientation === 'landscape' && version === 1) {
                    slider2.current.scrollTop = scrollPos.top;
                }
            }
        }

        const handleScroll = () => {
            lastKnownScrollPosition.left = slider.current?.scrollLeft ?? 0;
            lastKnownScrollPosition.top = slider.current?.scrollTop ?? 0;

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    followScroll(lastKnownScrollPosition);
                    ticking = false;
                });

                ticking = true;
            }
        };

        slider.current?.addEventListener('scroll', handleScroll);

        return () => {
            slider.current?.removeEventListener('scroll', handleScroll);
        };
    }, [orientation, version]);

    const animationEndHanlder: AnimationEventHandler = (e) => {
        if (e.animationName.indexOf('fadeout') >= 0) {
            setRenderUI(false);
        }
    };

    if (!show && !renderUI) {
        return null;
    }

    return (
        <div
            className={`${styles['chip-deck']}${deviceClassName} ${styles[`v${version}`]}`}
            onAnimationEnd={animationEndHanlder}
        >
            <div className={`${styles.wrapper} no-scrollbar`} ref={slider}>
                {chipBase.map((chip, idx) => (
                    <Chip
                        key={idx}
                        value={chip}
                        color={ChipHelper.getChipColorByIndex(idx)}
                        isActive={activeChip === chip}
                        onClick={() => {
                            Sound.playSelectChip();
                            dispatch(setActiveChip(chip));
                        }}
                    />
                ))}
            </div>

            <div className={styles.overflow} ref={slider2}>
                <div className={styles.wrapperActive}>
                    {chipBase.map((chip, idx) => (
                        <ChipActive
                            key={idx}
                            value={chip}
                            color={ChipHelper.getChipColorByIndex(idx)}
                            isActive={activeChip === chip}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChipDeck;
