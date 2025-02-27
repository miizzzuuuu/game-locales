import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectShowRoadmapUI, toggleRoadmapUI } from '../../../store/slice/gameStateSlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconPattern from './SVG/SVGIconPattern';

const ButtonRoadmap = () => {
    const dispatch = useAppDispatch();
    const showRoadmapUI = useAppSelector(selectShowRoadmapUI);
    const color = showRoadmapUI ? '#00C3D8' : '#fff';

    return (
        <ButtonAction
            label={<LabelTranslate value="roadmap" option={{ lng: 'en' }} />}
            icon={<SVGIconPattern strokeColor={color} />}
            borderColor={showRoadmapUI ? '#00C3D8' : undefined}
            onClick={() => dispatch(toggleRoadmapUI())}
        />
    );
};

export default ButtonRoadmap;
