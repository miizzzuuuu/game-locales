import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import SideBetTable from './SideBetTable';

const data: string[] = ['dragon-wild', 'tiger-wild', 'super-wild', 'dragon-pair', 'tiger-pair'];

const PlacingABet = () => {
    const keyLang = 'htp.side-bet';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <SideBetTable data={data} />
            </Container>
        </HowToPlayCard>
    );
};

export default PlacingABet;
