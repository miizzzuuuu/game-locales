import styles from './styles.module.scss';

interface IProps {
    color?: string;
    value?: string;
}

const TextChip = ({ color, value }: IProps) => {
    return (
        <foreignObject x={0} y={0} width={41} height={41}>
            <div
                style={{
                    fontFamily: '"Inter", sans-serif',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <span
                    data-value={value}
                    className={styles.text}
                    style={
                        {
                            '--color': color,
                        } as React.CSSProperties & { '--color': string }
                    }
                >
                    {value}
                </span>
            </div>
        </foreignObject>
    );
};

export default TextChip;
