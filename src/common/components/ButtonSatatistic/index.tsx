import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuStatistic } from '../../../store/slice/menuSlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconStatistic from './SVG/SVGIconStatistic';

const ButtonSatatistic = () => {
    const dispatch = useAppDispatch();

    return (
        <ButtonAction
            label={<LabelTranslate value="statistic" />}
            icon={<SVGIconStatistic />}
            onClick={() => dispatch(toggleMenuStatistic())}
        />
    );
};

export default ButtonSatatistic;
