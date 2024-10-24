import { ChipBetProps } from '..';
import { useAppSelector } from '../../../../store/hooks';
import { selectChipBase } from '../../../../store/slice/chipSlice';
import { selectShowChip } from '../../../../store/slice/gameStateSlice';
import { getChipColorByAmount } from '../../../utils/ChipHelper';
import { formatChipText } from '../../../utils/StringHelper';
import SVGChip from '../../SVG/SVGChip';
import styles from './styles.module.scss';

const ChipBet = ({ value, ignoreTransparent }: ChipBetProps) => {
    const stringValue = formatChipText(value);

    const chipBase = useAppSelector(selectChipBase);
    const color = getChipColorByAmount(value, chipBase);

    const showChip = useAppSelector(selectShowChip) || ignoreTransparent;

    return (
        <div className={`${styles.chip}${showChip ? '' : ` ${styles.hide}`}`}>
            <SVGChip color={color} value={stringValue} />

            <div className={styles['chip-light']} />
        </div>
    );
};

export default ChipBet;
