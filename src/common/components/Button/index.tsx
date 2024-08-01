import { HTMLProps, MouseEventHandler, forwardRef } from 'react';
import styles from './styles.module.scss';
import { Sound } from '../../../services/sound';

type ButtonProps = Pick<
    HTMLProps<HTMLButtonElement>,
    'children' | 'className' | 'style' | 'onClick' | 'disabled' | 'onAnimationEnd'
>;

interface IProps extends ButtonProps {
    custonSound?: () => void;
    disableAnimation?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
    (
        {
            children,
            className,
            style,
            disabled,
            onAnimationEnd,
            onClick,
            custonSound,
            disableAnimation,
        },
        buttonRef,
    ) => {
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
                ref={buttonRef}
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
    },
);

export default Button;
