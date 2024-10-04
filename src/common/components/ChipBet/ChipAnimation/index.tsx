import { useEffect, useRef } from 'react';
import { ChipBetProps } from '..';
import { useAppSelector } from '../../../../store/hooks';
import { selectChipBase } from '../../../../store/slice/chipSlice';
import { selectShowChip } from '../../../../store/slice/gameStateSlice';
import { ChipHelper } from '../../../utils/ChipHelper';
import { StringHelper } from '../../../utils/StringHelper';
import SVGChip from '../../SVG/SVGChip';
import styles from './styles.module.scss';

const ChipAnimation = ({ value, ignoreTransparent }: ChipBetProps) => {
    const chipRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);
    const lastValue = useRef<number>(0);

    const stringValue = StringHelper.formatChipText(value);

    const chipBase = useAppSelector(selectChipBase);
    const color = ChipHelper.getChipColorByAmount(value, chipBase);

    const showChip = useAppSelector(selectShowChip) || ignoreTransparent;

    useEffect(() => {
        if (value !== lastValue.current) {
            if (lightRef.current?.classList.contains(styles['run-chip-light'])) {
                lightRef.current?.classList.remove(styles['run-chip-light']);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        lightRef.current?.classList.add(styles['run-chip-light']);
                    });
                });
            } else {
                lightRef.current?.classList.add(styles['run-chip-light']);
            }

            lastValue.current = value;
        }
    }, [value]);

    return (
        <div className={`${styles['chip']}${showChip ? '' : ` ${styles.hide}`}`} ref={chipRef}>
            <SVGChip color={color} value={stringValue} />

            <div ref={lightRef} className={styles['chip-light']} />
        </div>
    );
};

export default ChipAnimation;
