import { useAppSelector } from '../../../../store/hooks';
import { selectBoardcastMessage } from '../../../../store/slice/boardcastSlice';
import ButtonClose from './ButtonClose';
import styles from './styles.module.scss';

const isEmpty = (obj: object) => {
    return Object.keys(obj).length === 0;
};

const Message = () => {
    return (
        <div className={styles.modal}>
            <ButtonClose handleClose={() => {}} />

            <p className={styles.title}>Stop Game</p>
            <p className={styles.message}>Stop game due to fix lamp auto off</p>
        </div>
    );
};

const PopupMessage = () => {
    const messageBoardcast = useAppSelector(selectBoardcastMessage);

    if (isEmpty(messageBoardcast)) return null;

    return (
        <div className={styles.container}>
            <Message />
            <Message />
        </div>
    );
};

export default PopupMessage;
