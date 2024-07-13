import { useCallback, useEffect, useRef } from 'react';

import { ChipHelper } from '../../utils/ChipHelper';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Chip from './Chip';
import ChipActive from './ChipActive';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectActiveChip, selectChipBase, setActiveChip } from '../../../store/slice/chipSlice';
import { selectDevice, selectOrientation } from '../../../store/slice/windowSlice';
import { Sound } from '../../../services/sound';

interface IProps {
    version?: number;
    show?: boolean;
}

const ChipDeck = ({ version = 1, show = true }: IProps) => {
    const slider = useRef<HTMLDivElement>(null);
    const slider2 = useRef<HTMLDivElement>(null);

    const dispatch = useAppDispatch();

    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const chipBase = useAppSelector(selectChipBase);
    const activeChip = useAppSelector(selectActiveChip);

    const orientation = useAppSelector(selectOrientation);

    const scrollToCenter = useCallback(
        (index: number) => {
            if (!slider.current) return;

            const circles = slider.current.querySelectorAll(
                '.chip-item',
            ) as NodeListOf<HTMLElement>;

            const circleClicked = circles[index];
            const containerRect = slider.current.getBoundingClientRect();
            const circleClickedRect = circleClicked.getBoundingClientRect();

            if (
                (orientation === 'landscape' && version === 1) ||
                (orientation === 'portrait' && version === 2)
            ) {
                const containerCenter = containerRect.top + containerRect.height / 2;
                const circleCenter = circleClickedRect.top + circleClickedRect.height / 2;
                const scrollOffset = circleCenter - containerCenter;

                slider.current.scrollTo({
                    top: slider.current.scrollTop + scrollOffset,
                    behavior: 'smooth',
                });
            } else if (
                (orientation === 'portrait' && version === 1) ||
                (orientation === 'landscape' && version === 2)
            ) {
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
                if (
                    (orientation === 'portrait' && version === 1) ||
                    (orientation === 'landscape' && version === 2)
                ) {
                    slider2.current.scrollLeft = scrollPos.left;
                } else if (
                    (orientation === 'landscape' && version === 1) ||
                    (orientation === 'portrait' && version === 2)
                ) {
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

    useEffect(() => {
        if (device !== 'desktop') {
            return;
        }

        let mouseDown = false;
        let startX: number;
        let scrollLeft: number;

        let startY: number;
        let scrollTop: number;

        const startDragging = (e: MouseEvent) => {
            mouseDown = true;

            if (version === 1) {
                startY = e.pageY - (slider.current?.offsetTop ?? 0);
                scrollTop = slider.current?.scrollTop ?? 0;
                return;
            }

            if (version === 2) {
                startX = e.pageX - (slider.current?.offsetLeft ?? 0);
                scrollLeft = slider.current?.scrollLeft ?? 0;
            }
        };

        const stopDragging = () => {
            mouseDown = false;
        };

        const move = (e: MouseEvent) => {
            e.preventDefault();
            if (!mouseDown) {
                return;
            }

            if (version === 1) {
                const y = e.pageY - (slider.current?.offsetTop ?? 0);
                const scroll = y - startY;
                if (slider.current) {
                    slider.current.scrollTop = scrollTop - scroll;
                }
                return;
            }

            if (version === 2) {
                const x = e.pageX - (slider.current?.offsetLeft ?? 0);
                const scroll = x - startX;
                if (slider.current) {
                    slider.current.scrollLeft = scrollLeft - scroll;
                }
            }
        };

        slider.current?.addEventListener('mousemove', move, false);
        slider.current?.addEventListener('mousedown', startDragging, false);
        slider.current?.addEventListener('mouseup', stopDragging, false);
        slider.current?.addEventListener('mouseleave', stopDragging, false);

        return () => {
            slider.current?.removeEventListener('mousemove', move);
            slider.current?.removeEventListener('mousedown', startDragging);
            slider.current?.removeEventListener('mouseup', stopDragging);
            slider.current?.removeEventListener('mouseleave', stopDragging);
        };
    }, [device, version]);

    return (
        <div
            className={`${styles['chip-deck']}${deviceClassName} ${styles[`v${version}`]}${show ? ` ${styles.apear}` : ` ${styles.disapear}`}`}
        >
            <div className={`${styles.wrapper} no-scrollbar`} ref={slider}>
                {chipBase.map((chip, idx) => (
                    <Chip
                        key={idx}
                        version={version}
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
                            version={version}
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
