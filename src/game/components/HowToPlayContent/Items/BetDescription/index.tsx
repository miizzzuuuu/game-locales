import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import Section from './Section';
import styles from './styles.module.scss';

const mainKeys = [
    'single',
    'split',
    'corner',
    'single-row',
    'single-column',
    'double-row',
    'double-column',
];

const fiftyFiftyKeys = ['small', 'big', 'odd', 'even', 'red', 'black'];

const BetDescription = () => {
    const keyLang = 'htp.bet-description-and-example';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <div className={styles.wrapper}>
                    <Section keyLang={`${keyLang}`} prefix="main-bet" dataKeys={mainKeys} />
                    <Section
                        keyLang={`${keyLang}`}
                        prefix="fifty-fifty-bet"
                        dataKeys={fiftyFiftyKeys}
                    />
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default BetDescription;
