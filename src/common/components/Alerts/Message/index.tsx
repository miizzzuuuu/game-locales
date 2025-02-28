import { AnimationEventHandler, ReactNode, useEffect, useRef } from 'react';
import SVGBackgroundMessageWinSide from '../../../../game/components/MessageWinSide/SVGBackgroundMessage';
import { MessageGameType, MessageWinSideType } from '../../../../types';
import styles from './styles.module.scss';
import SVGBackgroundMessage from './SVG/SVGBackgroundMessage';

interface IProps {
    value?: ReactNode | undefined;
    handleClose: () => void;
    type?: MessageGameType | MessageWinSideType;
}

const Message = ({ value, handleClose, type = 'none' }: IProps) => {
    const currentTimeOut = useRef<ReturnType<typeof setTimeout>>(null);
    const messageRef = useRef<HTMLDivElement>(null);

    const prevMessage = useRef<ReactNode>(null);

    useEffect(() => {
        currentTimeOut.current = setTimeout(
            () => {
                if (messageRef.current) {
                    prevMessage.current = value;
                    messageRef.current.classList.add(styles.disapear);
                }
            },
            type.includes('win-') ? 5000 : 2000,
        );
        return () => {
            if (currentTimeOut.current) {
                clearTimeout(currentTimeOut.current);
                currentTimeOut.current = null;
            }
        };
    }, [value]);

    const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
        if (e.animationName === 'fadeOut') {
            if (prevMessage.current === value) {
                handleClose();
                prevMessage.current = undefined;
            } else {
                messageRef.current?.classList.remove(styles.disapear);
            }
        }
    };

    return (
        <div className={`${styles.message}`} ref={messageRef} onAnimationEnd={handleAnimationEnd}>
            <SVGBackgroundMessage className={styles.background} type={type as MessageGameType} />
            <SVGBackgroundMessageWinSide
                className={styles.background}
                type={type as MessageWinSideType}
            />
            <div
                className={`${styles.content} ${type === 'no-game' ? `${styles['no-game']}` : ''} ${type.includes('win-') ? `win` : ''}`}
            >
                <div className={styles.text}>{value}</div>
            </div>
        </div>
    );
};

export default Message;
