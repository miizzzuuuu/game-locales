import { StringHelper } from '../../../utils/StringHelper';
import { useAppSelector } from '../../../../store/hooks';
import { selectChipBase } from '../../../../store/slice/chipSlice';
import { ChipHelper } from '../../../utils/ChipHelper';
import { selectShowChip } from '../../../../store/slice/gameStateSlice';
import SVGChip from '../../SVG/SVGChip';
import styles from './styles.module.scss';

interface IProps {
    value: number;
    ignoreTransparent?: boolean;
}

const ChipBet = ({ value, ignoreTransparent }: IProps) => {
    const stringValue = StringHelper.formatChipText(value);

    const chipBase = useAppSelector(selectChipBase);
    const color = ChipHelper.getChipColorByAmount(value, chipBase);

    const showChip = useAppSelector(selectShowChip) || ignoreTransparent;

    return (
        <div className={`${styles.chip}${showChip ? '' : ` ${styles.hide}`}`}>
            <SVGChip color={color} value={stringValue} />

            <div className={styles['chip-light']} />
        </div>
    );
};

export default ChipBet;
