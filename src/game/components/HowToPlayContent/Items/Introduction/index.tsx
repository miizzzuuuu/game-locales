import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, Heading2, P } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import Tablebet from './SVG/Tablebet';

const Introduction = () => {
    const keyLang = 'htp.introduction';
    const keyLangGoal = 'htp.game-objective';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <Tablebet />
                <P keyLang={keyLang} value="content" dangerouslySetInnerHTML />
                <Heading2 keyLang={keyLangGoal} value="title" />
                <P keyLang={keyLangGoal} value="content" />
            </Container>
        </HowToPlayCard>
    );
};

export default Introduction;
