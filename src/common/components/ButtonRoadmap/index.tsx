import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectShowRoadmapUI, toggleRoadmapUI } from '../../../store/slice/gameStateSlice';
import ButtonAction from '../ButtonAction';
import SVGIconRoadmap from './SVG/SVGIconRoadmap';

const ButtonRoadmap = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const showRoadmapUI = useAppSelector(selectShowRoadmapUI);
    const color = showRoadmapUI ? '#00C3D8' : '#fff';

    return (
        <ButtonAction
            label={t('roadmap', { lng: 'en' })}
            icon={<SVGIconRoadmap strokeColor={color} />}
            borderColor={showRoadmapUI ? '#00C3D8' : undefined}
            onClick={() => dispatch(toggleRoadmapUI())}
        />
    );
};

export default ButtonRoadmap;
