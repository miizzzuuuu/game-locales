import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, P } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import CardValueTable from './CardValueTable';

const DTWCard = () => {
    const keyLang = 'htp.dragon-tiger-wild-card';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <P keyLang={keyLang} value="content" />
                <CardValueTable />
            </Container>
        </HowToPlayCard>
    );
};

export default DTWCard;
