import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../../../menus/Items/HowToPlay/HowToPlayCardV2';
import { Card, CardWrapper, Container, H2, P } from '../../../ui';
import styles from './styles.module.scss';

const keyLang = 'features-htp.settings';

const settingsKeys = [
    'video',
    'live-streaming-audio',
    'background-music',
    'game-effects',
    'auto-bet',
    'language',
];

const Settings = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <Container>
                <P>{t(`${keyLang}.description`)}</P>

                <CardWrapper>
                    {settingsKeys.map((key) => (
                        <Card key={key}>
                            <H2>{t(`${keyLang}.${key}.title`)}</H2>

                            <P>{t(`${keyLang}.${key}.description`)}</P>
                            <P>{t(`${keyLang}.${key}.default`)}</P>
                        </Card>
                    ))}
                </CardWrapper>

                <div className={styles.disclaimer}>
                    <P className={styles['disclaimer-title']}>{t('disclaimer')}:</P>
                    <P>{t(`${keyLang}.disclaimer-settings`)}</P>
                </div>
            </Container>
        </HowToPlayCardV2>
    );
};

export default Settings;
