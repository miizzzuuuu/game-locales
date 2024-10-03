import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectStreamingQuality,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import Button from '../../../../../../components/Button';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import styles from './styles.module.scss';

interface IQualityButtonProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
}

const StreamingQualityButton = ({ label, active, onClick }: IQualityButtonProps) => {
    return (
        <Button
            className={`${styles.button}${active ? ` ${styles.active}` : ''}`}
            onClick={onClick}
        >
            <LabelTranslate value={label} className={styles.label} />
        </Button>
    );
};

const StreamingQuality = () => {
    const dispatch = useAppDispatch();

    const streamingQuality = useAppSelector(selectStreamingQuality);

    return (
        <div className={styles['video-quality']}>
            <StreamingQualityButton
                label="medium"
                active={streamingQuality === 'medium'}
                onClick={() => dispatch(updateSetings({ streamingQuality: 'medium' }))}
            />
            <StreamingQualityButton
                label="high"
                active={streamingQuality === 'high'}
                onClick={() => dispatch(updateSetings({ streamingQuality: 'high' }))}
            />
            <StreamingQualityButton
                label="auto"
                active={streamingQuality === 'auto'}
                onClick={() => dispatch(updateSetings({ streamingQuality: 'auto' }))}
            />
        </div>
    );
};

export default StreamingQuality;
