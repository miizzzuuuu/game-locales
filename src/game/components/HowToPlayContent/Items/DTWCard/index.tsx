import { useTranslation } from 'react-i18next';
import { Container, P } from '../../../../../common/components/HowToPlay/ui';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import TableCardValue from './TableCardValue';

const keyLang = 'htp.dragon-tiger-wild-card';

const DTWCard = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`, { ns: 'game' })}>
            <Container>
                <P>{t(`${keyLang}.content`, { ns: 'game' })}</P>

                <TableCardValue />
            </Container>
        </HowToPlayCardV2>
    );
};

export default DTWCard;
