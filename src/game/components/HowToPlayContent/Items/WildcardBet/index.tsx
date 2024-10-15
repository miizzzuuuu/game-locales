import { Fragment } from 'react/jsx-runtime';
import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, P, Ul } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';

const WildcardBet = () => {
    const keyLang = 'htp.wild-card-bet';
    const wildcardkeys = ['dragon-wild', 'tiger-wild', 'super-wild', 'dragon-pair', 'tiger-pair'];

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <Ul>
                    <li key={'description'}>
                        <P keyLang={keyLang} value="description" />
                    </li>

                    <li key={'description-2'}>
                        <P keyLang={keyLang} value="description-2" />
                    </li>
                    {wildcardkeys.map((key) => {
                        return (
                            <Fragment key={'wildcardkeys-'.concat(key)}>
                                <Ul>
                                    <li key={key}>
                                        <P keyLang={keyLang} value={key.concat('.title')} />
                                    </li>
                                </Ul>

                                <li key={key}>
                                    <P keyLang={keyLang} value={key.concat('.content')} />
                                </li>
                            </Fragment>
                        );
                    })}
                </Ul>
            </Container>
        </HowToPlayCard>
    );
};

export default WildcardBet;
