import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectShowChip, toggleShowChip } from '../../../store/slice/gameStateSlice';
import ButtonAction from '../ButtonAction';
import SVGIconHideChip from './SVG/SVGIconHideChip';

const ButtonHideChip = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const showChip = useAppSelector(selectShowChip);

    return (
        <ButtonAction
            label={t(`${showChip ? 'hide' : 'show'}`, { lng: 'en' })}
            icon={<SVGIconHideChip fill={showChip ? 'white' : '#00C3D8'} />}
            borderColor={showChip ? undefined : '#00C3D8'}
            onClick={() => dispatch(toggleShowChip())}
        />
    );
};

export default ButtonHideChip;
