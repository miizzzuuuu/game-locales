import { HTMLProps, MouseEventHandler } from 'react';
import { Sound } from '../../../services/sound';
import styles from './styles.module.scss';

type ButtonProps = Pick<
    HTMLProps<HTMLButtonElement>,
    'children' | 'className' | 'style' | 'onClick' | 'disabled' | 'onAnimationEnd'
>;

interface IProps extends ButtonProps {
    custonSound?: () => void;
    disableAnimation?: boolean;
}

export const Button = ({
    onClick,
    children,
    className,
    style,
    disabled,
    onAnimationEnd,
    custonSound,
    disableAnimation,
}: IProps) => {
    const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (custonSound) {
            custonSound();
        } else {
            Sound.playClick();
        }

        onClick?.(e);
    };

    return (
        <button
            type="button"
            className={`${styles.button}${disableAnimation ? '' : ` ${styles.animate}`}${className ? ` ${className}` : ''}`}
            style={style}
            disabled={disabled}
            onAnimationEnd={onAnimationEnd}
            onClick={clickHandler}
        >
            {children}
        </button>
    );
};

Button.displayName = 'Button';

export default Button;
