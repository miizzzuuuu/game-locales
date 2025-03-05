import { useTranslation } from 'react-i18next';
import { Container, H2, Section } from '../../../../../common/components/HowToPlay/ui';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';
import MainBet from './MainBet';
import SideBet from './SideBet';
import { prefixBetDescription } from '../../helper';

const BetDescription = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${prefixBetDescription}.title`, { ns: 'game' })}>
            <Container>
                <Section>
                    <H2>{t(`${prefixBetDescription}.main-bet.title`, { ns: 'game' })}</H2>
                    <MainBet />
                </Section>

                <Section>
                    <H2>{t(`${prefixBetDescription}.side-bet.title`, { ns: 'game' })}</H2>
                    <SideBet />
                </Section>
            </Container>
        </HowToPlayCardV2>
    );
};

export default BetDescription;
