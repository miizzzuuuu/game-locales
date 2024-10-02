import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { selectGameNewSet } from '../../../../store/slice/gameSlice';
import Message from './Message';
import ShufflingAnimation from './ShufflingAnimation/Animation';
import styles from './styles.module.scss';
import { Features } from '../../../utils/Features';

const NewSet = () => {
    if (!Features.SHUFFLE_THE_CARDS) return null;

    const newSet = useAppSelector(selectGameNewSet);
    const [renderUI, setRenderUI] = useState(false);

    useEffect(() => {
        if (newSet) {
            setRenderUI(true);
        }
    }, [newSet]);

    if (!newSet && !renderUI) {
        return null;
    }

    const handleClose = () => {
        setRenderUI(false);
    };

    return (
        <div className={styles['new-set']}>
            <Message value="shuffling-cards" handleClose={handleClose} close={!newSet} />

            <ShufflingAnimation close={!newSet} />
        </div>
    );
};

export default NewSet;
