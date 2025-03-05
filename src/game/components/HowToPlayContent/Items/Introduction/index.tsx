import { useTranslation } from 'react-i18next';
import { Container, H2, P } from '../../../../../common/components/HowToPlay/ui';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import { prefixIntroduction } from '../../helper';
import TableBetDTWild from './TableBetDTWild';

const Introduction = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${prefixIntroduction}.title`, { ns: 'game' })}>
            <Container>
                <TableBetDTWild />
                <P>{t(`${prefixIntroduction}.paragraph-1`, { ns: 'game' })}</P>
                <H2>{t(`${prefixIntroduction}.game-objective`, { ns: 'game' })}</H2>
                <P>{t(`${prefixIntroduction}.paragraph-2`, { ns: 'game' })}</P>
            </Container>
        </HowToPlayCardV2>
    );
};

export default Introduction;
