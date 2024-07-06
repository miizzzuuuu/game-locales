import StatitisticContent from '../../../../game/components/StatitisticContent';
import { useAppSelector } from '../../../../store/hooks';
import { selectOpenStatistic } from '../../../../store/slice/menuSlice';
import LabelTranslate from '../../../components/LabelTranslate';
import { MenuPageProps } from '../../Menu';
import Panel from '../../Panel';

const Statistic = ({ handleClose }: MenuPageProps) => {
    const openMenuStatistic = useAppSelector(selectOpenStatistic);

    return (
        <Panel
            show={openMenuStatistic}
            title={<LabelTranslate value="statistic" />}
            footerBg="#1e1f2e"
            handleClose={handleClose}
        >
            <StatitisticContent />
        </Panel>
    );
};

export default Statistic;
