import { AnimationEventHandler, ReactNode, useRef } from 'react';

import styles from './styles.module.scss';
import SVGBackground from './SVG/SVGBackground';

interface IProps {
    value?: ReactNode | undefined;
    handleClose?: () => void;
    close?: boolean;
}

const Message = ({ value, handleClose }: IProps) => {
    const messageRef = useRef<HTMLDivElement>(null);

    const prevMessage = useRef<ReactNode | undefined>();

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
        <div className={`${styles.message}`} ref={messageRef} onAnimationEnd={handleAnimationEnd}>
            <SVGBackground className={styles.background} type="new-set" />

            <div className={styles.content}>
                <div className={styles.text}>{value}</div>
            </div>
        </div>
    );
};

export default Message;
