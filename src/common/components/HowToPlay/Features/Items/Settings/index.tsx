import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import HowToPlayCardV2 from '../../../../../menus/Items/HowToPlay/HowToPlayCardV2';
import SVGIconBetClick from '../../../../SVG/Icons/SVGIconBetClick';
import SVGIconCamera from '../../../../SVG/Icons/SVGIconCamera';
import SVGIconLanguage from '../../../../SVG/Icons/SVGIconLanguage';
import SVGIconMusic from '../../../../SVG/Icons/SVGIconMusic';
import SVGIconSfx from '../../../../SVG/Icons/SVGIconSfx';
import SVGIconVolume from '../../../../SVG/Icons/SVGIconVolume';
import { Card, CardWrapper, Container, P } from '../../../ui';
import styles from './styles.module.scss';

const keyLang = 'features-htp.settings';

const settingsKeys: string[] = [
    'video',
    'live-streaming-audio',
    'background-music',
    'game-effects',
    'auto-bet',
    'language',
];

const iconsObj: Record<string, ReactNode> = {
    video: <SVGIconCamera />,
    'live-streaming-audio': <SVGIconVolume />,
    'background-music': <SVGIconMusic />,
    'game-effects': <SVGIconSfx />,
    'auto-bet': <SVGIconBetClick />,
    language: <SVGIconLanguage />,
};

const Icon = ({ component }: { component: ReactNode }) => {
    return <div className={styles.icon}>{component}</div>;
};

const Settings = () => {
    const { t } = useTranslation();

    return (
        <HowToPlayCardV2 title={t(`${keyLang}.title`)}>
            <Container>
                <P>{t(`${keyLang}.description`)}</P>

                <CardWrapper>
                    {settingsKeys.map((key) => (
                        <Card key={key}>
                            <div className={styles.top}>
                                <Icon component={iconsObj[key]} />
                                <P className={styles.title}>{t(`${keyLang}.${key}.title`)}</P>
                            </div>

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
