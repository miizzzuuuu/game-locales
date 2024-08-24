import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, P } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

const Introduction = () => {
    const keyLang = 'htp.introduction';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <P keyLang={keyLang} value="content" />
            </Container>
        </HowToPlayCard>
    );
};

export default Introduction;
