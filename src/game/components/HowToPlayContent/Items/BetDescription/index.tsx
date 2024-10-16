import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, Heading2 } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import MainBetTable from './MainBet';
import Section from './Section';
import SideBetTable from './SideBet';
import styles from './styles.module.scss';

const BetDescription = () => {
    const keyLang = 'htp.bet-description-and-example';
    const keyLangMainBet = 'htp.bet-description-and-example.main-bet';
    const keyLangSideBet = 'htp.bet-description-and-example.side-bet';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <div className={styles.wrapper}>
                    <Section
                        heading={<Heading2 keyLang={keyLangMainBet} value="heading" />}
                        table={<MainBetTable />}
                    />
                    <Section
                        heading={<Heading2 keyLang={keyLangSideBet} value="heading" />}
                        table={<SideBetTable />}
                    />
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default BetDescription;
