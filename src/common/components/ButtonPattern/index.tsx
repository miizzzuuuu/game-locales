import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { togglePattern } from '../../../store/slice/historySlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconPattern from './SVG/SVGIconPattern';

const ButtonPattern = () => {
    const dispatch = useAppDispatch();
    const showPatternUI = useAppSelector((state) => state.history.showPatternUI);
const color = showPatternUI? "#00C3D8" : "#fff"
    return (
        <ButtonAction
            borderColor={color}
            label={<LabelTranslate value="pattern" />}
            icon={<SVGIconPattern strokeColor={color}/>}
            onClick={() => dispatch(togglePattern())}
        />
    );
};

export default ButtonPattern;
