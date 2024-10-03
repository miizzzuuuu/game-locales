import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import {
    selectEnableStreamingVideo,
    updateSetings,
} from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import Item from '../../../Item';
import SVGIconCamera from '../../../SVG/SVGIconCamera';

const StreamingVideo = () => {
    const dispatch = useAppDispatch();

    const enableStreamingVideo = useAppSelector(selectEnableStreamingVideo);

    return (
        <Item
            label={<LabelTranslate value="video" />}
            icon={<SVGIconCamera />}
            active={enableStreamingVideo}
            onChangeActive={(value) => {
                dispatch(updateSetings({ enableStreamingVideo: value }));
            }}
        />
    );
};

export default StreamingVideo;
