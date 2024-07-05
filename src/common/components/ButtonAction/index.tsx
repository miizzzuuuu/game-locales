import {
    AnimationEventHandler,
    CSSProperties,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from 'react';

import styles from './styles.module.scss';
import { useAppSelector } from '../../../store/hooks';
import { selectDevice } from '../../../store/slice/windowSlice';
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

    const device = useAppSelector(selectDevice);
    const deviceClassName = DisplayHelper.getDeviceClassName(styles, device);

    const handleClick = () => {
        console.log('click action button');

        onClick?.();
    };

    const [renderUI, setRenderUI] = useState(true);

    const handleAnimationEnd: AnimationEventHandler = (e) => {
        if (e.animationName.indexOf('fadeout') >= 0) {
            setRenderUI(false);
        }
    };

    useEffect(() => {
        if (show) {
            setRenderUI(true);
        }
    }, [show]);

    if (!show && !renderUI) {
        return null;
    }

    return (
        <Button
            className={`${styles['button-action']}${deviceClassName}${show ? ` ${styles.apear}` : ` ${styles.disapear}`}`}
            style={style}
            onClick={handleClick}
            disabled={disabled}
            onAnimationEnd={handleAnimationEnd}
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
