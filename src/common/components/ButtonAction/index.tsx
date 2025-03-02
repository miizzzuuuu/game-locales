import { CSSProperties, ReactElement } from 'react';
import Button from '../Button';
import styles from './styles.module.scss';

interface IProps {
    show?: boolean;
    label?: string;
    icon: ReactElement;
    disabled?: boolean;
    borderColor?: string;
    circle?: boolean;
    background?: string;
    style?: CSSProperties;
    onClick?: () => void;
    custonSound?: () => void;
}

const ButtonAction = ({
    show = true,
    label,
    icon,
    disabled,
    circle,
    borderColor,
    background,
    style,
    onClick,
    custonSound,
}: IProps) => {
    const handleClick = () => {
        onClick?.();
    };

    return (
        <Button
            className={`${styles['button-action']}${show ? '' : ` ${styles.disapear}`}`}
            style={style}
            onClick={handleClick}
            disabled={disabled}
            custonSound={custonSound}
        >
            <div
                className={`${styles.icon}${circle ? ` ${styles.circle}` : ''}`}
                style={{
                    borderColor: borderColor,
                    backgroundColor: background,
                }}
            >
                {icon}
            </div>

            {label && <div className={styles.text}>{label}</div>}
        </Button>
    );
};

export default ButtonAction;
