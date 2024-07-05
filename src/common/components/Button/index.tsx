import { HTMLProps, MouseEventHandler, forwardRef } from 'react';
import styles from './styles.module.scss';

type ButtonProps = Pick<
    HTMLProps<HTMLButtonElement>,
    'children' | 'className' | 'style' | 'onClick' | 'disabled' | 'onAnimationEnd'
>;

interface IProps extends ButtonProps {
    custonSound?: () => void;
}

export const Button = forwardRef<HTMLButtonElement, IProps>(
    ({ children, className, style, disabled, onAnimationEnd, onClick, custonSound }, buttonRef) => {
        const clickHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
            if (!disabled) return;

            if (custonSound) {
                custonSound();
            }

            onClick?.(e);
        };

        return (
            <button
                ref={buttonRef}
                type="button"
                className={`${styles.button}${className ? ` ${className}` : ''}`}
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
