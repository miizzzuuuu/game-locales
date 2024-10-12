import LabelTranslate from '../../../../../../components/LabelTranslate';
import { Container, P } from '../../../Components';
import HowToPlayCard from '../../../HowToPlayCard';
import LimitBet from './LimitBet';
import ChipHorizontal from './SVG/ChipHorizontal';
import SVGTotalBet from './SVG/SVGTotalBet';
import Timer from './Timer';
import Username from './Username';

import styles from './styles.module.scss';

const paragraphArr = [
    { icon: <Username /> },
    { icon: <SVGTotalBet /> },
    { icon: <LimitBet /> },
    { icon: <Timer /> },
    { icon: <ChipHorizontal /> },
];

const General = () => {
    const keyLang = 'common.htp.general';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <div className={styles.wrapper}>
                    {paragraphArr.map((value, idx) => (
                        <div key={idx} className={styles.items}>
                            {value.icon}
                            <P keyLang={keyLang} value={`content.paragraph-${idx + 1}`} />
                        </div>
                    ))}
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default General;
