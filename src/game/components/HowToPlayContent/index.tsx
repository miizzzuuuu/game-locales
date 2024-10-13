import { MenuContentContainer } from '../../../common/menus/MenuContentContainer';
import GameObjective from './Items/GameObjective';
import Introduction from './Items/Introduction';
import SideBet from './Items/SideBet';
import Payout from './Items/Payout';
import Rules from './Items/Rules';
import WildcardBet from './Items/WildcardBet';

const HowToPlayContent = () => {
    return (
        <MenuContentContainer>
            <Introduction />
            <GameObjective />
            <WildcardBet />
            <SideBet />
            <Rules />
            <Payout />
        </MenuContentContainer>
    );
};

export default HowToPlayContent;
