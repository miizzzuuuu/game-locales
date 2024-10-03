import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks';
import { selectAutoRebet, updateSetings } from '../../../../../../../store/slice/settingsSlice';
import LabelTranslate from '../../../../../../components/LabelTranslate';
import Item from '../../../Item';
import SVGIconBetClick from '../../../SVG/SVGIconBetClick';

const AutoRebet = () => {
    const dispatch = useAppDispatch();

    const autoRebet = useAppSelector(selectAutoRebet);

    return (
        <Item
            label={<LabelTranslate value="auto-rebet" />}
            icon={<SVGIconBetClick />}
            active={autoRebet}
            onChangeActive={(value) => {
                dispatch(updateSetings({ autoRebet: value }));
            }}
        />
    );
};

export default AutoRebet;
