import LabelTranslate from '../../../../../../components/LabelTranslate';
import { Container, P } from '../../../Components';
import HowToPlayCard from '../../../HowToPlayCard';

const Menu = () => {
    const keyLang = 'common.htp.menu';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container></Container>
        </HowToPlayCard>
    );
};

export default Menu;
