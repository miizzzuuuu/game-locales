import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuStatistic } from '../../../store/slice/menuSlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconPattern from './SVG/SVGIconPattern';

const ButtonPattern = () => {
    const dispatch = useAppDispatch();

    return (
        <ButtonAction
            label={<LabelTranslate value="pattern" />}
            icon={<SVGIconPattern />}
            onClick={() => dispatch(toggleMenuStatistic())}
        />
    );
};

export default ButtonPattern;
