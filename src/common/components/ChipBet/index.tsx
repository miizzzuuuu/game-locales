import { CSSProperties, useEffect, useRef } from 'react';

import styles from './styles.module.scss';
import { StringHelper } from '../../utils/StringHelper';
import { useAppSelector } from '../../../store/hooks';
import { selectShowChip } from '../../../store/slice/gameStateSlice';
import SVGChip from '../SVG/SVGChip';

interface IProps {
    value: number;
    color?: string;
    style?: CSSProperties;
}

const ChipBet = ({ value, color, style }: IProps) => {
    const chipRef = useRef<HTMLDivElement>(null);
    const lightRef = useRef<HTMLDivElement>(null);
    const lastValue = useRef<number>(0);

    const stringValue = StringHelper.formatChipText(value);

    const showChip = useAppSelector(selectShowChip);

    useEffect(() => {
        if (value !== lastValue.current) {
            console.log('run animation');

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

    useEffect(() => {
        const handleAnimationEnd = () => {
            chipRef.current?.classList.remove(styles['place-chip']);
        };

        chipRef.current?.addEventListener('animationend', handleAnimationEnd);

        return () => {
            chipRef.current?.removeEventListener('animationend', handleAnimationEnd);
        };
    }, []);

    return (
        <div
            className={`${styles['chip']}${showChip ? '' : ` ${styles.show}`}`}
            style={style}
            ref={chipRef}
        >
            <SVGChip color={color} />

            <div className={styles['chip-content']}>
                <span
                    className={styles['chip-text']}
                    data-value={stringValue}
                    style={{ '--color': color } as React.CSSProperties & { '--color': string }}
                >
                    {stringValue}
                </span>
            </div>

            <div ref={lightRef} className={styles['chip-light']} />
        </div>
    );
};

export default ChipBet;
