import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../../../menus/Items/HowToPlay/HowToPlayCardV2';
import { Container, Section } from '../../../ui';
import P from '../../../ui/P';
import LimitBet from './LimitBet';
import ChipHorizontal from './SVG/ChipHorizontal';
import Timer from './Timer';
import TotalBet from './TotalBet';
import Username from './Username';
import styles from './styles.module.scss';

const keyLang = 'features-htp.general';

const General = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <Container>
                <Section className={styles.section}>
                    <Username />
                    <P>{t(`${keyLang}.paragraph-1`)}</P>
                </Section>

                <Section className={styles.section}>
                    <TotalBet />
                    <P>{t(`${keyLang}.paragraph-2`)}</P>
                </Section>

                <Section className={styles.section}>
                    <LimitBet />
                    <P>{t(`${keyLang}.paragraph-3`)}</P>
                </Section>

                <Section className={styles.section}>
                    <Timer />
                    <P>{t(`${keyLang}.paragraph-4`)}</P>
                </Section>

                <Section className={styles.section}>
                    <ChipHorizontal />
                    <P>{t(`${keyLang}.paragraph-5`)}</P>
                </Section>
            </Container>
        </HowToPlayCardV2>
    );
};

export default General;
