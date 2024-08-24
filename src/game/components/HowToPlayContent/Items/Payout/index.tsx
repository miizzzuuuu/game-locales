import LabelTranslate from '../../../../../common/components/LabelTranslate';
import Loading from '../../../../../common/components/Loading';
import { useFetchPayout } from '../../../../../common/hooks/useFetchPayout';
import { Container } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import TableMenuPayout from '../../../../../common/menus/Items/Payout/PayoutContent/TableMenuPayout';

const Payout = () => {
    const keyLang = 'htp.payout';
    const { loading, data } = useFetchPayout();

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>{loading ? <Loading /> : <TableMenuPayout data={data} />}</Container>
        </HowToPlayCard>
    );
};

export default Payout;
