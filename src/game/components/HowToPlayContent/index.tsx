import { MenuContentContainer } from '../../../common/menus/MenuContentContainer';
import BetDescription from './Items/BetDescription';
import DTWCard from './Items/DTWCard';
import GeneralRules from './Items/GeneralRules';
import Introduction from './Items/Introduction';
import Payout from './Items/Payout';
import WildBet from './Items/WildBet';

const HowToPlayContent = () => {
    return (
        <MenuContentContainer>
            <Introduction />
            <GeneralRules />
            <DTWCard />
            <WildBet />
            <BetDescription />
            <Payout />
        </MenuContentContainer>
    );
};

export default HowToPlayContent;
