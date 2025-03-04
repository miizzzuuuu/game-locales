import { useTranslation } from 'react-i18next';
import { Container, P, Ul } from '../../../../../common/components/HowToPlay/ui';
import HowToPlayCardV2 from '../../../../../common/menus/Items/HowToPlay/HowToPlayCardV2';

const keyLang = 'htp.rules';

const GeneralRules = () => {
    const { t } = useTranslation();

    const steps = t(`${keyLang}.steps`, { ns: 'game', returnObjects: true });

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`, { ns: 'game' })}>
            <Container>
                <Ul>
                    {Array.isArray(steps) &&
                        steps.map((step, index) => {
                            return (
                                <li key={index}>
                                    <P>{step}</P>
                                </li>
                            );
                        })}
                </Ul>
            </Container>
        </HowToPlayCardV2>
    );
};

export default GeneralRules;
