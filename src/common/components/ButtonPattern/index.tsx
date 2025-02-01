import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectShowPatternUI, togglePatternUI } from '../../../store/slice/gameStateSlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconPattern from './SVG/SVGIconPattern';

const ButtonPattern = () => {
    const dispatch = useAppDispatch();
    const showPatternUI = useAppSelector(selectShowPatternUI);
    const color = showPatternUI ? '#00C3D8' : '#fff';

    return (
        <ButtonAction
            label={<LabelTranslate value="pattern" option={{ lng: 'en' }} />}
            icon={<SVGIconPattern strokeColor={color} />}
            borderColor={!showPatternUI ? undefined : '#00C3D8'}
            onClick={() => dispatch(togglePatternUI())}
        />
    );
};

export default ButtonPattern;
