import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../store/hooks';
import { toggleMenuStatistic } from '../../../store/slice/menuSlice';
import ButtonAction from '../ButtonAction';
import SVGIconStatistic from './SVG/SVGIconStatistic';

const ButtonSatatistic = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    return (
        <ButtonAction
            label={t('statistic', { lng: 'en' })}
            icon={<SVGIconStatistic />}
            onClick={() => dispatch(toggleMenuStatistic())}
        />
    );
};

export default ButtonSatatistic;
