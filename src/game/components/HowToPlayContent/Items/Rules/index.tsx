import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, P, Ul } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import { ArrayHelper } from '../../../../../common/utils/ArrayHelper';

const Rules = () => {
    const keyLang = 'htp.rules';

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <Ul>
                    {ArrayHelper.range(4).map((_, idx) => (
                        <li key={idx}>
                            <P keyLang={keyLang} value={`steps.${idx}`} />
                        </li>
                    ))}
                </Ul>
            </Container>
        </HowToPlayCard>
    );
};

export default Rules;
