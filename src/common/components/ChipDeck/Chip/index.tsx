import { useEffect, useRef } from 'react';
import SVGChip from '../../SVG/SVGChip';
import { StringHelper } from '../../../utils/StringHelper';
import styles from './styles.module.scss';
import { DisplayHelper } from '../../../utils/DisplayHelper';

interface IProps {
    version?: number;
    value: number;
    color: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Chip = ({ version = 1, value, onClick, color, isActive }: IProps) => {
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
                if (chipRef.current.classList.contains(styles['selected-chip'])) {
                    chipRef.current.classList.remove(styles['selected-chip']);
                    chipRef.current.classList.add(styles['unselected-chip']);
                }
            }
        }
    }, [isActive]);

    return (
        <div className={`chip-item${deviceClassName} ${styles[`v${version}`]}`}>
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
