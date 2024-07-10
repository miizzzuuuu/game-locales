import { useCallback, useEffect, useRef } from 'react';

import { ChipHelper } from '../../utils/ChipHelper';
import { DisplayHelper } from '../../utils/DisplayHelper';
import Chip from './Chip';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectActiveChip, selectChipBase, setActiveChip } from '../../../store/slice/chipSlice';
import { selectDevice, selectOrientation } from '../../../store/slice/windowSlice';
import { Sound } from '../../../services/sound';

interface IProps {
    version?: number;
    show?: boolean;
}

const ChipDeckV2 = ({ version = 1, show = true }: IProps) => {
    const slider = useRef<HTMLDivElement>(null);

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
        if (device !== 'desktop') {
            return;
        }

        let mouseDown = false;
        let startX: number, scrollLeft: number;

        const startDragging = (e: MouseEvent) => {
            mouseDown = true;
            startX = e.pageX - (slider.current?.offsetLeft ?? 0);
            scrollLeft = slider.current?.scrollLeft ?? 0;
        };

        const stopDragging = () => {
            mouseDown = false;
        };

        const move = (e: MouseEvent) => {
            e.preventDefault();
            if (!mouseDown) {
                return;
            }
            const x = e.pageX - (slider.current?.offsetLeft ?? 0);
            const scroll = x - startX;
            if (slider.current) {
                slider.current.scrollLeft = scrollLeft - scroll;
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
    }, [device]);

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
        </div>
    );
};

export default ChipDeckV2;
