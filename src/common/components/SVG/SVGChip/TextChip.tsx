import styles from './styles.module.scss';

interface IProps {
    color?: string;
    value?: string;
}

const TextChip = ({ color, value }: IProps) => {
    return (
        <>
            <text
                x={20.5}
                y={20.5}
                dominantBaseline="middle"
                textAnchor="middle"
                className={styles.stroke}
                stroke={color}
                strokeWidth={2}
            >
                {value}
            </text>

            <text
                x={20.5}
                y={20.5}
                dominantBaseline="middle"
                textAnchor="middle"
                className={styles.text}
            >
                {value}
            </text>
        </>
    );
};

export default TextChip;
