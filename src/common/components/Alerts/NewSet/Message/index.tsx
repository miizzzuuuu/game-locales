import { AnimationEventHandler, useEffect, useRef } from 'react';

import styles from './styles.module.scss';
import SVGBackground from './SVG/SVGBackground';
import LabelTranslate from '../../../LabelTranslate';

interface IProps {
    value?: string;
    handleClose?: () => void;
    close?: boolean;
}

const Message = ({ value, close, handleClose }: IProps) => {
    const messageRef = useRef<HTMLDivElement>(null);
    const prevMessage = useRef<string | undefined>();

    useEffect(() => {
        if (close) {
            if (messageRef.current) {
                prevMessage.current = value;
                messageRef.current.classList.add(styles.disapear);
            }
        }
    }, [close]);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeOut') {
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
                {value && <LabelTranslate value={value} className={styles.text} />}
            </div>
        </div>
    );
};

export default Message;
