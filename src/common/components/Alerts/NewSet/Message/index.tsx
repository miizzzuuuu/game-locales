import { AnimationEventHandler, ReactNode, useEffect, useRef } from 'react';

import styles from './styles.module.scss';
import SVGBackground from './SVG/SVGBackground';
import { DisplayHelper } from '../../../../utils/DisplayHelper';

interface IProps {
    value?: ReactNode | undefined;
    handleClose?: () => void;
    close?: boolean;
}

const Message = ({ value, close, handleClose }: IProps) => {
    const deviceClassName = DisplayHelper.getDeviceClassName(styles);

    const messageRef = useRef<HTMLDivElement>(null);

    const prevMessage = useRef<ReactNode | undefined>();

    useEffect(() => {
        if (close) {
            if (messageRef.current) {
                prevMessage.current = value;
                messageRef.current.classList.add(styles.disapear);
            }
        }
    }, [close]);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName.indexOf('message-fadeout') >= 0) {
            if (prevMessage.current === value) {
                handleClose?.();
                prevMessage.current = undefined;
            } else {
                messageRef.current?.classList.remove(styles.disapear);
            }
        }
    };

    return (
        <div
            className={`${styles.message}${deviceClassName}`}
            ref={messageRef}
            onAnimationEnd={handleAnimationEnd}
        >
            <SVGBackground className={styles.background} type="new-set" />

            <div className={styles.content}>
                <div className={styles.text}>{value}</div>
            </div>
        </div>
    );
};

export default Message;
