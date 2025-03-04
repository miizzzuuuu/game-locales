import { Fragment } from 'react/jsx-runtime';
import LabelTranslate from '../../../../../common/components/LabelTranslate';
import { Container, P } from '../../../../../common/menus/Items/HowToPlay/Components';
import HowToPlayCard from '../../../../../common/menus/Items/HowToPlay/HowToPlayCard';
import DragonWild from './SVG/DragonWild';
import TigerWild from './SVG/TigerWild';
import SuperWild from './SVG/SuperWild';
import DragonPair from './SVG/DragonPair';
import TigerPair from './SVG/TigerPair';

const WildcardBet = () => {
    const keyLang = 'htp.wild-card-bet';
    const wildcardkeys = ['dragon-wild', 'tiger-wild', 'super-wild', 'dragon-pair', 'tiger-pair'];
    const logoCard = [<DragonWild />, <TigerWild />, <SuperWild />, <DragonPair />, <TigerPair />];

    return (
        <HowToPlayCard title={<LabelTranslate value="title" keyLang={keyLang} />}>
            <Container>
                <P keyLang={keyLang} value="description" />
                <table>
                    <tbody>
                        {wildcardkeys.map((key, idx) => {
                            return (
                                <Fragment key={'wildcardkeys-'.concat(key)}>
                                    <tr>
                                        <td>{logoCard[idx]}</td>
                                        <td>
                                            <P
                                                keyLang={keyLang}
                                                value={key.concat('.content')}
                                                dangerouslySetInnerHTML
                                            />
                                        </td>
                                    </tr>
                                </Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </Container>
        </HowToPlayCard>
    );
};

export default WildcardBet;
