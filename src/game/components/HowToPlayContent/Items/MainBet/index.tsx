import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import BetTable from './BetTable';

const data: string[] = ['dragon', 'tiger', 'tie'];

const PlacingABet = () => {
    const keyLang = 'htp.main-bet';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <BetTable data={data} />
            </Container>
        </HowToPlayCard>
    );
};

export default PlacingABet;
