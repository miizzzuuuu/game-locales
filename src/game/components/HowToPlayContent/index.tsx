import { MenuContentContainer } from '../../../common/menus/MenuContentContainer';
import GameObjective from './Items/GameObjective';
import Introduction from './Items/Introduction';
import Payout from './Items/Payout';
import Rules from './Items/Rules';
import WildcardBet from './Items/WildcardBet';
import BetDescription from './Items/BetDescription';
import DTWCard from './Items/DTWCard';

const HowToPlayContent = () => {
    return (
        <MenuContentContainer>
            <Introduction />
            <GameObjective />
            <Rules />
            <DTWCard />
            <WildcardBet />
            <BetDescription />
            <Payout />
        </MenuContentContainer>
    );
};

export default HowToPlayContent;
