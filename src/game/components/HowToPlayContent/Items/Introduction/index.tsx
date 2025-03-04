import { useTranslation } from 'react-i18next';
import { Container, H2, P } from '../../../../../common/components/HowToPlay/ui';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import TableBetDTWild from './TableBetDTWild';

const keyLang = 'htp.introduction';

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`, { ns: 'game' })}>
            <Container>
                <TableBetDTWild />
                <P>{t(`${keyLang}.paragraph-1`, { ns: 'game' })}</P>
                <H2>{t(`${keyLang}.game-objective`, { ns: 'game' })}</H2>
                <P>{t(`${keyLang}.paragraph-2`, { ns: 'game' })}</P>
            </Container>
        </HowToPlayCardV2>
    );
};

export default Introduction;
