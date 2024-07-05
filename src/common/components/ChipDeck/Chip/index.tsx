import { useEffect, useRef } from 'react';
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

const Chip = ({ value, onClick, color, isActive }: IProps) => {
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

    return (
        <div className={`chip-item${deviceClassName}`}>
            <div
                className={`${styles.chip}${isActive ? ` ${styles.active}` : ''}`}
                data-value={value}
                ref={chipRef}
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

export default Chip;
