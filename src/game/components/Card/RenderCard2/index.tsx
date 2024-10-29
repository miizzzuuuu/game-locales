import { CSSProperties } from 'react';
import { RenderSymbol } from '../RenderSymbol';
import styles from './syles.module.scss';
import { splitCharStringToArray } from '../../../utils/StringUtility';

interface IProps {
    value: string;
    className?: string;
    style?: CSSProperties;
}

const RenderCard2 = ({ value, className, style }: IProps) => {
    let displayValue = splitCharStringToArray(value);

    if (displayValue.length < 2) {
        displayValue = ['', ''];
    }

    const displayColor =
        displayValue[1] == 'd' || displayValue[1] == 'h'
            ? '#FF0415'
            : displayValue[1] == 's' || displayValue[1] == 'c'
              ? '#121524'
              : '#fff';

    return (
        <div className={`${styles.container}${className ? ` ${className}` : ''}`} style={style}>
            <svg viewBox="0 0 100 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="132" rx="14" fill="white" />
                <RenderSymbol symbol={displayValue[1]} />
            </svg>

            <span style={{ color: displayColor }} className={styles.value}>
                {displayValue[0] == 'T' ? '10' : displayValue[0]}
            </span>
        </div>
    );
};

export default RenderCard2;
