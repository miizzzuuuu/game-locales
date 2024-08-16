import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectGameNewSet } from '../../../../store/slice/gameSlice';
import Message from './Message';
import ShufflingAnimation from './ShufflingAnimation/Animation';
import styles from './styles.module.scss';

const NewSet = () => {
    const newSet = useAppSelector(selectGameNewSet);

    const [renderUI, setRenderUI] = useState(false);

    const handleClose = () => {
        setRenderUI(false);
    };

    useEffect(() => {
        if (newSet) {
            setRenderUI(true);
        }
    }, [newSet]);

    if (!newSet && !renderUI) {
        return null;
    }

    return (
        <div className={styles['new-set']}>
            <Message value="shuffling card" handleClose={handleClose} close={!newSet} />

            <ShufflingAnimation close={!newSet} />
        </div>
    );
};

export default NewSet;
