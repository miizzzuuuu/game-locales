import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, Heading2 } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import MainBetTable from './MainBet/BetTable';
import Section from './Section';
import SideBetTable from './SideBet/SideBetTable';
import styles from './styles.module.scss';

const dataMainBet: string[] = ['dragon', 'tiger', 'tie'];
const dataSideBet: string[] = [
    'dragon-wild',
    'tiger-wild',
    'super-wild',
    'dragon-pair',
    'tiger-pair',
];

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
                        table={<MainBetTable data={dataMainBet} />}
                    />
                    <Section
                        heading={<Heading2 keyLang={keyLangSideBet} value="heading" />}
                        table={<SideBetTable data={dataSideBet} />}
                    />
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default BetDescription;
