import { MenuContentContainer } from '../../../../common/menus/MenuContentContainer';
import BetDescription from '../Items/BetDescription';
import BonusSystem from '../Items/BonusSystem';
import Introduction from '../Items/Introduction';
import Payout from '../Items/Payout';
import PlacingABet from '../Items/PlacingABet';
import Rules from '../Items/Rules';

const Content = () => {
    return (
        <MenuContentContainer>
            <Introduction />
            <Rules />
            <PlacingABet />
            <BetDescription />
            <BonusSystem />
            <Payout />
        </MenuContentContainer>
    );
};

export default Content;
