import { AnimationEventHandler, useEffect, useRef } from 'react';
import SVGChip from '../../SVG/SVGChip';
import { StringHelper } from '../../../utils/StringHelper';
import styles from './styles.module.scss';
import { DisplayHelper } from '../../../utils/DisplayHelper';

interface IProps {
    value: number;
    color: string;
    isActive?: boolean;
    onClick?: () => void;
}

const ChipActive = ({ value, onClick, color, isActive }: IProps) => {
    const chipRef = useRef<HTMLDivElement>(null);

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const stringValue = StringHelper.formatChipText(value);

    const handleClick = () => {
        console.log('handle click');

        onClick?.();
    };

    useEffect(() => {
        if (chipRef.current) {
            if (isActive) {
                chipRef.current.classList.add(styles['selected-chip']);
            } else {
                chipRef.current.classList.add(styles['unselected-chip']);
            }
        }
    }, [isActive]);

    const animationEndHandler: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('unselected-chip-animation') >= 0) {
            chipRef.current?.classList.remove(styles['unselected-chip'], styles['selected-chip']);
        }
    };

    return (
        <div className={`chip-active-item${deviceClassName}`}>
            <div
                className={`${styles.chip}${isActive ? ` ${styles.active}` : ''}`}
                data-value={value}
                ref={chipRef}
                onAnimationEnd={animationEndHandler}
                onClick={handleClick}
            >
                <SVGChip color={color} />

                <div className={styles.content}>
                    <span
                        data-value={stringValue}
                        style={{ '--color': color } as React.CSSProperties & { '--color': string }}
                    >
                        {stringValue}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ChipActive;
