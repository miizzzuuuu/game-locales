import { useState } from 'react';
import styles from './styles.module.scss';

interface IProps {
    interactable?: boolean;
    initialValue?: number;
    minValue: number;
    maxValue: number;
    step?: number;
    onChange?: (value: number) => void;
}

export const RoundRangeSlider = ({
    interactable = true,
    initialValue = 1,
    minValue,
    maxValue,
    step,
    onChange,
}: IProps) => {
    const [value, setValue] = useState<number>(initialValue);

    const pct = Math.floor(((value - minValue) / (maxValue - minValue)) * 100);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
        onChange?.(newValue);
    };

    return (
        <div className={styles.slidecontainer}>
            <input
                type="range"
                min={`${minValue}`}
                max={`${maxValue}`}
                step={step ?? 10}
                value={`${value}`}
                className={styles['round-slider']}
                onChange={handleChange}
                style={{
                    background: `linear-gradient(90deg, #fff ${pct}%, #2c2d3f ${pct}%)`,
                }}
                disabled={!interactable}
            />
            <p
                className={`${styles['label-slider']}${interactable == true ? '' : ` ${styles.disabled}`}`}
            >
                {pct}%
            </p>
        </div>
    );
};
