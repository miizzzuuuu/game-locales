import { memo } from 'react';

import styles from './styles.module.scss';
import { StringHelper } from '../../utils/StringHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectShowChip } from '../../../store/slice/gameStateSlice';
import SVGChip from '../SVG/SVGChip';
import { selectChipBase } from '../../../store/slice/chipSlice';
import { ChipHelper } from '../../utils/ChipHelper';

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
        <div className={`${styles['chip']}${showChip ? '' : ` ${styles.show}`}`}>
            <SVGChip color={color} value={stringValue} />

            <div className={styles['chip-light']} />
        </div>
    );
};

export default memo(ChipBet);
