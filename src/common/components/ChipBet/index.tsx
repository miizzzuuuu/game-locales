import { memo } from 'react';

import styles from './styles.module.scss';
import { StringHelper } from '../../utils/StringHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectShowChip } from '../../../store/slice/gameStateSlice';
import { selectChipBase } from '../../../store/slice/chipSlice';
import { ChipHelper } from '../../utils/ChipHelper';
import SVGChip from '../SVG/SVGChip';

interface IProps {
    value: number;
    ignoreTransparent?: boolean;
}

const ChipBet = ({ value, ignoreTransparent }: IProps) => {
    const stringValue = StringHelper.formatChipText(value);

    const chipBase = useAppSelector(selectChipBase);
    // const image = ChipHelper.getChipImageByAmount(value, chipBase);
    const color = ChipHelper.getChipColorByAmount(value, chipBase);

    const showChip = useAppSelector(selectShowChip) || ignoreTransparent;

    return (
        <div className={`${styles.chip}${showChip ? '' : ` ${styles.show}`}`}>
            {/* <img className={styles.bg} src={image} />

            <div className={styles.text} data-value={stringValue}>
                {stringValue}
            </div> */}
            <SVGChip color={color} value={stringValue} />

            <div className={styles['chip-light']} />
        </div>
    );
};

export default memo(ChipBet);
