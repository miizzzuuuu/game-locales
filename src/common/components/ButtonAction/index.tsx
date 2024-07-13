import { CSSProperties, ReactNode, useRef } from 'react';

import styles from './styles.module.scss';
import Button from '../Button';
import { DisplayHelper } from '../../utils/DisplayHelper';

interface IProps {
    show?: boolean;
    label?: ReactNode | undefined;
    icon: JSX.Element;
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
    const buttonRef = useRef<HTMLButtonElement>(null);

    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const handleClick = () => {
        console.log('click action button');

        onClick?.();
    };

    return (
        <Button
            className={`${styles['button-action']}${deviceClassName}${show ? '' : ` ${styles.disapear}`}`}
            style={style}
            onClick={handleClick}
            disabled={disabled}
            custonSound={custonSound}
            ref={buttonRef}
        >
            <div
                className={`${styles['icon']}${circle ? ` ${styles.circle}` : ''}`}
                style={{
                    borderColor: borderColor,
                    backgroundColor: background,
                }}
            >
                {icon}
            </div>

            {label && <div className={styles['text']}>{label}</div>}
        </Button>
    );
};

export default ButtonAction;
