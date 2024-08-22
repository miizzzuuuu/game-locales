import { MenuContentContainer } from '../../../../common/menus/MenuContentContainer';
import BonusSystem from '../Items/BonusSystem';
import Introduction from '../Items/Introduction';
import PlacingABet from '../Items/PlacingABet';
import Rules from '../Items/Rules';

const Content = () => {
    return (
        <MenuContentContainer>
            <Introduction />
            <Rules />
            <PlacingABet />
            <BonusSystem />
        </MenuContentContainer>
    );
};

export default Content;
