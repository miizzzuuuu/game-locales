import { useRef } from 'react';
import SVGChip from '../../SVG/SVGChip';
import { formatChipText } from '../../../utils/StringHelper';
import styles from './styles.module.scss';

interface IProps {
    version?: number;
    value: number;
    color: string;
    isActive?: boolean;
    onClick?: () => void;
}

const Chip = ({ value, onClick, color, isActive }: IProps) => {
    const chipRef = useRef<HTMLDivElement>(null);

    const stringValue = formatChipText(value);

    const handleClick = () => {
        console.log('handle click');

        onClick?.();
    };

    return (
        <div className="chip-item">
            <div
                className={`${styles.chip}${isActive ? ` ${styles.active}` : ''}`}
                data-value={value}
                ref={chipRef}
                onClick={handleClick}
            >
                <SVGChip color={color} value={stringValue} />
            </div>
        </div>
    );
};

export default Chip;
