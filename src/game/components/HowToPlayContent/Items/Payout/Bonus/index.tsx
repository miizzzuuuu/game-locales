import LabelTranslate from '../../../../../../common/components/LabelTranslate';
import {
    Heading2,
    Table,
    TD,
    TH,
    THead,
    TR,
} from '../../../../../../common/menus/Items/HowToPlay/Components';
import PayoutNote from '../../../../../../common/menus/Items/Payout/PayoutContent/PayoutNote';

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

interface IProps {
    keyLang?: string;
}

const Bonus = ({ keyLang }: IProps) => {
    return (
        <div>
            <Heading2 keyLang={keyLang} value="bonus-payout" uppercase />
            <div>
                <Table>
                    <THead>
                        <TR>
                            <TH>
                                <LabelTranslate keyLang={keyLang} value="lucky-number-multiplier" />
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
            <PayoutNote content="payout-includes-initial-bet" />
        </div>
    );
};

export default Bonus;
