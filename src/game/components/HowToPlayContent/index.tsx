import { MenuContentContainer } from '../../../common/menus/MenuContentContainer';
import GameObjective from './Items/GameObjective';
import Introduction from './Items/Introduction';
import Payout from './Items/Payout';
import Rules from './Items/Rules';
import WildcardBet from './Items/WildcardBet';
import BetDescription from './Items/BetDescription';

const HowToPlayContent = () => {
    return (
        <MenuContentContainer>
            <Introduction />
            <GameObjective />
            <WildcardBet />
            <BetDescription />
            <Rules />
            <Payout />
        </MenuContentContainer>
    );
};

export default HowToPlayContent;
