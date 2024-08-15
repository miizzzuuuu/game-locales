import Message from './Message';
import ShufflingAnimation from './ShufflingAnimation/Animation';
import styles from './styles.module.scss';

const NewSet = () => {
    return (
        <div className={styles['new-set']}>
            <Message value="shuffling card" />

            <ShufflingAnimation />
        </div>
    );
};

export default NewSet;
