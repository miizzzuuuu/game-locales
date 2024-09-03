import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectShowChip, toggleShowChip } from '../../../store/slice/gameStateSlice';
import ButtonAction from '../ButtonAction';
import LabelTranslate from '../LabelTranslate';
import SVGIconHideChip from './SVG/SVGIconHideChip';

const ButtonHideChip = () => {
    const dispatch = useAppDispatch();
    const showChip = useAppSelector(selectShowChip);

    return (
        <ButtonAction
            label={
                <LabelTranslate value={`${showChip ? 'hide' : 'show'}`} option={{ lng: 'en' }} />
            }
            icon={<SVGIconHideChip fill={showChip ? 'white' : '#00C3D8'} />}
            borderColor={showChip ? undefined : '#00C3D8'}
            onClick={() => dispatch(toggleShowChip())}
        />
    );
};

export default ButtonHideChip;
