import LabelTranslate from '../../../../../common/components/LabelTranslate';
import Loading from '../../../../../common/components/Loading';
import { useFetchPayout } from '../../../../../common/hooks/useFetchPayout';
import {
    Container,
    Heading2,
    Table,
    TD,
    TH,
    THead,
    TR,
} from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import TableMenuPayout from '../../../../../common/menus/Items/Payout/PayoutContent/TableMenuPayout';

const bonusPayout = [
    [30, 100],
    [35, 120],
    [40, 140],
    [45, 160],
    [50, 180],
    [55, 200],
    [60, 220],
    [65, 240],
    [70, 260],
    [75, 280],
    [80, 300],
    [85, 320],
    [90, 340],
    [95, 360],
    [95, 380],
    [95, 400],
    [95, 420],
    [95, 440],
    [95, 460],
    [95, 500],
];

const Payout = () => {
    const keyLang = 'htp.payout';
    const { loading, data } = useFetchPayout();

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <Heading2 keyLang={keyLang} value="bet-payout" uppercase />
                {loading ? <Loading /> : <TableMenuPayout data={data} />}

                <Heading2 keyLang={keyLang} value="bonus-payout" uppercase />
                <div>
                    <Table>
                        <THead>
                            <TR>
                                <TH>
                                    <LabelTranslate
                                        keyLang={keyLang}
                                        value="lucky-number-multiplier"
                                    />
                                </TH>
                                <TH>
                                    <LabelTranslate
                                        keyLang={keyLang}
                                        value="jackpot-number-multiplier"
                                    />
                                </TH>
                            </TR>
                        </THead>
                        <tbody>
                            {bonusPayout.map((bonus, key) => (
                                <TR key={key}>
                                    <TD className="text-center">
                                        <LabelTranslate
                                            keyLang={keyLang}
                                            value="number-times"
                                            option={{ value: bonus[0] }}
                                        />
                                    </TD>
                                    <TD className="text-center">
                                        <LabelTranslate
                                            keyLang={keyLang}
                                            value="number-times"
                                            option={{ value: bonus[1] }}
                                        />
                                    </TD>
                                </TR>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </Container>
        </HowToPlayCard>
    );
};

export default Payout;
