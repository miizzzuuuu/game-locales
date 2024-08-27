import { ReactNode } from 'react';
import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, Heading2 } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import styles from './styles.module.scss';

import SVGBet50 from './SVG/SVGBet50';
import SVGColRow from './SVG/SVGColRow';
import SVGCorner from './SVG/SVGCorner';
import SVGDouble from './SVG/SVGDouble';
import SVGSingle from './SVG/SVGSingle';

type Item = { key: string; icon?: ReactNode };

const data: Item[] = [
    {
        key: 'single-bet',
        icon: <SVGSingle />,
    },
    {
        key: 'split-bet',
        icon: <SVGDouble />,
    },
    {
        key: 'corner-bet',
        icon: <SVGCorner />,
    },
    {
        key: 'row-column-bets',
        icon: <SVGColRow />,
    },
    {
        key: '50-50-bet',
        icon: <SVGBet50 />,
    },
];

const PlacingABet = () => {
    const keyLang = 'htp.placing-a-bet';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <div className={styles.wrapper}>
                    {data.map((value, idx) => (
                        <div key={idx}>
                            <Heading2 keyLang={keyLang} value={value.key} />
                            <div>{value.icon}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default PlacingABet;
